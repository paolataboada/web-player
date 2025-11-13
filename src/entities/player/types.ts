export interface IPlayerEntity {
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

export interface IPlayer {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
}

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