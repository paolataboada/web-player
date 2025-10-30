import { FIELDS_PER_STEP, STEP_KEYS } from "../constants/sign-up-fields-per-step";
import type { UseFormReturn } from "react-hook-form";
import type { TFormSignUp } from "../types/form-sign-up.types";

/**
 * Maneja la validación por pasos del formulario de registro.
 */
export const useSignUpStepValidation = (
    step: number,
    methods: UseFormReturn<TFormSignUp>,
    nextStep: () => void
) => {
    const handleNextStep = async () => {
        const key = STEP_KEYS[step];
        const fields = FIELDS_PER_STEP[key];
        if (!fields) return;

        const valid = await methods.trigger(fields);
        if (!valid) return;

        nextStep();
    };

    return { handleNextStep };
};
