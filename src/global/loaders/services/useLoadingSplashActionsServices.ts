import { useDispatch } from "react-redux";
import apiPublic from "@api/interceptors/api-public";
import type { IUserBase } from "@entities/user/types";
import { setSession } from "@app/slices/session/session.slice";
import type { TReqVerifyTokenAndGetAccount, TResVerifyTokenAndGetAccount } from "./api-verify-token.types";

export const useLoadingSplashActionsServices = () => {
    const dispatch = useDispatch();

    const verifyTokenAndGetAccountDataService = async (
        payload: TReqVerifyTokenAndGetAccount
    ): Promise<TResVerifyTokenAndGetAccount> => {
        const token = payload.token;
        const response = await apiPublic.get("/account/verify-token", { params: { token } });

        const user: IUserBase = response.data.data;
        dispatch(setSession({ user, token }));

        return response.data.data;
    }

    return {
        verifyTokenAndGetAccountDataService,
    }
}
