import type { AppDispatch } from "@app/store";
import apiPublic from "@api/interceptors/api-public";
import { successToast } from "@app/slices/toast/toast.slice";
import type { TReqSendRecoveryCode } from "../types/api-reset-password.types";

type Params = (
    dispatch: AppDispatch,
    payload: TReqSendRecoveryCode,
) => void;

export const sendRecoveryCodeService: Params = async (dispatch, payload) => {
    const response = await apiPublic.post("/password-reset/forgot-password", payload);
    dispatch(successToast(response.data.message))
}