import { useDispatch } from "react-redux";
import apiPublic from "@api/interceptors/api-public";
import { successToast } from "@app/middlewares/toast/toast.actions";
import apiPrivate from "@api/interceptors/api-private";
import type { TReqResendRecoveryCode, TReqVerifyCode } from "./types/verificate-email.types";
import type { TReqResetPassword } from "@features/authentication/services/types/api-reset-password.types";

export const useVerifyEmailActionsServices = () => {
    const dispatch = useDispatch();

    const verifyCodeService = async (payload: TReqVerifyCode): Promise<{ token: string }> => {
        const response = await apiPublic.post("/auth/public-verify-code", payload);
        dispatch(successToast({ message: response.data.message }));
        return response.data.data;
    };

    const resendCodeService = async (payload: TReqResendRecoveryCode) => {
        const response = await apiPublic.post("/auth/password/resend-code", payload);
        dispatch(successToast({ message: response.data.message }));
    };

    const resetPasswordService = async (payload: TReqResetPassword) => {
        const response = await apiPrivate.post("/auth/password/reset", payload);
        dispatch(successToast({ message: response.data.message }))
    };

    return {
        verifyCodeService,
        resendCodeService,
        resetPasswordService,
    };
};
