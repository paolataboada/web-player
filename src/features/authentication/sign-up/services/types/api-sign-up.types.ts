import type { IPlayer } from "@entities/player/types";
import type { TReqVerifyCode } from "@features/authentication/reset-password/services/types/api-reset-password.types";

export type TRequestSignup = Pick<IPlayer,
    "username" | "password" | "firstName" | "lastName" | "email" | "birthDate" | "teamId" | "createdVia"
>;

export type TResponseSignup = void;

export type TReqSignupStep1 = {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
}

export type TResSignupStep1 = {
    canProceed: boolean;
}

export type TReqSignupStep2 = {
    username: string;
    password: string;
}

export type TReqVerifyAccount = TReqVerifyCode;