import { useDispatch } from "react-redux";
import apiPublic from "@api/interceptors/api-public";
import { successToast } from "@app/slices/toast/toast.slice";
import type { TReqResendRecoveryCode, TReqResetPassword, TReqSendRecoveryCode, TReqVerifyCode } from "./types/api-reset-password.types";

export const useResetPasswordActions = () => {
    const dispatch = useDispatch();

    const sendRecoveryCodeService = async (payload: TReqSendRecoveryCode) => {
        const response = await apiPublic.post("/password-reset/forgot-password", payload);
        dispatch(successToast(response.data.message))
    };

    const verifyCodeService = async (payload: TReqVerifyCode) => {
        const response = await apiPublic.post("/password-reset/verify-code", payload);
        dispatch(successToast(response.data.message));
    };

    const resendRecoveryCodeService = async (payload: TReqResendRecoveryCode) => {
        const response = await apiPublic.post("/password-reset/forgot-password", payload);
        dispatch(successToast(response.data.message));
    };

    const resetPasswordService = async (payload: TReqResetPassword) => {
        const response = await apiPublic.post("/password-reset/reset", payload);
        dispatch(successToast(response.data.message))
    };

    return {
        sendRecoveryCodeService,
        verifyCodeService,
        resendRecoveryCodeService,
        resetPasswordService,
    };
};
