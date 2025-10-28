import MotionContainer from "../../../../global/containers/MotionContainer";
import IconLock from "@global/assets/svg/lock.svg";
import FantasyButton from "../../../../global/components/buttons/FantasyButton";
import AuthInput from "../../shared/components/inputs/AuthInput";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../navigation/routes/routes";
import { useForm } from "react-hook-form";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { validateTrimmed } from "@features/authentication/shared/utils/validate-trimmed";
import { sendRecoveryCodeService } from "../services/send-recovery-code.service";
import { useDispatch } from "react-redux";

type TFormRecoverPassword = {
	email: string;
};

const RecoverPasswordPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleError = useHandlerError();

	const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<TFormRecoverPassword>({
		defaultValues: { email: "" },
	});

	const onSubmit = async (form: TFormRecoverPassword) => {
		try {
			const email = form.email.trim();
			await sendRecoveryCodeService(dispatch, { email });

			navigate(ROUTES.VERIFY_CODE, { state: { email } });
		} catch (error) {
			handleError(error);
		}
	};

	return (
		<MotionContainer>
			<form onSubmit={handleSubmit(onSubmit)} className="grid gap-10 mb-20">
				<div className="grid place-content-center gap-3">
					<img src={IconLock} className="w-12 h-12 mx-auto" />
					<div className="grid gap-2.5 max-w-[332px]">
						<h2 className="text-center text-neutral-50">Ups, ¿No recuerdas tu contraseña?</h2>
						<p className="font-body-normal-regular text-neutral-200 text-center">
							Ingresa tu correo y te enviaremos un código <br className="hidden sm:flex" /> para crear una nueva.
						</p>
					</div>
				</div>

				<AuthInput
					type="email"
					label="Correo electrónico"
					placeholder="Ingresa tu correo electrónico"
					error={errors.email?.message}
					{...register("email", {
						required: "Ingrese su correo electrónico",
						validate: (value: string | undefined) => {
							return validateTrimmed(value, "su correo electrónico");
						},
					})}
				/>

				<div className="flex justify-between gap-4">
					<FantasyButton
						type="button"
						variant="secondary"
						size="lg"
						onClick={() => navigate(ROUTES.LOGIN)}
						className="w-full h-auto">
						Volver al inicio
					</FantasyButton>
					<FantasyButton
						type="submit"
						variant="primary"
						size="lg"
						disabled={!isValid || isSubmitting}
						className="w-full h-auto">
						Enviar código
					</FantasyButton>
				</div>
			</form>
		</MotionContainer>
	)
}

export default RecoverPasswordPage