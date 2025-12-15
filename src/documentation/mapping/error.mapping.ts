import { BusinessECForgotPassword, BusinessECLogin, BusinessECSessionCurrent, BusinessECSignUp } from '../code/business.error.code';
import { ME_AUTH } from '../messages/error.messages';

export interface ErrorMapEntry {
    code: string;
    message?: string;
}

export const BUSINESS_ERROR_MAPPING: Record<string, Record<string, ErrorMapEntry>> = {
    LOGIN: {
        INVALID_CREDENTIALS: {
            code: BusinessECLogin.INVALID_CREDENTIALS,
            message: ME_AUTH.ME_AUTH_001,
        },
        ACCOUNT_SUSPENDED: {
            code: BusinessECLogin.ACCOUNT_SUSPENDED,
            message: ME_AUTH.ME_AUTH_002,
        },
        ACCOUNT_DELETED: {
            code: BusinessECLogin.ACCOUNT_DELETED,
            message: ME_AUTH.ME_AUTH_003,
        },
    },

    SIGNUP: {
        EMAIL_ALREADY_EXISTS: {
            code: BusinessECSignUp.EMAIL_ALREADY_EXISTS,
            message: ME_AUTH.ME_AUTH_004,
        },
        USERNAME_ALREADY_EXISTS: {
            code: BusinessECSignUp.USERNAME_ALREADY_EXISTS,
            message: ME_AUTH.ME_AUTH_005,
        },
    },

    FORGOT_PASSWORD: {
        EMAIL_NOT_REGISTERED: {
            code: BusinessECForgotPassword.EMAIL_NOT_REGISTERED,
            message: ME_AUTH.ME_AUTH_006,
        },
        CODE_INVALID: {
            code: BusinessECForgotPassword.CODE_INVALID,
            message: ME_AUTH.ME_AUTH_007,
        },
        MAX_ATTEMPTS_REACHED: {
            code: BusinessECForgotPassword.MAX_ATTEMPTS_REACHED,
            message: ME_AUTH.ME_AUTH_008,
        },
        CODE_EXPIRED: {
            code: BusinessECForgotPassword.CODE_EXPIRED,
            message: ME_AUTH.ME_AUTH_009,
        },
        CODE_USED: {
            code: BusinessECForgotPassword.CODE_USED,
            message: ME_AUTH.ME_AUTH_010,
        },
    },

    SESSION_CURRENT: {
        SESSION_TOKEN_INVALID_EXPIRED: {
            code: BusinessECSessionCurrent.SESSION_TOKEN_INVALID_EXPIRED,
            message: ME_AUTH.ME_AUTH_011,
        },
        EMAIL_NOT_VERIFIED: {
            code: BusinessECSessionCurrent.EMAIL_NOT_VERIFIED,
            message: ME_AUTH.ME_AUTH_012,
        },
        PROFILE_INCOMPLETE: {
            code: BusinessECSessionCurrent.PROFILE_INCOMPLETE,
            message: ME_AUTH.ME_AUTH_013,
        },
    },
};