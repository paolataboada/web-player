import { toast } from "react-toastify";
import { type Middleware } from "@reduxjs/toolkit";
import { errorToast, infoToast, successToast, warningToast, type IToastPayload } from "./toast.actions";
import CustomContentToast from "@global/components/toasts/CustomContentToast";

type TTypeToast = "success" | "error" | "info" | "warning";

export const toastMiddleware: Middleware<unknown, unknown> = () => (next) => (action) => {
    const result = next(action);

    const handleToast = (type: TTypeToast) => {
        const { title, message, position } = (action as { payload: IToastPayload }).payload ?? {};
        toast[type](CustomContentToast(title ?? type, message), { position: position ?? "top-center" });
    };

    if (successToast.match(action)) handleToast("success");
    if (errorToast.match(action)) handleToast("error");
    if (infoToast.match(action)) handleToast("info");
    if (warningToast.match(action)) handleToast("warning");

    return result;
};
