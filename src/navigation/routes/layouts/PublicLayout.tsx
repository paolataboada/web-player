import { Outlet } from "react-router-dom";
import PublicNavbar from "../../navbar/PublicNavbar";
import "../styles/layout.css";

const PublicLayout = () => {
	return (
		<div className="relative bg-pattern min-h-screen">
			<div className="absolute radial-gradient-top h-80 w-full" />

			<PublicNavbar />

			<div className="relative z-1 px-6 pb-4 max-w-[426px] mx-auto transition-all duration-500 sm:px-0 sm:pb-0">
				<img
					src="/Desktop/imagen-fondo.png"
					alt="Banner Jugadores de FFANTASY"
					className="w-full h-[164px] object-cover rounded-2xl"
				/>
				<Outlet />
			</div>
		</div>
	);
};

export default PublicLayout;
