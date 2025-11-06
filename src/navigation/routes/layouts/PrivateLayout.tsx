import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes";
import PrivateNavbar from "@navigation/navbar/PrivateNavbar";
import { useState } from "react";
import MotionContainer from "@global/containers/MotionContainer";
import MobileTabBar from "@global/components/navbars/MobileTabBar";
import { MOBILE_BAR_TABS } from "@global/constants/mobile-bar-tabs";
import PrivateDesktopSidebar from "@navigation/sidebar/PrivateDesktopSidebar";

const PrivateLayout = () => {
	const [navbarHeight, setNavbarHeight] = useState(0);

	const token = localStorage.getItem("token");

	if (!token) { // TODO: Consultar isVerify, solo dejar pasar en caso el usuario haya sido verificado
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	return (
		<div className="relative bg-pattern min-h-dvh">
			<PrivateNavbar onHeightChange={setNavbarHeight} />

			<div
				style={{ top: navbarHeight, height: `calc(100dvh - ${navbarHeight}px)` }}
				className="hidden fixed md:block md:py-8 md:ps-8">
				<PrivateDesktopSidebar />
			</div>

			<MotionContainer
				style={{ top: navbarHeight, height: `calc(100dvh - ${navbarHeight}px)` }}
				className="relative overflow-y-auto md:left-[222px] md:grid md:w-full md:max-w-[calc(100dvw-222px)] md:p-8 md:ps-10">
				<Outlet />
			</MotionContainer>

			<MobileTabBar tabs={MOBILE_BAR_TABS} />
		</div>
	);
}

export default PrivateLayout