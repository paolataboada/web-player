import { jwtDecode } from "jwt-decode";
import type { AppDispatch } from "@app/store";
import apiPublic from "@api/interceptors/api-public";
import { setPlayer } from "@app/slices/player/player.slice";
import type { IPlayerJwtPayload, TRequestLogin, TResponseLogin } from "../types/api-login.types";

type Params = (
    dispatch: AppDispatch,
    payload: TRequestLogin,
) => Promise<TResponseLogin>;

export const apiLoginService: Params = async (dispatch, payload) => {
    const response = await apiPublic.post("/auth/login", payload);

    // If the backend returns HTTP 200 but the body indicates an error
    const statusCode = response.data.statusCode;
    const message = response.data.message;
    if (statusCode && statusCode >= 400) {
        throw {
            response: {
                data: { statusCode, message },
                status: statusCode,
            },
        };
    }

    const token = response.data.token;
    localStorage.setItem("token", token);

    const decoded = jwtDecode<IPlayerJwtPayload>(token);
    localStorage.setItem("player", JSON.stringify(decoded));

    dispatch(setPlayer(decoded));

    return response.data.data;
}