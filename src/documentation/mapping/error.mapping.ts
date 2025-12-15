import { BusinessEC } from '../code/business.error.code';
import { ME_AUTH } from '../messages/error.messages';

export interface ErrorMapEntry {
    code: string;
    message?: string;
}

export const BUSINESS_ERROR_MAPPING: Record<BusinessEC, ErrorMapEntry> = {
    // Login
    [BusinessEC.INVALID_CREDENTIALS]: {
        code: BusinessEC.INVALID_CREDENTIALS,
        message: ME_AUTH.ME_AUTH_001,
    },
    [BusinessEC.ACCOUNT_SUSPENDED]: {
        code: BusinessEC.ACCOUNT_SUSPENDED,
        message: ME_AUTH.ME_AUTH_002,
    },
    [BusinessEC.ACCOUNT_DELETED]: {
        code: BusinessEC.ACCOUNT_DELETED,
        message: ME_AUTH.ME_AUTH_003,
    },

    // Sign up
    [BusinessEC.EMAIL_ALREADY_EXISTS]: {
        code: BusinessEC.EMAIL_ALREADY_EXISTS,
        message: ME_AUTH.ME_AUTH_004,
    },
    [BusinessEC.USERNAME_ALREADY_EXISTS]: {
        code: BusinessEC.USERNAME_ALREADY_EXISTS,
        message: ME_AUTH.ME_AUTH_005,
    },

    // Forgot Password
    [BusinessEC.EMAIL_NOT_REGISTERED]: {
        code: BusinessEC.EMAIL_NOT_REGISTERED,
        message: ME_AUTH.ME_AUTH_006,
    },
    [BusinessEC.CODE_INVALID]: {
        code: BusinessEC.CODE_INVALID,
        message: ME_AUTH.ME_AUTH_007,
    },
    [BusinessEC.MAX_ATTEMPTS_REACHED]: {
        code: BusinessEC.MAX_ATTEMPTS_REACHED,
        message: ME_AUTH.ME_AUTH_008,
    },
    [BusinessEC.CODE_EXPIRED]: {
        code: BusinessEC.CODE_EXPIRED,
        message: ME_AUTH.ME_AUTH_009,
    },
    [BusinessEC.CODE_USED]: {
        code: BusinessEC.CODE_USED,
        message: ME_AUTH.ME_AUTH_010,
    },

    // Session Current
    [BusinessEC.SESSION_TOKEN_INVALID_EXPIRED]: {
        code: BusinessEC.SESSION_TOKEN_INVALID_EXPIRED,
        message: ME_AUTH.ME_AUTH_011,
    },
    [BusinessEC.EMAIL_NOT_VERIFIED]: {
        code: BusinessEC.EMAIL_NOT_VERIFIED,
        message: ME_AUTH.ME_AUTH_012,
    },
    [BusinessEC.PROFILE_INCOMPLETE]: {
        code: BusinessEC.PROFILE_INCOMPLETE,
        message: ME_AUTH.ME_AUTH_013,
    },
};