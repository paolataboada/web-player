import { Outlet } from "react-router-dom";
import PublicNavbar from "../../navbar/PublicNavbar";
import fantasyBanner from "../../../global/assets/banners/fantasy-banner.png";
import "../styles/layout.css";

const PublicLayout = () => {
	return (
		<div className="relative bg-pattern min-h-screen">
			<div className="absolute radial-gradient-top h-80 w-full" />

			<PublicNavbar />

			<div 
				className="relative z-1 max-w-[426px] grid gap-6 mx-auto px-6 pb-4 
				transition-all duration-500 sm:px-0 sm:pb-0">
				<img
					src={fantasyBanner}
					alt="Banner Jugadores de FFANTASY"
					className="w-full h-[164px] object-cover rounded-2xl"
				/>
				<Outlet />
			</div>
		</div>
	);
};

export default PublicLayout;
