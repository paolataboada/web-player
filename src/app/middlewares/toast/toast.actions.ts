import { createAction } from "@reduxjs/toolkit";
import type { ToastPosition } from "react-toastify";

export interface IToastPayload {
    title?: string;
    message: string;
    position?: ToastPosition;
}

export const successToast = createAction<IToastPayload>("toast/success");
export const errorToast = createAction<IToastPayload>("toast/error");
export const infoToast = createAction<IToastPayload>("toast/info");
export const warningToast = createAction<IToastPayload>("toast/warning");