import type { IUserBase } from "@entities/user/types";

export type TReqVerifyTokenAndGetAccount = {
    token: string;
}

export type TResVerifyTokenAndGetAccount = IUserBase;