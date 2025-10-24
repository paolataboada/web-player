import { useLocation, useNavigate } from "react-router-dom";
import FantasyButton from "../../global/components/buttons/FantasyButton";
import { ROUTES } from "../routes/routes";
const PublicNavbar = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const isLoginOrSignUpPage = pathname === ROUTES.LOGIN || pathname === ROUTES.SIGNUP;

	const ACTION_TEXT = {
		[ROUTES.LOGIN]: "Crear Cuenta",
		[ROUTES.SIGNUP]: "Iniciar Sesión",
	}

	const ACTION_NAVIGATION = {
		[ROUTES.LOGIN]: ROUTES.SIGNUP,
		[ROUTES.SIGNUP]: ROUTES.LOGIN,
	}

	return (
		<nav className="relative w-full flex justify-center items-center py-4 px-4 z-1 md:h-[72px] md:px-14">
			<div className="flex items-center">
				<img
					src="/logos/fantasy-logotipo-white.svg"
					alt="FFantasy Logo"
					className="h-6 w-[114px]"
				/>
			</div>
			{isLoginOrSignUpPage &&
				<FantasyButton
					variant="primary"
					size="sm"
					onClick={() => navigate(ACTION_NAVIGATION[pathname])}
					className="ms-auto">
					{ACTION_TEXT[pathname]}
				</FantasyButton>
			}
		</nav>
	)
}

export default PublicNavbar