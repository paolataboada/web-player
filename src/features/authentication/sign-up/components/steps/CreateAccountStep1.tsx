import { useNavigate } from "react-router-dom";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import MotionContainer from "@global/containers/MotionContainer";
import { ROUTES } from "@navigation/routes/routes";
import { useForm } from "react-hook-form";
import { useSignUpActionsServices } from "@features/authentication/sign-up/services/useSignUpActionsServices";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { step1SignUpValidations } from "@features/authentication/sign-up/validations/step-1-sign-up.validations";
import type { ISignUpData } from "../../pages/SignUpPage";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import ErrorAlert from "@global/components/alerts/ErrorAlert";

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
        clearErrors,
        formState: { errors }
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
            const { exists } = await validateEmailService(form.email);
            if (exists) {
                setError("email", { type: "manual" });
                return
            }
            setSignUpData(prev => ({ ...prev, ...form }));
            nextStep();
        } catch (error) {
            handleError(error);
        } finally {
            dispatch(disableGlobalLoading());
        }
    }

    return (
        <MotionContainer key="create-account">
            <form className="grid gap-6 mt-8" onSubmit={handleSubmit(handleVerifyEmail)}>
                {
                    errors.email && (
                        <ErrorAlert
                            title="Correo en uso"
                            message="Ya existe un usuario con el correo electrónico ingresado"
                            onClose={() => clearErrors()}
                        />
                    )
                }
                <AuthInput
                    label="Nombres"
                    placeholder="Ingresa tus nombres"
                    error={errors.firstName}
                    {...register("firstName", step1SignUpValidations.firstName)}
                />

                <AuthInput
                    label="Apellidos"
                    placeholder="Ingresa tus apellidos"
                    error={errors.lastName}
                    {...register("lastName", step1SignUpValidations.lastName)}
                />

                <AuthInput
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
    )
}

export default CreateAccountStep1