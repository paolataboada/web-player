import axios from "axios";
import { setupRequestInterceptor } from "./request/request.interceptor";
import { setupResponseInterceptor } from "./response/response.interceptor";
import { URL_API } from "@api/url.api";

const apiPrivate = axios.create({
    baseURL: import.meta.env.VITE_URL_API || URL_API,
    headers: {
        "Content-Type": "application/json",
    },
});

setupRequestInterceptor(apiPrivate, { isPrivate: true });
setupResponseInterceptor(apiPrivate);

export default apiPrivate;
