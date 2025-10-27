import { jwtDecode } from "jwt-decode";
import type { AppDispatch } from "@app/store";
import apiPublic from "@api/interceptors/api-public";
import { setPlayer } from "@app/slices/player/player.slice";
import type { IPlayerJwtPayload, TResponseLogin } from "../types/api-login.types";

type Params = (
    dispatch: AppDispatch,
) => Promise<TResponseLogin>;

export const facebookLoginService: Params = async (dispatch) => {
    const response = await apiPublic.get("/auth/facebook");

    const token = response.data.data.token;
    localStorage.setItem("token", token);

    const decoded = jwtDecode<IPlayerJwtPayload>(token);
    const player = decoded.player;
    localStorage.setItem("player", JSON.stringify(player));

    dispatch(setPlayer(player));

    return response.data.data;
}