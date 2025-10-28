import { useLocation } from "react-router-dom";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { ROUTES } from "@navigation/routes/routes";

import { googleLoginService } from "@features/authentication/login/services/google-login.service";
import { facebookLoginService } from "@features/authentication/login/services/facebook-login.service";
import { googleSignUpService } from "@features/authentication/sign-up/services/google-sign-up.service";
import { facebookSignUpService } from "@features/authentication/sign-up/services/facebook-sign-up.service";

export const useSocialAuth = () => {
    const { pathname } = useLocation();

    const handleError = useHandlerError();

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
