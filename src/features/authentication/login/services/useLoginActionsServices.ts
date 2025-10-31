import apiPublic from "@api/interceptors/api-public";
import { useDispatch } from "react-redux";
import type { TRequestLogin, TResponseLogin } from "./types/api-login.types";
import type { IPlayerJwtPayload } from "../../shared/types/player-jwt.interface";
import { jwtDecode } from "jwt-decode";
import { setPlayer } from "@app/slices/player/player.slice";
import { URL_API } from "@api/url.api";

export const useLoginActionsServices = () => {
    const dispatch = useDispatch();

    const apiLoginService = async (payload: TRequestLogin): Promise<TResponseLogin> => {
        const response = await apiPublic.post("/auth/login", payload);

        const token = response.data.token;
        localStorage.setItem("token", token);

        const decoded = jwtDecode<IPlayerJwtPayload>(token);
        localStorage.setItem("player", JSON.stringify(decoded));

        dispatch(setPlayer(decoded));

        return response.data.data;
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
