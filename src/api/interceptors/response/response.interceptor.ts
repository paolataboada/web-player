import type { AxiosError, AxiosInstance } from "axios";

/**
 * 401: token vencido o sin token
 * 403: Intenta acceder a algo que no tiene permiso
 * 404: No se encuentra el recurso
 * 500: Error interno del servidor
 */

export const setupResponseInterceptor = (apiInstance: AxiosInstance) => {
    apiInstance.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
            if (error.response?.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
            return Promise.reject(error);
        }
    );
};