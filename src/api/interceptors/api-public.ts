import axios from "axios";
import { setupRequestInterceptor } from "./request/request.interceptor";
import { setupResponseInterceptor } from "./response/response.interceptor";
import { URL_API } from "@api/url.api";

const apiPublic = axios.create({
    baseURL: import.meta.env.VITE_URL_API || URL_API + "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

setupRequestInterceptor(apiPublic, { isPrivate: false });
setupResponseInterceptor(apiPublic);

export default apiPublic;