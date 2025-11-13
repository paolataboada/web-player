import { SIGN_UP_VALIDATION } from "../constants/sign-up-fields-per-step";
import type { UseFormReturn } from "react-hook-form";
import type { TFormSignUp } from "../types/form-sign-up.types";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useSignUpActionsServices } from "../services/useSignUpActionsServices";
import { useHandleCanProceed } from "./useHandleCanProceedSignUp";

/**
 * Maneja la validación por pasos del formulario de registro.
 */
export const useSignUpStepValidation = (
    step: number,
    methods: UseFormReturn<TFormSignUp>,
    nextStep: () => void,
    goToStep: (step: number) => void,
    type: keyof typeof SIGN_UP_VALIDATION = "STANDARD",
) => {
    const handleError = useHandlerError();
    const handleCanProceed = useHandleCanProceed();
    const { validateSignUpStep1Service, validateSignUpStep2Service } = useSignUpActionsServices();

    const { KEYS, FIELDS_PER_STEP } = SIGN_UP_VALIDATION[type];

    const handleNextStep = async () => {
        const key = KEYS[step] as keyof typeof FIELDS_PER_STEP;
        const fields = FIELDS_PER_STEP[key];
        if (!fields) return;

        const valid = await methods.trigger(fields);
        if (!valid) return;

        if (step === 0 && type === "STANDARD") {
            const formValues = methods.getValues();
            try {
                const payload = {
                    firstName: formValues.firstName,
                    lastName: formValues.lastName,
                    email: formValues.email,
                    birthDate: formValues.birthDate,
                };
                const response = await validateSignUpStep1Service(payload);
                if (response.canProceed) handleCanProceed(goToStep);
            } catch (error) {
                handleError(error);
                return;
            }
        }

        if (step === 1 || (step === 0 && type === "PROVIDER")) {
            const formValues = methods.getValues();
            try {
                const payload = {
                    username: formValues.username,
                    password: formValues.password,
                };
                await validateSignUpStep2Service(payload);
            } catch (error) {
                handleError(error);
                return;
            }
        }

        nextStep();
    };

    return { handleNextStep };
};
