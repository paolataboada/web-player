import { useNavigate } from "react-router-dom";
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

const ResetPasswordPage = () => {
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState({ new: false, confirm: false });

	const togglePassword = (key: "new" | "confirm") => {
		setShowPassword(prev => ({ ...prev, [key]: !prev[key] }));
	};

	const navigate = useNavigate();

	const { rules, getBarColor, getProgressWidth } = usePasswordValidation(password);

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

			<form className="grid gap-10">
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
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
				/>

				<div className="flex gap-4 mb-2">
					<FantasyButton
						variant="secondary"
						size="lg"
						onClick={() => navigate(ROUTES.LOGIN)}
						className="h-auto w-full">
						Volver al inicio
					</FantasyButton>
					<FantasyButton
						variant="primary"
						size="lg"
						onClick={() => navigate(ROUTES.CONFIRM_RESET_PASSWORD)}
						className="h-auto w-full px-2.5!">
						Guardar
					</FantasyButton>
				</div>
			</form>
		</MotionContainer>
	);
};

export default ResetPasswordPage;