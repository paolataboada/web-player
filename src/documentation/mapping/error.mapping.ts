import { BusinessEC } from '../code/business.error.code';
import { ME_AUTH } from '../messages/error.messages';

export interface ErrorMapEntry {
    code: string;
    message?: string;
}

export const BUSINESS_ERROR_MAPPING: Record<BusinessEC, ErrorMapEntry> = {
    //Create User
    [BusinessEC.EMAIL_ALREADY_EXISTS]: {
        code: BusinessEC.EMAIL_ALREADY_EXISTS,
        message: ME_AUTH.ME_AUTH_001,
    },
    [BusinessEC.USERNAME_ALREADY_EXISTS]: {
        code: BusinessEC.USERNAME_ALREADY_EXISTS,
        message: ME_AUTH.ME_AUTH_002,
    },

    // Recovery Password
    [BusinessEC.EMAIL_NOT_REGISTERED]: {
        code: BusinessEC.EMAIL_NOT_REGISTERED,
        message: ME_AUTH.ME_AUTH_006,
    },
    [BusinessEC.RECOVERY_CODE_INVALID]: {
        code: BusinessEC.RECOVERY_CODE_INVALID,
        message: ME_AUTH.ME_AUTH_007,
    },
    [BusinessEC.RECOVERY_MAX_ATTEMPTS_REACHED]: {
        code: BusinessEC.RECOVERY_MAX_ATTEMPTS_REACHED,
        message: ME_AUTH.ME_AUTH_000,
    },
    [BusinessEC.RECOVERY_CODE_EXPIRED]: {
        code: BusinessEC.RECOVERY_CODE_EXPIRED,
        message: ME_AUTH.ME_AUTH_000,
    },
    [BusinessEC.RECOVERY_CODE_USED]: {
        code: BusinessEC.RECOVERY_CODE_USED,
        message: ME_AUTH.ME_AUTH_000,
    },

    // Session Current
    [BusinessEC.SESSION_TOKEN_INVALID_EXPIRED]: {
        code: BusinessEC.SESSION_TOKEN_INVALID_EXPIRED,
        message: ME_AUTH.ME_AUTH_012,
    },
    [BusinessEC.EMAIL_NOT_VERIFIED]: {
        code: BusinessEC.EMAIL_NOT_VERIFIED,
        message: ME_AUTH.ME_AUTH_010,
    },
    [BusinessEC.PROFILE_INCOMPLETE]: {
        code: BusinessEC.PROFILE_INCOMPLETE,
        message: ME_AUTH.ME_AUTH_000,
    },
    [BusinessEC.ACCOUNT_SUSPENDED]: {
        code: BusinessEC.ACCOUNT_SUSPENDED,
        message: ME_AUTH.ME_AUTH_000,
    },
    [BusinessEC.ACCOUNT_DELETED]: {
        code: BusinessEC.ACCOUNT_DELETED,
        message: ME_AUTH.ME_AUTH_000,
    },
};