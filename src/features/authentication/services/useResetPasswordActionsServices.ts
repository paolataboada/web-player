import { useDispatch } from "react-redux";
import apiPublic from "@api/interceptors/api-public";
import { successToast } from "@app/middlewares/toast/toast.actions";
import type { TReqResendRecoveryCode, TReqResetPassword, TReqSendRecoveryCode, TReqVerifyCode } from "./types/api-reset-password.types";
import apiPrivate from "@api/interceptors/api-private";

export const useResetPasswordActionsServices = () => {
    const dispatch = useDispatch();

    const sendRecoveryCodeService = async (payload: TReqSendRecoveryCode): Promise<void> => {
        await apiPublic.post("/auth/user/password-recovery/send-code", payload);
    };

    const verifyCodeService = async (payload: TReqVerifyCode): Promise<{ token: string }> => {
        const response = await apiPublic.post("/auth/public-verify-code", payload);
        return response.data;
    };

    const resendRecoveryCodeService = async (payload: TReqResendRecoveryCode) => {
        const response = await apiPublic.post("/auth/password/resend-code", payload);
        dispatch(successToast({ message: response.data.message }));
    };

    const resetPasswordService = async (payload: TReqResetPassword) => {
        const response = await apiPrivate.post("/auth/password/reset", payload);
        dispatch(successToast({ message: response.data.message }))
    };

    return {
        sendRecoveryCodeService,
        verifyCodeService,
        resendRecoveryCodeService,
        resetPasswordService,
    };
};
