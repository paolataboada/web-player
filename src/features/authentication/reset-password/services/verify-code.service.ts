import type { AppDispatch } from "@app/store";
import apiPublic from "@api/interceptors/api-public";
import { successToast } from "@app/slices/toast/toast.slice";
import type { TReqVerifyCode } from "../types/api-reset-password.types";

type Params = (
    dispatch: AppDispatch,
    payload: TReqVerifyCode,
) => void;

export const verifyCodeService: Params = async (dispatch, payload) => {
    const response = await apiPublic.post("/password-reset/verify-code", payload);
    dispatch(successToast(response.data.message))
}