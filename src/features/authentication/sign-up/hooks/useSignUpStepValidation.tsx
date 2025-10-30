import { SIGN_UP_VALIDATION } from "../constants/sign-up-fields-per-step";
import type { UseFormReturn } from "react-hook-form";
import type { TFormSignUp, TFormSignUpProvider } from "../types/form-sign-up.types";

/**
 * Maneja la validación por pasos del formulario de registro.
 */
export const useSignUpStepValidation = (
    step: number,
    methods: UseFormReturn<TFormSignUp> | UseFormReturn<TFormSignUpProvider>,
    nextStep: () => void,
    type: keyof typeof SIGN_UP_VALIDATION = "STANDARD",
) => {
    const { KEYS, FIELDS_PER_STEP } = SIGN_UP_VALIDATION[type];

    const handleNextStep = async () => {
        const key = KEYS[step] as keyof typeof FIELDS_PER_STEP;;
        const fields = FIELDS_PER_STEP[key];
        if (!fields) return;

        const valid = await methods.trigger(fields);
        if (!valid) return;

        nextStep();
    };

    return { handleNextStep };
};
