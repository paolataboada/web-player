import type { AxiosError } from "axios";
import { errorToast } from "../../../app/slices/toast/toast.slice";
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
    const message = resError?.message?.toString() ?? "An unexpected error occurred.";

    switch (statusCode) {
        case 401:
            if (message === "Token has expired.") {
                dispatch(errorToast("Session expired"));
            } else if (message === "Unauthorized") {
                dispatch(errorToast(message));
            } else {
                dispatch(errorToast("Unauthorized access"));
            }
            navigate("/login");
            break;

        default:
            dispatch(errorToast(message));
            break;
    }
};