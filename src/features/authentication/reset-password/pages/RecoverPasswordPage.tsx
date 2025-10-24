import MotionContainer from "../../../../global/containers/MotionContainer";
import IconLock from "@global/assets/svg/lock.svg";
import FantasyButton from "../../../../global/components/buttons/FantasyButton";
import AuthInput from "../../shared/components/inputs/AuthInput";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../navigation/routes/routes";

const RecoverPasswordPage = () => {
	const navigate = useNavigate();

	return (
		<MotionContainer>
			<div className="grid gap-10 mb-20">
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
				/>

				<div className="flex justify-between gap-4">
					<FantasyButton
						variant="secondary"
						size="lg"
						onClick={() => navigate(ROUTES.LOGIN)}
						className="w-full h-auto">
						Volver al inicio
					</FantasyButton>
					<FantasyButton
						type="button"
						variant="primary"
						size="lg"
						onClick={() => navigate(ROUTES.VERIFY_CODE)}
						className="w-full h-auto">
						Enviar código
					</FantasyButton>
				</div>
			</div>
		</MotionContainer>
	)
}

export default RecoverPasswordPage