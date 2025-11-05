import type { AxiosError } from "axios";
import { errorToast } from "../../../app/middlewares/toast/toast.actions";
import type { IApiErrorResponse } from "../context/ErrorHandlerProvider";
import type { AppDispatch } from "@app/store";
import type { NavigateFunction } from "react-router-dom";

export const handleBusinessError = (
    error: AxiosError<IApiErrorResponse>,
    dispatch: AppDispatch,
    navigate: NavigateFunction,
) => {
    const resError = error?.response?.data;
    const statusCode = resError?.statusCode;
    const message = resError?.message?.toString() ?? "Ocurrió un error inesperado. Por favor, inténtalo nuevamente.";

    switch (statusCode) {
        case 401:
            dispatch(errorToast({ message: "Tu sesión ha expirado. Inicia sesión nuevamente para continuar." }));
            navigate("/login");
            break;

        case 403:
            dispatch(errorToast({ message: "No tienes permisos para realizar esta acción." }));
            break;

        case 404:
            dispatch(errorToast({ message: "No pudimos encontrar la información solicitada.", }));
            break;

        case 500:
        case 502:
        case 503:
        case 504:
            dispatch(errorToast({ message: "Estamos experimentando problemas en el servidor. Por favor, intenta nuevamente más tarde." }));
            break;

        default:
            dispatch(errorToast({ message }));
            break;
    }
};