import { Outlet } from "react-router-dom";
import PrivateNavbar from "@navigation/navbar/PrivateNavbar";
import MotionContainer from "@global/containers/MotionContainer";
import MobileTabBar from "@global/components/navbars/MobileTabBar";
import { MOBILE_BAR_TABS } from "@global/constants/mobile-bar-tabs";
import PrivateDesktopSidebar from "@navigation/sidebar/PrivateDesktopSidebar";
import PrivateFooter from "@navigation/footer/PrivateFooter";
import FantasyLoader from "@global/components/loaders/FantasyLoader";
import { useEffect, useState } from "react";
import { useLoadingSplashActionsServices } from "@global/loaders/services/useLoadingSplashActionsServices";
import { useDispatch } from "react-redux";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { clearUser } from "@app/slices/user/user.slice";
import { isBusinessError } from "@global/utils/is-business-error";

const PrivateLayout = () => {
	const [, setIsValidSession] = useState(false);
	const [isCheckingSession, setIsCheckingSession] = useState(true);
	const [closingSessionMessage, setClosingSessionMessage] = useState("");

	const dispatch = useDispatch();
	const handleError = useHandlerError();

	const { verifyTokenAndGetAccountDataService } = useLoadingSplashActionsServices();

	useEffect(() => {
		const verifyToken = async () => {
			const token = localStorage.getItem("token");

			if (!token) {
				setIsCheckingSession(false);
				return;
			}

			try {
				await verifyTokenAndGetAccountDataService({ token });
				setIsValidSession(true);
			} catch (error) {
				handleError(error);
				dispatch(clearUser());
				setIsValidSession(false);

				if (isBusinessError(error)) {
					setClosingSessionMessage(error.response.data?.message ?? "");
				}
			}

			setIsCheckingSession(false);
		};

		verifyToken();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isCheckingSession) {
		return (
			<FantasyLoader
				text={closingSessionMessage}
				duration={2000}
			/>
		);
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
				className="relative overflow-y-auto flex flex-col md:left-[222px] md:max-w-[calc(100dvw-222px)]">
				<div className="flex-1 grid w-full md:p-8 md:ps-10">
					<Outlet />
				</div>

				<PrivateFooter />
			</MotionContainer>

			<MobileTabBar tabs={MOBILE_BAR_TABS} />
		</div>
	);
}

export default PrivateLayout