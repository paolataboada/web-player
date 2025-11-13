import type { IPlayerEntity } from "@entities/player/types";

export type TReqVerifyAccountCode = Pick<IPlayerEntity, "email"> & {
    code: string;
};

export type TResVerifyAccountCode = {
    token: string;
};

export type TReqResendRecoveryAccountCode = Pick<IPlayerEntity, "email">;

export type TResResendRecoveryAccountCode = void;