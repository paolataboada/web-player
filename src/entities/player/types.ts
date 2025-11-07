export interface IPlayer {
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
}

export interface IVerificationCode {
    code: string;
    expiresAt: string;
    wasUsed: boolean;
}