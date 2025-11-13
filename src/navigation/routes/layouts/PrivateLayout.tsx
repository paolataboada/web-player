import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes";
import PrivateNavbar from "@navigation/navbar/PrivateNavbar";
import MotionContainer from "@global/containers/MotionContainer";
import MobileTabBar from "@global/components/navbars/MobileTabBar";
import { MOBILE_BAR_TABS } from "@global/constants/mobile-bar-tabs";
import PrivateDesktopSidebar from "@navigation/sidebar/PrivateDesktopSidebar";

const PrivateLayout = () => {
	const token = localStorage.getItem("token");
	const player = JSON.parse(localStorage.getItem("player") || "{}");

	if (!token && !player?.username) {
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	return (
		<div className="relative bg-pattern-private min-h-dvh">
			<PrivateNavbar />

			<div
				style={{ top: "88px", height: "calc(100dvh - 88px)" }}
				className="hidden fixed md:block md:py-8 md:ps-8">
				<PrivateDesktopSidebar />
			</div>

			<MotionContainer
				style={{ top: "88px", height: "calc(100dvh - 88px)" }}
				className="relative overflow-y-auto md:left-[222px] md:grid md:w-full md:max-w-[calc(100dvw-222px)] md:p-8 md:ps-10">
				<Outlet />
			</MotionContainer>

			<MobileTabBar tabs={MOBILE_BAR_TABS} />
		</div>
	);
}

export default PrivateLayout