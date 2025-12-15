import { BusinessECSessionCurrent } from "@documentation/code/business.error.code";
import { ROUTES } from "@navigation/routes/routes";
import { useNavigate } from "react-router-dom";

export const useHandleAuthError = () => {
    const navigate = useNavigate();

    const errorHandlers: Record<BusinessECSessionCurrent, () => void> = {
        [BusinessECSessionCurrent.SESSION_TOKEN_INVALID_EXPIRED]: () => {
            navigate(ROUTES.LOGIN);
        },
        [BusinessECSessionCurrent.EMAIL_NOT_VERIFIED]: () => {
            navigate(ROUTES.VERIFY_EMAIL);
        },
        [BusinessECSessionCurrent.PROFILE_INCOMPLETE]: () => {
            navigate(ROUTES.COMPLETE_PROFILE);
        },
    };

    return (error: any) => {
        const message = error?.response?.data?.message;
        const code = error?.response?.data?.code;

        if (!message || !code) return;

        errorHandlers[code as BusinessECSessionCurrent]();
    };
};