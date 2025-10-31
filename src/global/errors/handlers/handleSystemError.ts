import type { AxiosError } from "axios";
import type { IApiErrorResponse } from "../context/ErrorHandlerProvider";

export const handleSystemError = (error: AxiosError<IApiErrorResponse>) => {
    console.error("System Error:", error);
};