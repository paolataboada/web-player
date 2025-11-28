import { URL_API } from '@api/url.api';
import { useDispatch } from 'react-redux';
import apiPublic from '@api/interceptors/api-public';
import type { TReqSignupStep1, TReqSignupStep2, TRequestSignup, TResponseSignup, TResSignupStep1 } from './types/api-sign-up.types';
import { setTeams } from '@app/slices/teams/teams.slice';
import { ETeamStatus, type ITeam } from '@entities/team/types';
import type { ISignUpData } from '../pages/SignUpPage';

export const useSignUpActionsServices = () => {
    const dispatch = useDispatch();

    const apiSignUpService = async (payload: ISignUpData): Promise<TResponseSignup> => {
        const response = await apiPublic.post("/auth/signup", payload);

        const token = response.data.data.token;
        if (token) localStorage.setItem("token", token);

        return response.data.data.token;
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
        const response = await apiPublic.post("/auth/validate-step-1", { email });
        return response.data.data;
    }

    const validateUsernameService = async (username: string): Promise<{ exists: boolean }> => {
        const response = await apiPublic.post("/auth/validate-step-1", { username });
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
