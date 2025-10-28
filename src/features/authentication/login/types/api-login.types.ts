import type { JwtPayload } from "jwt-decode";

export type TRequestLogin = {
    identifier: string;
    password: string;
}

export type TResponseLogin = {
    token: string;
}

export interface IPlayerJwtPayload extends JwtPayload {
    email: string;
    firstName: string;
    lastName: string;
    provider?: string;
}