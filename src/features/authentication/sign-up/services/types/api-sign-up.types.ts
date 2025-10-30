import type { IPlayer } from "@entities/player/types";

export type TRequestSignup = Pick<IPlayer,
    "username" | "password" | "firstName" | "lastName" | "email" |
    "birthDate" | "documentType" | "documentNumber" | "teamId"
>;

export type TResponseSignup = {
    token: string;
}