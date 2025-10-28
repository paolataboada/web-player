import { URL_API } from "@api/url.api";

export const facebookLoginService = () => {
    const FACEBOOK_AUTH_URL = `${import.meta.env.VITE_API_BASE_URL || URL_API}/auth/facebook`;
    return window.location.assign(FACEBOOK_AUTH_URL);
}