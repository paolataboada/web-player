import { toast } from "react-toastify";
import { successToast, errorToast, clearToast } from "@app/slices/toast/toast.slice";
import type { Middleware } from "@reduxjs/toolkit";

export const toastMiddleware: Middleware = store => next => action => {
    const result = next(action);

    if (successToast.match(action)) {
        toast.success(action.payload, { position: "top-center" });
        store.dispatch(clearToast());
    }

    if (errorToast.match(action)) {
        toast.error(action.payload, { position: "bottom-center" });
        store.dispatch(clearToast());
    }

    return result;
};
