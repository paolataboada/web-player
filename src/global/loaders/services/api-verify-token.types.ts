import type { IPlayer } from "@entities/player/types";

export type TReqVerifyTokenAndGetAccount = {
    token: string;
}

export type TResVerifyTokenAndGetAccount = Omit<IPlayer, "token">;