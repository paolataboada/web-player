import type { IPlayer } from "@entities/player/types";

export type TFormSignUp = Pick<IPlayer,
    "username" | "password" | "firstName" | "lastName" | "email" |
    "birthDate" | "documentType" | "documentNumber" | "teamId"
> & {
    confirmPassword: string;
    acceptDeclaration: boolean;
	acceptInformation: boolean;
	acceptTerms: boolean;
};

export type TFormSignUpProvider = Pick<IPlayer,
    "username" | "documentType" | "documentNumber" | "teamId"
> & {
    acceptDeclaration: boolean;
	acceptInformation: boolean;
	acceptTerms: boolean;
};