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

    // If the backend returns HTTP 200 but the body indicates an error
    const statusCode = response.data.statusCode;
    const message = response.data.message;
    if (statusCode && statusCode >= 400) {
        throw {
            isAxiosError: true,
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