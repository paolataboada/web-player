import { useLocation } from "react-router-dom";
import FantasyButton from "../../global/components/buttons/FantasyButton";
import { ROUTES } from "../routes/routes";
const PublicNavbar = () => {
	const { pathname } = useLocation();
	const isLoginOrSignup = pathname === ROUTES.LOGIN || pathname === ROUTES.SIGNUP;

	return (
		<nav className="relative w-full flex justify-center items-center py-4 px-4 z-1 md:h-[72px] md:px-14">
			<div className="flex items-center">
				<img
					src="/logos/fantasy-logotipo-white.svg"
					alt="FFantasy Logo"
					className="h-6 w-[114px]"
				/>
			</div>
			{isLoginOrSignup &&
				<FantasyButton variant="primary" size="sm" className="ms-auto">
					Iniciar Sesión
				</FantasyButton>
			}
		</nav>
	)
}

export default PublicNavbar