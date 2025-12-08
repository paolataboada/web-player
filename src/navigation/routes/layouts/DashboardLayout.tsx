import { Outlet } from "react-router-dom";
import PrivateNavbar from "@navigation/navbar/PrivateNavbar";
import MotionContainer from "@global/containers/MotionContainer";
import MobileTabBar from "@global/components/navbars/MobileTabBar";
import { MOBILE_BAR_TABS } from "@global/constants/mobile-bar-tabs";
import PrivateDesktopSidebar from "@navigation/sidebar/PrivateDesktopSidebar";
import PrivateFooter from "@navigation/footer/PrivateFooter";

const DashboardLayout = () => {
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
				className="relative overflow-y-auto flex flex-col md:left-[222px] md:max-w-[calc(100dvw-222px)]">
				<div className="flex-1 grid w-full p-4 md:p-8 md:ps-10">
					<Outlet />
				</div>

				<PrivateFooter />
			</MotionContainer>

			<MobileTabBar tabs={MOBILE_BAR_TABS} />
		</div>
	);
}

export default DashboardLayout