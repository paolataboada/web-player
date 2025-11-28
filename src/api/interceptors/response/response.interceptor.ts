import { store } from "@app/store";
import { ROUTES } from "@navigation/routes/routes";
import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { clearSession } from "@app/slices/session/session.slice";

/**
 * 401: Token vencido o sin token
 * 403: Intenta acceder a algo que no tiene permiso
 * 404: No se encuentra el recurso
 * 500: Error interno del servidor
 */

export const setupResponseInterceptor = (apiInstance: AxiosInstance) => {
    apiInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            const data = response.data;

            if (data && typeof data === "object" && data.statusCode >= 400) {
                return Promise.reject({
                    isAxiosError: false,
                    message: data.message || "Unknown error",
                    config: response.config,
                    response: {
                        data,
                        status: data.statusCode,
                        statusText: data.error || "Error",
                        headers: response.headers,
                        config: response.config,
                    },
                });
            }

            return response;
        },
        (error: AxiosError) => {
            if (error.response?.status === 401) {
                store.dispatch(clearSession());
                window.location.href = ROUTES.LOGIN;
            }
            return Promise.reject(error);
        }
    );
};