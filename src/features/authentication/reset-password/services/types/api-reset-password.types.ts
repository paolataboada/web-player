import type { IPlayer } from "@entities/player/types";

export type TReqSendRecoveryCode = Pick<IPlayer, "email">;

export type TReqResendRecoveryCode = Pick<IPlayer, "email">;

export type TReqVerifyCode = Pick<IPlayer, "email"> & {
    code: string;
};

export type TReqResetPassword = {
    newPassword: string;
    confirmPassword: string;
};