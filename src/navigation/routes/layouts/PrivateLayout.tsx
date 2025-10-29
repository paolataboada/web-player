import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes";
import PrivateNavbar from "@navigation/navbar/PrivateNavbar";
import { useState } from "react";
import MotionContainer from "@global/containers/MotionContainer";
import MobileTabBar from "@global/components/navbars/MobileTabBar";
import { MOBILE_BAR_TABS } from "@global/constants/mobile-bar-tabs";

const PrivateLayout = () => {
	const [navbarHeight, setNavbarHeight] = useState(0);

	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	return (
		<div className="relative bg-pattern min-h-dvh">
			<PrivateNavbar onHeightChange={setNavbarHeight} />

			<MotionContainer className="relative overflow-y-auto" style={{ top: navbarHeight, height: `calc(100dvh - ${navbarHeight}px)` }}>
				<Outlet />
			</MotionContainer>

            <MobileTabBar tabs={MOBILE_BAR_TABS} />
		</div>
	);
}

export default PrivateLayout