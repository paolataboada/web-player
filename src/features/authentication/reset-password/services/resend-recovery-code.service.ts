import apiPublic from "@api/interceptors/api-public";
import { successToast } from "@app/slices/toast/toast.slice";
import type { AppDispatch } from "@app/store";
import type { TFormRecoverPassword } from "../pages/RecoverPasswordPage";

type Params = (
    dispatch: AppDispatch,
    payload: TFormRecoverPassword,
) => void;

export const resendRecoveryCodeService: Params = async (dispatch, payload) => {
    const response = await apiPublic.post("/password-reset/resend-code", payload);
    dispatch(successToast(response.data.message))
}