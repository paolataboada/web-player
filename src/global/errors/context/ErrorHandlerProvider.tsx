import axios from "axios";
import type { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback, type PropsWithChildren, type ReactNode } from "react";
import { ErrorHandlerContext, type THandlerError } from "./ErrorHandlerContext";
import { handleBusinessError } from "../handlers/handleBusinessError";
import { handleSystemError } from "../handlers/handleSystemError";

enum ECategoryError {
    BUSINESS = "BUSINESS",
    SYSTEM = "SYSTEM",
}

export interface IApiErrorResponse {
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
        const category = axios.isAxiosError(error) ? ECategoryError.SYSTEM : ECategoryError.BUSINESS;

        if (category === ECategoryError.BUSINESS) {
            return handleBusinessError(axiosError, dispatch, navigate);
        }

        if (category === ECategoryError.SYSTEM) {
            return handleSystemError(axiosError, dispatch);
        }
    }, [dispatch, navigate]);

    return (
        <ErrorHandlerContext.Provider value={handleError}>
            {children}
        </ErrorHandlerContext.Provider>
    );
};