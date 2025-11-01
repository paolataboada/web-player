import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";
import IconCheck from "@global/assets/svg/check.svg";
import MotionContainer from "@global/containers/MotionContainer";
import FantasyButton from "@global/components/buttons/FantasyButton";

const ConfirmationResetPasswordStep4 = () => {
	const navigate = useNavigate();

	return (
		<MotionContainer className="grid place-content-center h-[60dvh]">
			<img src={IconCheck} alt="IconCheck" className="w-16 h-16 mx-auto mb-3 md:w-20 md:h-20" />
			<h3 className="text-center mb-2.5 md:hidden">
				¡Tu nueva contraseña se ha guardado correctamente!
			</h3>
			<h2 className="hidden text-center mb-2.5 md:block">
				¡Tu nueva contraseña se ha guardado correctamente!
			</h2>

			<p className="font-body-normal-regular text-center text-neutral-200 mb-10">
				Tu cuenta está segura.
				<br />
				Usa tu nueva contraseña para acceder.
			</p>
			<FantasyButton
				type="button"
				variant="primary"
				size="lg"
				onClick={() => navigate(ROUTES.LOGIN)}>
				Iniciar sesión
			</FantasyButton>
		</MotionContainer>
	);
}

export default ConfirmationResetPasswordStep4