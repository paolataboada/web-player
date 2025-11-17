import type { IBusinessError } from "@global/errors/handlers/handleBusinessError";

export const handleUnverifiedAccountError = (
    error: IBusinessError,
    setHasVerified: (value: boolean) => void,
    methods: { reset: () => void }
) => {
    const notVerifiedCodeStatus = 422;
    const statusCode = error.response?.data?.statusCode;

    if (statusCode === notVerifiedCodeStatus) {
        setHasVerified(false);
        methods.reset();
    }
};
