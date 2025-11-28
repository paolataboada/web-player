import type { IUserEntity } from "@entities/user/types";

export type TReqVerifyAccountCode = Pick<IUserEntity, "email"> & {
    code: string;
};

export type TResVerifyAccountCode = {
    token: string;
};

export type TReqResendRecoveryAccountCode = Pick<IUserEntity, "email">;

export type TResResendRecoveryAccountCode = void;