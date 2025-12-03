import { useLocation } from "react-router-dom";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { ROUTES } from "@navigation/routes/routes";
import { useLoginActionsServices } from "@features/authentication/services/useLoginActionsServices";
import { useSignUpActionsServices } from "@features/authentication/services/useSignUpActionsServices";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const useSocialAuth = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const handleError = useHandlerError();
    const { googleLoginService, facebookLoginService } = useLoginActionsServices();
    const { googleSignUpService, facebookSignUpService } = useSignUpActionsServices();

    const handleGoogle = async () => {
        try {
            if (pathname === ROUTES.LOGIN) {
                dispatch(activeGlobalLoading({ message: "Iniciando sesión..." }));
                googleLoginService();
            }
            if (pathname === ROUTES.SIGNUP) {
                dispatch(activeGlobalLoading({ message: "Creando cuenta..." }));
                googleSignUpService();
            }
            await delay(700);
        } catch (error) {
            handleError(error);
        } finally {
            dispatch(disableGlobalLoading());
        }
    };

    const handleFacebook = async () => {
        try {
            if (pathname === ROUTES.LOGIN) {
                dispatch(activeGlobalLoading({ message: "Iniciando sesión..." }));
                facebookLoginService();
            };
            if (pathname === ROUTES.SIGNUP) {
                dispatch(activeGlobalLoading({ message: "Creando cuenta..." }));
                facebookSignUpService();
            }
            await delay(700);
        } catch (error) {
            handleError(error);
        } finally {
            dispatch(disableGlobalLoading());
        }
    };

    return { handleGoogle, handleFacebook };
};
