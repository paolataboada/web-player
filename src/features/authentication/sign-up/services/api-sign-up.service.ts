import apiPublic from "@api/interceptors/api-public";
import { setPlayer } from "@app/slices/player/player.slice";
import type { AppDispatch } from "@app/store";
import { jwtDecode } from "jwt-decode";
import type { IPlayerJwtPayload, TRequestSignup, TResponseSignup } from "../types/api-sign-up.types";

type Params = (
    dispatch: AppDispatch,
    payload: TRequestSignup,
) => Promise<TResponseSignup>;

export const apiSignUpService: Params = async (dispatch, payload) => {
    const response = await apiPublic.post("/auth/signup", payload);

    const token = response.data.token;
    localStorage.setItem("token", token);

    const decoded = jwtDecode<IPlayerJwtPayload>(token);
    localStorage.setItem("player", JSON.stringify(decoded));

    dispatch(setPlayer(decoded));

    return response.data.data;
}