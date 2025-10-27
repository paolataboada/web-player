import type { AxiosInstance } from "axios";

interface RequestInterceptorOptions {
    isPrivate?: boolean;
}

export const setupRequestInterceptor = (
    axiosInstance: AxiosInstance,
    options: RequestInterceptorOptions
) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            if (options.isPrivate) {
                const token = localStorage.getItem("token");
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }

            return config;
        },
        (error) => {
            console.error("[Request Error]", error);
            return Promise.reject(error);
        }
    );
};