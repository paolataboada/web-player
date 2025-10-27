import type { IPlayer } from "@entities/player/types";
import type { JwtPayload } from "jwt-decode";

export type TRequestLogin = {
    identifier: string;
    password: string;
}

export type TResponseLogin = {
    token: string;
}

export interface IPlayerJwtPayload extends JwtPayload {
    player: IPlayer;
}