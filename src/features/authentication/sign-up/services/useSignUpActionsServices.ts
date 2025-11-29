import { URL_API } from '@api/url.api';
import apiPublic from '@api/interceptors/api-public';
import type { TResponseSignup } from './types/api-sign-up.types';
import { type ITeam } from '@entities/team/types';
import type { ISignUpData } from '../pages/SignUpPage';

export const useSignUpActionsServices = () => {
    const apiSignUpService = async (payload: ISignUpData): Promise<TResponseSignup> => {
        const response = await apiPublic.post("/auth/signup", payload);
        return response.data.data;
    }

    const googleSignUpService = () => {
        const GOOGLE_AUTH_URL = `${URL_API}/auth/google`;
        return window.location.assign(GOOGLE_AUTH_URL);
    }

    const facebookSignUpService = () => {
        const FACEBOOK_AUTH_URL = `${URL_API}/auth/facebook`;
        return window.location.assign(FACEBOOK_AUTH_URL);
    }

    const validateEmailService = async (email: string): Promise<{ exists: boolean }> => {
        const response = await apiPublic.post("/auth/validate-email", { email });
        return response.data.data;
    }

    const validateUsernameService = async (username: string): Promise<{ exists: boolean }> => {
        const response = await apiPublic.post("/auth/validate-username", { username });
        return response.data.data;
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
