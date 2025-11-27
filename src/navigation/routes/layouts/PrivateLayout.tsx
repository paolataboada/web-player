import { Navigate, Outlet, useNavigate } from "react-router-dom";
import PrivateNavbar from "@navigation/navbar/PrivateNavbar";
import MotionContainer from "@global/containers/MotionContainer";
import MobileTabBar from "@global/components/navbars/MobileTabBar";
import { MOBILE_BAR_TABS } from "@global/constants/mobile-bar-tabs";
import PrivateDesktopSidebar from "@navigation/sidebar/PrivateDesktopSidebar";
import PrivateFooter from "@navigation/footer/PrivateFooter";
import { useSelector } from "react-redux";
import type { IRootState } from "@app/store";
import { type ISession } from "@app/slices/session/session.slice";
import { ROUTES } from "../routes";
import { useEffect, useState } from "react";
import PrivateSplash from "@global/components/loaders/PrivateSplash";

const PrivateLayout = () => {
	const navigate = useNavigate();
	const { token, user }: ISession = useSelector((state: IRootState) => state.session);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const checkToken = async () => {
			try {
				if (!token || !user) {
					return navigate(ROUTES.LOGIN);
				}
				const response = await fetch("http://localhost:3000/api/auth/check-token", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`,
					},
				});
				if (!response.ok) {
					return navigate(ROUTES.LOGIN);
				}
			} catch (error) {
				return navigate(ROUTES.LOGIN);
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