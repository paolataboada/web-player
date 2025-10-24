import { Outlet } from "react-router-dom";
import PublicNavbar from "../../navbar/PublicNavbar";
import "../styles/layout.css";

const PublicLayout = () => {
	return (
		<div className="relative bg-pattern">
			<div className="absolute radial-gradient-top h-80 w-full" />
			<PublicNavbar />
			<div className="relative z-1 flex flex-col items-center">
				<div className="relative">
					<img
						src="/Desktop/imagen-fondo.png"
						alt="Jugadores de FFANTASY"
						className="w-full h-[200px] object-cover rounded-t-lg shadow-lg"
					/>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
						<img
							src="/Desktop/palabra.png"
							alt="FFANTASY"
							className="h-7 mb-2"
						/>
					</div>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default PublicLayout;
