import type { JwtPayload } from "jwt-decode";

export interface IPlayerSignUpJwtPayload extends JwtPayload {
    provider: string;
    providerId: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    birthDate: string;
    createdVia: string;
}

export interface IPlayerLoginJwtPayload extends JwtPayload {
    userId: string;
    username: string;
}