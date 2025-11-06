import type { AxiosError } from "axios";
import type { IApiErrorResponse } from "../context/ErrorHandlerProvider";
import { errorToast } from "@app/middlewares/toast/toast.actions";
import type { AppDispatch } from "@app/store";

export const handleSystemError = (
    error: AxiosError<IApiErrorResponse>,
    dispatch: AppDispatch,
) => {
    console.error("System Error:", error);

    const title = "System Error";
    const message = error?.response?.data.message?.toString() ?? "";

    if (!error.response) {
        dispatch(errorToast({ title, message: "Sin conexión a internet. Verifica tu red e inténtalo de nuevo." }));
        return;
    }

    dispatch(errorToast({ title, message }));
};