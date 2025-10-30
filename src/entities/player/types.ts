export interface IPlayer {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    documentType: EDocumentType;
    documentNumber: string;
    teamId: string;
    verificationCode: IVerificationCode;
    verifiedAccount: boolean;
}

export interface IVerificationCode {
    code: string;
    expiresAt: string;
    wasUsed: boolean;
}

export enum EDocumentType {
    DNI = "DNI",
    RUC = "RUC",
    PASSPORT = "PASSPORT",
    FOREIGN_ID_CARD = "FOREIGN_ID_CARD"
}