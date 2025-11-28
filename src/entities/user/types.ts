export interface IUserEntity {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    teamId: string;
    verificationCode: IVerificationCode;
    verifiedAccount: boolean;
    createdVia: ECreatedVia;
}

export type IUserBase = Pick<IUserEntity, "_id" | "username" | "firstName" | "lastName" | "verifiedAccount">;

export interface IVerificationCode {
    code: string;
    expiresAt: string;
    wasUsed: boolean;
}

export enum ECreatedVia {
    STANDARD = 'Standard',
    FACEBOOK = 'Facebook',
    GOOGLE = 'Google',
}