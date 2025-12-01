export type TFormRecoverPassword = {
    email: string;
};

export type TFormVerifyCode = {
    code: string[];
};

export type TFormResetPassword = {
    newPassword: string;
    confirmPassword: string;
}
