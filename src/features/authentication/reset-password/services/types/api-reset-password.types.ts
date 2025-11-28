import type { IUserEntity } from "@entities/user/types";

export type TReqSendRecoveryCode = Pick<IUserEntity, "email">;

export type TReqResendRecoveryCode = Pick<IUserEntity, "email">;

export type TReqVerifyCode = Pick<IUserEntity, "email"> & {
    code: string;
};

export type TReqResetPassword = {
    newPassword: string;
    confirmPassword: string;
};