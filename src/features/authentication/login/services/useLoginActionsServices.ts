import { URL_API } from "@api/url.api";
import apiPublic from "@api/interceptors/api-public";
import type { TRequestLogin, TResponseLogin } from "./types/api-login.types";

export const useLoginActionsServices = () => {
    const apiLoginService = async (payload: TRequestLogin): Promise<TResponseLogin> => {
        const response = await apiPublic.post("/auth/login", payload);

        const token = response.data.data.token;
        localStorage.setItem("token", token);

        return response.data.data.token;
    }

    const googleLoginService = () => {
        const GOOGLE_AUTH_URL = `${import.meta.env.VITE_API_BASE_URL || URL_API}/auth/google`;
        return window.location.assign(GOOGLE_AUTH_URL);
    }

    const facebookLoginService = () => {
        const FACEBOOK_AUTH_URL = `${import.meta.env.VITE_API_BASE_URL || URL_API}/auth/facebook`;
        return window.location.assign(FACEBOOK_AUTH_URL);
    }

    return {
        apiLoginService,
        googleLoginService,
        facebookLoginService,
    }
}
