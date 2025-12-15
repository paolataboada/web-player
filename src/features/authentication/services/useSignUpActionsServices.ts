import { URL_API } from '@api/url.api';
import apiPublic from '@api/interceptors/api-public';
import type { TResponseSignup } from './types/api-sign-up.types';
import { type ITeam } from '@entities/team/types';
import type { ISignUpPayload } from '../pages/SignUpPage';

export const useSignUpActionsServices = () => {
    const apiSignUpService = async (payload: ISignUpPayload): Promise<TResponseSignup> => {
        const response = await apiPublic.post("/auth/user/registers", payload);
        return response.data;
    }

    const googleSignUpService = () => {
        const GOOGLE_AUTH_URL = `${URL_API}/auth/google`;
        return window.location.assign(GOOGLE_AUTH_URL);
    }

    const facebookSignUpService = () => {
        const FACEBOOK_AUTH_URL = `${URL_API}/auth/facebook`;
        return window.location.assign(FACEBOOK_AUTH_URL);
    }

    const validateEmailService = async (email: string): Promise<void> => {
        await apiPublic.post("/account/user/registers/email-available", { email });
    }

    const validateUsernameService = async (username: string): Promise<void> => {
        await apiPublic.post("/account/user/registers/username-available", { username });
    }

    const getFantasyTeams = async (): Promise<ITeam[]> => {
        const response = await apiPublic.get("/team/all");
        return response.data.data;
    }

    return {
        apiSignUpService,
        googleSignUpService,
        facebookSignUpService,
        validateEmailService,
        validateUsernameService,
        getFantasyTeams,
    }
}
