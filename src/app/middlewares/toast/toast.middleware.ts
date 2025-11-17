import { toast } from "react-toastify";
import { type Middleware } from "@reduxjs/toolkit";
import { errorToast, infoToast, successToast, warningToast, type IToastPayload } from "./toast.actions";
import CustomContentToast from "@global/components/toasts/CustomContentToast";

type TTypeToast = "success" | "error" | "info" | "warning";

const TOAST_TITLES_ES: Record<TTypeToast, string> = {
    success: "Éxito",
    error: "Error",
    info: "Información",
    warning: "Advertencia",
};

export const toastMiddleware: Middleware = () => (next) => (action) => {
    const result = next(action);

    const handleToast = (type: TTypeToast, payload: IToastPayload) => {
        const { title, message, position } = payload;
        toast[type](CustomContentToast(title ?? TOAST_TITLES_ES[type], message), { position: position ?? "top-center" });
    };

    if (successToast.match(action)) handleToast("success", action.payload);
    if (errorToast.match(action)) handleToast("error", action.payload);
    if (infoToast.match(action)) handleToast("info", action.payload);
    if (warningToast.match(action)) handleToast("warning", action.payload);

    return result;
};
