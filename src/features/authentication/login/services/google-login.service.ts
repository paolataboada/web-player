import { URL_API } from "@api/url.api";

export const googleLoginService = () => {
    const GOOGLE_AUTH_URL = `${import.meta.env.VITE_API_BASE_URL || URL_API}/auth/google`;
    return window.location.assign(GOOGLE_AUTH_URL);
}