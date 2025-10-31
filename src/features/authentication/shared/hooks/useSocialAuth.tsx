import { useLocation } from "react-router-dom";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { ROUTES } from "@navigation/routes/routes";
import { useLoginActionsServices } from "@features/authentication/login/services/useLoginActionsServices";
import { useSignUpActionsServices } from "@features/authentication/sign-up/services/useSignUpActionsServices";

export const useSocialAuth = () => {
    const { pathname } = useLocation();
    const handleError = useHandlerError();
    const { googleLoginService, facebookLoginService } = useLoginActionsServices();
    const { googleSignUpService, facebookSignUpService } = useSignUpActionsServices();

    const handleGoogle = () => {
        try {
            if (pathname === ROUTES.LOGIN) googleLoginService();
            if (pathname === ROUTES.SIGNUP) googleSignUpService();
        } catch (error) {
            handleError(error);
        }
    };

    const handleFacebook = () => {
        try {
            if (pathname === ROUTES.LOGIN) facebookLoginService();
            if (pathname === ROUTES.SIGNUP) facebookSignUpService();
        } catch (error) {
            handleError(error);
        }
    };

    return { handleGoogle, handleFacebook };
};
