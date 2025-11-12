import { useDispatch } from "react-redux";
import apiPublic from "@api/interceptors/api-public";
import { successToast } from "@app/middlewares/toast/toast.actions";
import type { TReqResendRecoveryAccountCode, TReqVerifyAccountCode } from "./types/api-auth-account.types";

export const useAuthActionsServices = () => {
    const dispatch = useDispatch();

    const verifyAccountCodeService = async (payload: TReqVerifyAccountCode): Promise<void> => {
        const response = await apiPublic.post("/auth/verify-account", payload);
        dispatch(successToast({ message: response.data.message }));

        const token = response.data.data.token;
        localStorage.setItem("token", token);
    };

    const resendRecoveryAccountCodeService = async (payload: TReqResendRecoveryAccountCode): Promise<void> => {
        const response = await apiPublic.post("/auth/password/resend-code", payload);
        dispatch(successToast({ message: response.data.message }));
    };

    return {
        verifyAccountCodeService,
        resendRecoveryAccountCodeService,
    }
}
