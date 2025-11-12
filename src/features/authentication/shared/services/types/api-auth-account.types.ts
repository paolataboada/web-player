import type { IPlayer } from "@entities/player/types";

export type TReqVerifyAccountCode = Pick<IPlayer, "email"> & {
    code: string;
};

export type TResVerifyAccountCode = {
    token: string;
};

export type TReqResendRecoveryAccountCode = Pick<IPlayer, "email">;

export type TResResendRecoveryAccountCode = void;