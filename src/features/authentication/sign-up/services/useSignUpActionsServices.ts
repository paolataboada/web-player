import { URL_API } from '@api/url.api';
import { useDispatch } from 'react-redux';
import apiPublic from '@api/interceptors/api-public';
import type { TReqSignupStep1, TReqSignupStep2, TRequestSignup, TResponseSignup, TResSignupStep1 } from './types/api-sign-up.types';
import { setTeams } from '@app/slices/teams/teams.slice';
import { ETeamStatus, type ITeam } from '@entities/team/types';

export const useSignUpActionsServices = () => {
    const dispatch = useDispatch();

    const apiSignUpService = async (payload: TRequestSignup): Promise<TResponseSignup> => {
        await apiPublic.post("/auth/signup", payload);
    }

    const googleSignUpService = () => {
        const GOOGLE_AUTH_URL = `${URL_API}/auth/google`;
        return window.location.assign(GOOGLE_AUTH_URL);
    }

    const facebookSignUpService = () => {
        const FACEBOOK_AUTH_URL = `${URL_API}/auth/facebook`;
        return window.location.assign(FACEBOOK_AUTH_URL);
    }

    const validateSignUpStep1Service = async (payload: TReqSignupStep1): Promise<TResSignupStep1> => {
        const response = await apiPublic.post("/auth/validate-step-1", payload);
        return response.data.data;
    }

    const validateSignUpStep2Service = async (payload: TReqSignupStep2) => {
        await apiPublic.post("/auth/validate-step-2", payload);
    }

    const getFantasyTeams = async (): Promise<void> => {
        const response = await apiPublic.get("/team/all");
        const availableTeams = response.data.data.filter((team: ITeam) => team.status === ETeamStatus.ACTIVE);
        dispatch(setTeams(availableTeams));
    }

    return {
        apiSignUpService,
        googleSignUpService,
        facebookSignUpService,
        validateSignUpStep1Service,
        validateSignUpStep2Service,
        getFantasyTeams,
    }
}
