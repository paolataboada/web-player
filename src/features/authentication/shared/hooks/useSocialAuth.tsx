import { useLocation } from "react-router-dom";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { ROUTES } from "@navigation/routes/routes";
import { useLoginActions } from "@features/authentication/login/services/useLoginActions";
import { useSignUpActions } from "@features/authentication/sign-up/services/useSignUpActions";

export const useSocialAuth = () => {
    const { pathname } = useLocation();
    const handleError = useHandlerError();
    const { googleLoginService, facebookLoginService } = useLoginActions();
    const { googleSignUpService, facebookSignUpService } = useSignUpActions();

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
