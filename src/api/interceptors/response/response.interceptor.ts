import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";

/**
 * 401: Token vencido o sin token
 * 403: Intenta acceder a algo que no tiene permiso
 * 404: No se encuentra el recurso
 * 500: Error interno del servidor
 */
export interface IApiResponse {
    statusCode: number;
    message: string;
    data: any;
}

export const setupResponseInterceptor = (apiInstance: AxiosInstance) => {
    apiInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            const data = response.data;

            if (data && typeof data === "object" && data.statusCode !== 200) {
                return Promise.reject({
                    isAxiosError: false,
                    message: data.message || "Unknown error",
                    config: response.config,
                    response: {
                        data,
                        status: data.statusCode,
                        message: data.message,
                    },
                });
            }

            return response;
        },
        (error: AxiosError) => {
            return Promise.reject(error);
        }
    );
};