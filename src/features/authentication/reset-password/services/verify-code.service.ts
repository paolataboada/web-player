import type { AppDispatch } from "@app/store";
import type { TFormRecoverPassword } from "../pages/RecoverPasswordPage";
import { successToast } from "@app/slices/toast/toast.slice";
import apiPublic from "@api/interceptors/api-public";

type Params = (
    dispatch: AppDispatch,
    payload: TFormRecoverPassword,
) => void;

export const verifyCodeService: Params = async (dispatch, payload) => {
    const response = await apiPublic.post("/password-reset/verify-code", payload);
    dispatch(successToast(response.data.message))
}