import { useLocation, useNavigate } from "react-router-dom";
import FantasyButton from "../../../../global/components/buttons/FantasyButton";
import IconKey from "@global/assets/svg/key.svg";
import { ROUTES } from "../../../../navigation/routes/routes";
import MotionContainer from "../../../../global/containers/MotionContainer";
import AuthInput from "../../shared/components/inputs/AuthInput";
import IconOpenEye from "../../../../global/components/icons/IconOpenEye";
import IconCloseEye from "../../../../global/components/icons/IconCloseEye";
import { useState } from "react";
import { usePasswordValidation } from "../../shared/hooks/usePasswordValidation";
import { PasswordStrength } from "../../shared/components/passwords/PasswordStrength";
import { useForm } from "react-hook-form";
import { resetPasswordService } from "../services/reset-password.service";
import { useDispatch } from "react-redux";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { getResetPasswordValidations } from "../validations/reset-password.validation";

type TFormResetPassword = {
	newPassword: string;
	confirmPassword: string;
}

const ResetPasswordPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const dispatch = useDispatch();
	const handleError = useHandlerError();

	const [showPassword, setShowPassword] = useState({ new: false, confirm: false });

	const togglePassword = (key: "new" | "confirm") => {
		setShowPassword(prev => ({ ...prev, [key]: !prev[key] }));
	};

	const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<TFormResetPassword>({
		mode: "onChange",
	});


	const password = watch("newPassword")?.trim() ?? "";
	const { rules, getBarColor, getProgressWidth } = usePasswordValidation(password);
	const resetPasswordValidations = getResetPasswordValidations(password);

	const onSubmit = async (form: TFormResetPassword) => {
		try {
			const payload = {
				email: location.state?.email,
				code: location.state?.code,
				newPassword: form.newPassword,
				confirmPassword: form.confirmPassword,
			};
			await resetPasswordService(dispatch, payload);

			navigate(ROUTES.CONFIRM_RESET_PASSWORD);
		} catch (error) {
			handleError(error);
		}
	};

	return (
		<MotionContainer className="grid">
			<img src={IconKey} alt="Key Icon" className="w-16 h-16 mx-auto mb-3 md:w-20 md:h-20" />
			<h2 className="text-center mb-2.5">
				Nueva contraseña
			</h2>

			<p className="font-body-normal-regular text-center text-neutral-200 mb-10">
				Crea una nueva contraseña y recupera tu acceso
				<br />
				para seguir compitiendo
			</p>

			<form onSubmit={handleSubmit(onSubmit)} className="grid gap-10">
				<div className="grid gap-4">
					<AuthInput
						type={showPassword.new ? "text" : "password"}
						label="Contraseña"
						placeholder="Contraseña"
						icon={
							<div
								onClick={() => togglePassword("new")}
								className="absolute bottom-0 right-3 top-1/2 -translate-y-1/2 cursor-pointer">
								{showPassword.new ? <IconOpenEye color="white" size={24} /> : <IconCloseEye color="white" size={24} />}
							</div>
						}
						className="pr-10"
						error={errors.newPassword?.message}
						{...register("newPassword", resetPasswordValidations.newPassword)}
					/>
					<PasswordStrength
						rules={rules}
						getBarColor={getBarColor}
						getProgressWidth={getProgressWidth}
					/>
				</div>

				<AuthInput
					type={showPassword.confirm ? "text" : "password"}
					label="Confirmar Nueva Contraseña"
					placeholder="Confirmar Nueva Contraseña"
					icon={
						<div
							onClick={() => togglePassword("confirm")}
							className="absolute bottom-0 right-3 top-1/2 -translate-y-1/2 cursor-pointer">
							{showPassword.confirm ? <IconOpenEye color="white" size={24} /> : <IconCloseEye color="white" size={24} />}
						</div>
					}
					className="pr-10"
					error={errors.confirmPassword?.message}
					{...register("confirmPassword", resetPasswordValidations.confirmPassword)}
				/>

				<div className="flex gap-4 mb-2">
					<FantasyButton
						type="button"
						variant="secondary"
						size="lg"
						onClick={() => navigate(ROUTES.LOGIN)}
						className="h-auto w-full">
						Volver al inicio
					</FantasyButton>
					<FantasyButton
						type="submit"
						variant="primary"
						size="lg"
						disabled={!isValid}
						className="h-auto w-full px-2.5!">
						Guardar
					</FantasyButton>
				</div>
			</form>
		</MotionContainer>
	);
};

export default ResetPasswordPage;