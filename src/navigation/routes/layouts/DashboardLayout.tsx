import { Outlet, useLocation } from "react-router-dom";
import PrivateNavbar from "@navigation/navbar/PrivateNavbar";
import MotionContainer from "@global/containers/MotionContainer";
import MobileTabBar from "@global/components/navbars/MobileTabBar";
import { MOBILE_BAR_TABS } from "@global/constants/mobile-bar-tabs";
import PrivateDesktopSidebar from "@navigation/sidebar/PrivateDesktopSidebar";
import PrivateFooter from "@navigation/footer/PrivateFooter";
import { useResponsive } from "@global/hooks/useResponsive";
import { ROUTES } from "../routes";

const DashboardLayout = () => {
	const location = useLocation();
	const { isSm, isMd } = useResponsive();
	const HEADER_HEIGHT = isMd ? 88 : 48;
	const TABBAR_MOBILE_HEIGHT = 78;

	const shouldHideMobileTabBar = HIDE_MOBILE_TABBAR_ROUTES.includes(location.pathname);
	const availableHeight = isSm || shouldHideMobileTabBar
		? `calc(100dvh - ${HEADER_HEIGHT}px)`
		: `calc(100dvh - ${HEADER_HEIGHT}px - ${TABBAR_MOBILE_HEIGHT}px)`


	return (
		<div className="relative min-h-dvh">
			<PrivateNavbar />

			{isMd ?
				(<div
					style={{ top: HEADER_HEIGHT, height: `calc(100dvh - ${HEADER_HEIGHT}px)` }}
					className="fixed py-8 ps-8">
					<PrivateDesktopSidebar />
				</div>)
				:
				(shouldHideMobileTabBar ? null : <MobileTabBar tabs={MOBILE_BAR_TABS} />)
			}

			<MotionContainer
				style={{ top: HEADER_HEIGHT, height: availableHeight }}
				className="relative z-1 overflow-y-auto md:left-[222px] md:max-w-[calc(100dvw-222px)]">
				<Outlet />

				{isMd && <PrivateFooter />}
			</MotionContainer>
		</div>
	);
}

const HIDE_MOBILE_TABBAR_ROUTES = [
	ROUTES.PROFILE,
];

export default DashboardLayout