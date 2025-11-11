import type { IBusinessError } from "@global/errors/handlers/handleBusinessError";

export const handleUnverifiedAccountError = (
    error: IBusinessError,
    setHasVerified: (value: boolean) => void,
    methods: { reset: () => void }
) => {
    const notVerifiedMsg = "La cuenta no ha sido verificada";
    const message = error.response?.data?.message?.toString() ?? "";

    if (message.includes(notVerifiedMsg)) {
        setHasVerified(false);
        methods.reset();
    }
};
