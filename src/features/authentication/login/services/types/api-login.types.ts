export type TRequestLogin = {
    identifier: string;
    password: string;
}

export type TResponseLogin = {
    token: string;
}