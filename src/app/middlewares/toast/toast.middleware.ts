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

    const handleToast = (type: TTypeToast) => {
        const { title, message, position } = (action as { payload: IToastPayload }).payload ?? {};
        toast[type](CustomContentToast(title ?? TOAST_TITLES_ES[type], message), { position: position ?? "top-center" });
    };

    if (successToast.match(action)) handleToast("success");
    if (errorToast.match(action)) handleToast("error");
    if (infoToast.match(action)) handleToast("info");
    if (warningToast.match(action)) handleToast("warning");

    return result;
};
