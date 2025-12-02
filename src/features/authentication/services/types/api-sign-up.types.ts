import type { IUserEntity } from "@entities/user/types";

export type TRequestSignup = Pick<IUserEntity,
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

export type TReqSignupStep2 = {
    username: string;
    password: string;
}