import { BusinessEC } from '../code/business.error.code';
import { ME_AUTH } from '../messages/error.messages';

export interface ErrorMapEntry {
    code: string;
    title: string;
    message?: string;
}

export const BUSINESS_ERROR_MAPPING: Record<BusinessEC, ErrorMapEntry> = {
    //Create User
    [BusinessEC.EMAIL_ALREADY_EXISTS]: {
        code: BusinessEC.EMAIL_ALREADY_EXISTS,
        title: 'EmailAlreadyExists',
        message: ME_AUTH.ME_AUTH_001,
    },
    [BusinessEC.USERNAME_ALREADY_EXISTS]: {
        code: BusinessEC.USERNAME_ALREADY_EXISTS,
        title: 'UsernameAlreadyExists',
        message: ME_AUTH.ME_AUTH_002,
    }
};