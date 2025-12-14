import { URL_API } from "@api/url.api";
import apiPublic from "@api/interceptors/api-public";
import type { TRequestLogin } from "./types/api-login.types";

export const useLoginActionsServices = () => {
    const apiLoginService = async (payload: TRequestLogin): Promise<{ token: string }> => {
        const response = await apiPublic.post("/auth/user/login", payload);
        return response.data;
    }

    const googleLoginService = async (payload: TRequestLogin): Promise<{ token: string }> => {
        const response = await apiPublic.post("/auth/user/social-login/google", payload);
        return response.data;
    }
    const facebookLoginService = async (payload: TRequestLogin): Promise<{ token: string }> => {
        const response = await apiPublic.post("/auth/user/social-login/facebook", payload);
        return response.data;
    }

    const providerLoginService = () => {
        const FACEBOOK_AUTH_URL = `${URL_API}/auth/provider`;
        return window.location.assign(FACEBOOK_AUTH_URL);
    }

    return {
        apiLoginService,
        googleLoginService,
        facebookLoginService,
        providerLoginService,
    }
}
