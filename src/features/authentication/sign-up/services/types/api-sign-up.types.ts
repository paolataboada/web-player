import type { IPlayerEntity } from "@entities/player/types";

export type TRequestSignup = Pick<IPlayerEntity,
    "username" | "password" | "firstName" | "lastName" | "email" | "birthDate" | "teamId" | "createdVia"
>;

export type TResponseSignup = {
    token: string;
};

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