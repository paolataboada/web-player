import { useNavigate } from "react-router-dom";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import InputField from "@global/components/forms/InputField";
import MotionContainer from "@global/containers/MotionContainer";
import { ROUTES } from "@navigation/routes/routes";
import { useForm } from "react-hook-form";
import { useSignUpActionsServices } from "@features/authentication/services/useSignUpActionsServices";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { step1SignUpValidations } from "@features/authentication/validations/sign-up/step-1-sign-up.validations";
import { useDispatch } from "react-redux";
import {
	activeGlobalLoading,
	disableGlobalLoading,
} from "@app/slices/loading-global/loadingGlobal.slice";
import ErrorAlert from "@global/components/alerts/ErrorAlert";
import type { ISignUpData } from "@features/authentication/pages/SignUpPage";
import { BUSINESS_ERROR_MAPPING } from "@documentation/mapping/error.mapping";
import type { BusinessEC } from "@documentation/code/business.error.code";

type IStep1Form = Pick<ISignUpData, "firstName" | "lastName" | "email">;

interface Props {
	nextStep: () => void;
	signUpData: ISignUpData;
	setSignUpData: React.Dispatch<React.SetStateAction<ISignUpData>>;
}

const CreateAccountStep1 = ({ nextStep, signUpData, setSignUpData }: Props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleError = useHandlerError();
	const { validateEmailService } = useSignUpActionsServices();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<IStep1Form>({
		defaultValues: {
			firstName: signUpData.firstName,
			lastName: signUpData.lastName,
			email: signUpData.email,
		},
	});

	const handleVerifyEmail = async (form: IStep1Form) => {
		try {
			dispatch(activeGlobalLoading({ message: "Verificando correo electrónico..." }));
			await validateEmailService(form.email.trim());
			setSignUpData((prev) => ({ ...prev, ...form }));
			nextStep();
		} catch (error: any) {
			const businessError = BUSINESS_ERROR_MAPPING[error?.code as BusinessEC];
			if (businessError) {
				setError("email", { type: "email-available", message: businessError.message });
				return;
			}
			handleError(error);
		} finally {
			dispatch(disableGlobalLoading());
		}
	};

	return (
		<MotionContainer key="create-account">
			<form className="grid gap-6 mt-8" onSubmit={handleSubmit(handleVerifyEmail)}>
				{(errors.email?.type === "email-available" && errors.email?.message) &&
					<ErrorAlert message={errors.email?.message} />
				}

				<InputField
					label="Nombres"
					placeholder="Ingresa tus nombres"
					error={errors.firstName}
					{...register("firstName", step1SignUpValidations.firstName)}
				/>

				<InputField
					label="Apellidos"
					placeholder="Ingresa tus apellidos"
					error={errors.lastName}
					{...register("lastName", step1SignUpValidations.lastName)}
				/>

				<InputField
					label="Correo electrónico"
					placeholder="Ingresa tu correo electrónico"
					error={errors.email}
					{...register("email", step1SignUpValidations.email)}
				/>

				<FantasyButton
					type="submit"
					variant="primary"
					size="lg"
					className="mt-4 mb-2">
					Siguiente
				</FantasyButton>
			</form>

			<AuthLinkText
				text="¿Ya tienes una cuenta?"
				linkText="Inicia sesión"
				onClick={() => navigate(ROUTES.LOGIN)}
				className="py-[18px] px-4"
			/>
		</MotionContainer>
	);
};

export default CreateAccountStep1;
