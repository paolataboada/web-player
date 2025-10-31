import { useDispatch } from 'react-redux';
import type { TReqSignupStep1, TReqSignupStep2, TRequestSignup, TResponseSignup } from './types/api-sign-up.types';
import apiPublic from '@api/interceptors/api-public';
import { jwtDecode } from 'jwt-decode';
import type { IPlayerJwtPayload } from '@features/authentication/shared/types/player-jwt.interface';
import { setPlayer } from '@app/slices/player/player.slice';
import { URL_API } from '@api/url.api';

export const useSignUpActions = () => {
    const dispatch = useDispatch();

    const apiSignUpService = async (payload: TRequestSignup): Promise<TResponseSignup> => {
        const response = await apiPublic.post("/auth/signup", payload);

        const token = response.data.token;
        localStorage.setItem("token", token);

        const decoded = jwtDecode<IPlayerJwtPayload>(token);
        localStorage.setItem("player", JSON.stringify(decoded));

        dispatch(setPlayer(decoded));

        return response.data.data;
    }

    const googleSignUpService = () => {
        const GOOGLE_AUTH_URL = `${import.meta.env.VITE_API_BASE_URL || URL_API}/auth/google`;
        return window.location.assign(GOOGLE_AUTH_URL);
    }

    const facebookSignUpService = () => {
        const FACEBOOK_AUTH_URL = `${import.meta.env.VITE_API_BASE_URL || URL_API}/auth/facebook`;
        return window.location.assign(FACEBOOK_AUTH_URL);
    }

    const validateSignUpStep1Service = async (payload: TReqSignupStep1) => {
        await apiPublic.post("/auth/validate-step-1", payload);
    }

    const validateSignUpStep2Service = async (payload: TReqSignupStep2) => {
        await apiPublic.post("/auth/validate-step-2", payload);
    }

    return {
        apiSignUpService,
        googleSignUpService,
        facebookSignUpService,
        validateSignUpStep1Service,
        validateSignUpStep2Service,
    }
}
