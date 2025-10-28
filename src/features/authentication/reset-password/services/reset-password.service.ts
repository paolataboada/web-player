import type { AppDispatch } from "@app/store";
import apiPublic from "@api/interceptors/api-public";
import { successToast } from "@app/slices/toast/toast.slice";
import type { TReqResetPassword } from "../types/reset-password.types";

type Params = (
    dispatch: AppDispatch,
    payload: TReqResetPassword,
) => void;

export const resetPasswordService: Params = async (dispatch, payload) => {
    const response = await apiPublic.post("/password-reset/reset", payload);
    dispatch(successToast(response.data.message))
}