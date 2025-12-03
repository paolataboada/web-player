import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MotionContainer from "@global/containers/MotionContainer";
import { useDispatch, useSelector } from "react-redux";
import type { IRootState } from "@app/store";
import { ROUTES } from "../routes";
import { useEffect, useState } from "react";
import PrivateSplash from "@global/components/loaders/PrivateSplash";
import { usePrivateActionsServices } from "@global/loaders/services/usePrivateActionsServices";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useHandleAuthError } from "@global/errors/handlers/handleAuthError";
import { setSession, type ISession } from "@app/slices/session/session.slice";
import { getHeaderTitle } from "@global/utils/get-header-title";

const PrivateLayout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleError = useHandlerError();
	const handleAuthError = useHandleAuthError();

	const location = useLocation();
	const title = getHeaderTitle(location.pathname)

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
				handleAuthError(error);
				handleError(error);
			} finally {
				setLoading(false);
			}
		};
		checkToken();
	}, []);

	if (loading) return <PrivateSplash />;

	return (
		<div className="relative bg-pattern min-h-dvh">
			<div className="absolute radial-gradient-top h-80 w-full" />

			<div className="relative bg-neutral-900 border-b border-neutral-500 h-16 w-full p-5 md:hidden">
				<p className="font-body-large-medium text-neutral-50 text-center">{title}</p>
			</div>

			<MotionContainer className="relative z-1 max-w-[426px] mx-auto">
				<Outlet />
			</MotionContainer>
		</div>
	);
}

export default PrivateLayout