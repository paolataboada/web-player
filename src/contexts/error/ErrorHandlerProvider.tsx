import { useCallback, type PropsWithChildren, type ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorHandlerContext, type THandlerError } from "./ErrorHandlerContext";
import { errorNotification } from "../../app/slices/notification.slice";
import type { AxiosError } from "axios";

interface IApiErrorResponse {
    statusCode?: number;
    message?: string;
    [key: string]: unknown;
}


interface Props extends PropsWithChildren {
    children: ReactNode;
}

export const ErrorHandlerProvider = ({ children }: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleError: THandlerError = useCallback((error) => {
        const axiosError = error as AxiosError<IApiErrorResponse>;
        const resError = axiosError?.response?.data;

        const statusCode = resError?.statusCode ?? axiosError?.response?.status;
        const message = resError?.message ?? "An unexpected error occurred.";

        switch (statusCode) {
            case 400:
            case 409:
            case 500:
                dispatch(errorNotification(message));
                break;

            case 401:
                if (message === "Token has expired.") {
                    dispatch(errorNotification("Session expired"));
                } else if (message === "Unauthorized") {
                    dispatch(errorNotification(message));
                } else {
                    dispatch(errorNotification("Unauthorized access"));
                }
                navigate("/login");
                break;

            default:
                dispatch(errorNotification(message));
                break;
        }
    }, [dispatch, navigate]);

    return (
        <ErrorHandlerContext.Provider value={handleError}>
            {children}
        </ErrorHandlerContext.Provider>
    );
};