import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { ROUTES } from "@navigation/routes/routes";

import { googleLoginService } from "@features/authentication/login/services/google-login.service";
import { facebookLoginService } from "@features/authentication/login/services/facebook-login.service";
import { googleSignUpService } from "@features/authentication/sign-up/services/google-sign-up.service";
import { facebookSignUpService } from "@features/authentication/sign-up/services/facebook-sign-up.service";

export const useSocialAuth = () => {
    const { pathname } = useLocation();

    const dispatch = useDispatch();
    const handleError = useHandlerError();

    const handleGoogle = async () => {
        try {
            if (pathname === ROUTES.LOGIN) await googleLoginService(dispatch);
            if (pathname === ROUTES.SIGNUP) googleSignUpService();
        } catch (error) {
            handleError(error);
        }
    };

    const handleFacebook = async () => {
        try {
            if (pathname === ROUTES.LOGIN) await facebookLoginService(dispatch);
            if (pathname === ROUTES.SIGNUP) await facebookSignUpService();
        } catch (error) {
            handleError(error);
        }
    };

    return { handleGoogle, handleFacebook };
};
