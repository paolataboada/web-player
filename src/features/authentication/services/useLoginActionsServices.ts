import { URL_API } from "@api/url.api";
import apiPublic from "@api/interceptors/api-public";
import type { TRequestLogin } from "./types/api-login.types";
import { useDispatch } from "react-redux";
import { setSession } from "@app/slices/session/session.slice";

export const useLoginActionsServices = () => {
    const dispatch = useDispatch();

    const apiLoginService = async (payload: TRequestLogin): Promise<{ token: boolean }> => {
        const response = await apiPublic.post("/auth/login", payload);

        const token = response.data.data.token;
        dispatch(setSession({ token, user: null }));

        return response.data.data;
    }

    const googleLoginService = () => {
        const GOOGLE_AUTH_URL = `${URL_API}/auth/google`;
        return window.location.assign(GOOGLE_AUTH_URL);
    }

    const facebookLoginService = () => {
        const FACEBOOK_AUTH_URL = `${URL_API}/auth/facebook`;
        return window.location.assign(FACEBOOK_AUTH_URL);
    }

    return {
        apiLoginService,
        googleLoginService,
        facebookLoginService,
    }
}
