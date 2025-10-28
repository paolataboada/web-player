import type { IPlayer } from "@entities/player/types";
import type { JwtPayload } from "jwt-decode";

export type TRequestSignup = Pick<IPlayer,
    "username" | "password" | "firstName" | "lastName" | "email" |
    "birthDate" | "documentType" | "documentNumber" | "teamId"
> & {
    confirmPassword: string;
};

export type TResponseSignup = {
    token: string;
}

export interface IPlayerJwtPayload extends JwtPayload {
    email: string;
    firstName: string;
    lastName: string;
    provider?: string;
}