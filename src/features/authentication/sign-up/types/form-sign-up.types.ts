import type { IUserEntity } from "@entities/user/types";

export type TFormSignUp = Pick<IUserEntity,
    "username" | "password" | "firstName" | "lastName" | "email" | "birthDate" | "teamId" | "createdVia"
> & {
    confirmPassword: string;
    acceptDeclaration: boolean;
    acceptInformation: boolean;
    acceptTerms: boolean;
};