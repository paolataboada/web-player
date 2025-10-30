import type { JwtPayload } from "jwt-decode";

export interface IPlayerJwtPayload extends JwtPayload {
    email: string;
    firstName: string;
    lastName: string;
    provider?: string;
}