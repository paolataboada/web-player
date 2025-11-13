import { useDispatch } from "react-redux";
import apiPublic from "@api/interceptors/api-public";
import type { IPlayer } from "@entities/player/types";
import { setPlayer } from "@app/slices/player/player.slice";
import type { TReqVerifyTokenAndGetAccount, TResVerifyTokenAndGetAccount } from "./api-verify-token.types";

export const useLoadingSplashActionsServices = () => {
    const dispatch = useDispatch();

    const verifyTokenAndGetAccountDataService = async (
        payload: TReqVerifyTokenAndGetAccount
    ): Promise<TResVerifyTokenAndGetAccount> => {
        const token = payload.token;
        const response = await apiPublic.get("/account/verify-token", { params: { token } });

        const player: IPlayer = response.data.data;
        dispatch(setPlayer(player));

        return response.data.data;
    }

    return {
        verifyTokenAndGetAccountDataService,
    }
}
