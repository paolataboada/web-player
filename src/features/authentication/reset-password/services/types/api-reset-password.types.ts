import type { IPlayerEntity } from "@entities/player/types";

export type TReqSendRecoveryCode = Pick<IPlayerEntity, "email">;

export type TReqResendRecoveryCode = Pick<IPlayerEntity, "email">;

export type TReqVerifyCode = Pick<IPlayerEntity, "email"> & {
    code: string;
};

export type TReqResetPassword = {
    newPassword: string;
    confirmPassword: string;
};