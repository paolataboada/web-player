import type { JwtPayload } from "jwt-decode";

export interface IPlayerJwtPayload extends JwtPayload {
    username?: string;
    email: string;
    firstName: string;
    lastName: string;
    provider?: string;
}