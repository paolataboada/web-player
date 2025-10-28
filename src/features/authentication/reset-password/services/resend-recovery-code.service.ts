import type { AppDispatch } from "@app/store";
import apiPublic from "@api/interceptors/api-public";
import { successToast } from "@app/slices/toast/toast.slice";
import type { TReqResendRecoveryCode } from "../types/api-reset-password.types";

type Params = (
    dispatch: AppDispatch,
    payload: TReqResendRecoveryCode,
) => void;

export const resendRecoveryCodeService: Params = async (dispatch, payload) => {
    const response = await apiPublic.post("/password-reset/resend-code", payload);
    dispatch(successToast(response.data.message))
}