import { errorToast } from "@app/middlewares/toast/toast.actions";
import { clearSession } from "@app/slices/session/session.slice";
import { ROUTES } from "@navigation/routes/routes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useHandleAuthError = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const errorHandlers: Record<number, (message: string) => void> = {
        401: (message: string) => {
            dispatch(clearSession());
            dispatch(errorToast({ message }));
            navigate(ROUTES.LOGIN);
        },
        403: (message: string) => {
            dispatch(errorToast({ message }));
            navigate(ROUTES.VERIFY_EMAIL);
        },
        428: (message: string) => {
            dispatch(errorToast({ message }));
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