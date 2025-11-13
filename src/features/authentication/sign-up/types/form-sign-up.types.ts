import type { IPlayerEntity } from "@entities/player/types";

export type TFormSignUp = Pick<IPlayerEntity,
    "username" | "password" | "firstName" | "lastName" | "email" | "birthDate" | "teamId" | "createdVia"
> & {
    confirmPassword: string;
    acceptDeclaration: boolean;
    acceptInformation: boolean;
    acceptTerms: boolean;
};