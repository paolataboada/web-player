import { Outlet, useNavigate } from "react-router-dom";
import MotionContainer from "@global/containers/MotionContainer";
import { useDispatch, useSelector } from "react-redux";
import type { IRootState } from "@app/store";
import { ROUTES } from "../routes";
import { useEffect, useState } from "react";
import PrivateSplash from "@global/components/loaders/PrivateSplash";
import { usePrivateActionsServices } from "@global/loaders/services/usePrivateActionsServices";
import { useHandleAuthError } from "@global/errors/handlers/handleAuthError";
import { setSession, type ISession } from "@app/slices/session/session.slice";

const PrivateLayout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleAuthError = useHandleAuthError();

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

			<MotionContainer className="relative z-1 max-w-[426px] mx-auto">
				<Outlet />
			</MotionContainer>
		</div>
	);
}

export default PrivateLayout