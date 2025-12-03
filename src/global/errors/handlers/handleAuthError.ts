import { ROUTES } from "@navigation/routes/routes";
import { useNavigate } from "react-router-dom";

export const useHandleAuthError = () => {
    const navigate = useNavigate();

    const errorHandlers: Record<number, (message: string) => void> = {
        401: () => {
            navigate(ROUTES.LOGIN);
        },
        403: () => {
            navigate(ROUTES.VERIFY_EMAIL);
        },
        428: () => {
            navigate(ROUTES.COMPLETE_PROFILE);
        },
    };

    return (error: any) => {
        const message = error?.response?.data?.message;
        const statusCode = error?.response?.data?.statusCode;

        if (!message || !statusCode) return;

        errorHandlers[statusCode]?.(message);
    };
};