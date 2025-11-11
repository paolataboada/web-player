import { useDispatch } from "react-redux";
import apiPublic from "@api/interceptors/api-public";
import { successToast } from "@app/middlewares/toast/toast.actions";
import type { TReqVerifyAccount } from "@features/authentication/sign-up/services/types/api-sign-up.types";

export const useAuthActionsServices = () => {
    const dispatch = useDispatch();

    const verifyAccountService = async (payload: TReqVerifyAccount) => {
        const response = await apiPublic.post("/auth/verify-account", payload);
        dispatch(successToast({ message: response.data.message }));

        const token = response.data.data.token;
        localStorage.setItem("token", token);
    };

    return {
        verifyAccountService,
    }
}
