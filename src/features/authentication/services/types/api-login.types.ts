export type TRequestLogin = {
    emailOrUsername: string;
    password: string;
}

export type TResponseLogin = {
    token: string;
}

export type TRequestSocialLogin = {
    token: string;
}