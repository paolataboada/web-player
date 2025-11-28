import { Outlet, useNavigate } from "react-router-dom";
import PrivateNavbar from "@navigation/navbar/PrivateNavbar";
import MotionContainer from "@global/containers/MotionContainer";
import MobileTabBar from "@global/components/navbars/MobileTabBar";
import { MOBILE_BAR_TABS } from "@global/constants/mobile-bar-tabs";
import PrivateDesktopSidebar from "@navigation/sidebar/PrivateDesktopSidebar";
import PrivateFooter from "@navigation/footer/PrivateFooter";
import { useDispatch, useSelector } from "react-redux";
import type { IRootState } from "@app/store";
import { ROUTES } from "../routes";
import { useEffect, useState } from "react";
import PrivateSplash from "@global/components/loaders/PrivateSplash";
import { usePrivateActionsServices } from "@global/loaders/services/usePrivateActionsServices";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useHandleAuthError } from "@global/errors/handlers/handleAuthError";
import { setSession, type ISession } from "@app/slices/session/session.slice";

const PrivateLayout = () => {
	const navigate = useNavigate();
	const handleError = useHandlerError();
	const dispatch = useDispatch();

	const { token }: ISession = useSelector((state: IRootState) => state.session);
	const [loading, setLoading] = useState<boolean>(true);

	const { verifyTokenAndGetAccountDataService } = usePrivateActionsServices();

	useEffect(() => {
		const checkToken = async () => {
			try {
				if (!token) return navigate(ROUTES.LOGIN);
				const data = await verifyTokenAndGetAccountDataService({ token });
				dispatch(setSession({ user: data, token }));
			} catch (error) {
				useHandleAuthError(error);
				handleError(error);
			} finally {
				setLoading(false);
			}
		};
		checkToken();
	}, []);

	if (loading) return <PrivateSplash />;

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