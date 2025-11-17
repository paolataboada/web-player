import { errorToast } from "../../../app/middlewares/toast/toast.actions";
import type { AppDispatch } from "@app/store";
import { ROUTES } from "@navigation/routes/routes";
import type { NavigateFunction } from "react-router-dom";

export interface IBusinessError {
    response: {
        data?: {
            message?: string;
            statusCode?: number;
            [key: string]: unknown;
        };
        [key: string]: unknown;
    };
    message?: string;
}

export const handleBusinessError = (
    error: IBusinessError,
    dispatch: AppDispatch,
    navigate: NavigateFunction,
) => {
    const resError = error?.response?.data;
    const statusCode = resError?.statusCode;
    const message = resError?.message?.toString() ?? "Ocurrió un error inesperado. Por favor, inténtalo nuevamente.";

    switch (statusCode) {
        case 401:
            dispatch(errorToast({ message }));
            navigate(ROUTES.LOGIN);
            break;

        default:
            dispatch(errorToast({ message }));
            break;
    }
};