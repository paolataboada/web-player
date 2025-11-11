import axios from "axios";
import type { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback, type PropsWithChildren, type ReactNode } from "react";
import { ErrorHandlerContext, type THandlerError } from "./ErrorHandlerContext";
import { handleBusinessError, type IBusinessError } from "../handlers/handleBusinessError";
import { handleSystemError, type IApiErrorResponse } from "../handlers/handleSystemError";

enum ECategoryError {
    BUSINESS = "BUSINESS",
    SYSTEM = "SYSTEM",
}

interface Props extends PropsWithChildren {
    children: ReactNode;
}

export const ErrorHandlerProvider = ({ children }: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleError: THandlerError = useCallback((error) => {
        const category = axios.isAxiosError(error) ? ECategoryError.SYSTEM : ECategoryError.BUSINESS;

        if (category === ECategoryError.BUSINESS) {
            const customError = error as IBusinessError;
            return handleBusinessError(customError, dispatch, navigate);
        }

        if (category === ECategoryError.SYSTEM) {
            const axiosError = error as AxiosError<IApiErrorResponse>;
            return handleSystemError(axiosError, dispatch);
        }
    }, [dispatch, navigate]);

    return (
        <ErrorHandlerContext.Provider value={handleError}>
            {children}
        </ErrorHandlerContext.Provider>
    );
};