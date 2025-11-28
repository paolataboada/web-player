import apiPublic from "@api/interceptors/api-public";
import type { TReqVerifyTokenAndGetAccount } from "./api-verify-token.types";
import type { IUserBase } from "@entities/user/types";

export const usePrivateActionsServices = () => {
    const verifyTokenAndGetAccountDataService = async (
        payload: TReqVerifyTokenAndGetAccount
    ): Promise<IUserBase> => {
        const token = payload.token;
        const response = await apiPublic.get("auth/verify-token", { params: { token } });
        return response.data.data;
    }

    return {
        verifyTokenAndGetAccountDataService,
    }
}
