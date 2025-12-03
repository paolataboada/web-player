import { Outlet } from "react-router-dom";
import PublicNavbar from "../../navbar/PublicNavbar";
import fantasyBanner from "../../../global/assets/banners/fantasy-banner.png";
import MotionContainer from "@global/containers/MotionContainer";
import "../styles/layout.css";
import { useEffect } from "react";
import { clearSession } from "@app/slices/session/session.slice";
import { useDispatch } from "react-redux";


const PublicLayout = () => {
	const dispatch = useDispatch();

	// Clear session on unmount
	useEffect(() => {
		dispatch(clearSession());
	}, []);

	return (
		<div className="relative bg-pattern min-h-dvh">
			<div className="absolute radial-gradient-top h-80 w-full" />

			<PublicNavbar />

			<MotionContainer
				className="relative z-1 max-w-[426px] grid gap-6 mx-auto px-6 pb-4 
				transition-all duration-500 sm:px-0 sm:pb-0">
				<img
					src={fantasyBanner}
					alt="Banner Jugadores de FFANTASY 2"
					className="hidden w-full h-[164px] object-cover rounded-2xl sm:block"
				/>
				<Outlet />
			</MotionContainer>
		</div>
	);
};

export default PublicLayout;
