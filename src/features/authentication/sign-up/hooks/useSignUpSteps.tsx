import { useState } from "react";
import { SIGN_UP_STEPS } from "../constants/sign-up-steps";

export const useSignUpSteps = () => {
    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep((prev) => Math.min(prev + 1, SIGN_UP_STEPS.length - 1));
    }

    const previousStep = () => {
        setStep((prev) => Math.max(prev - 1, 0));
    }

    return { step, nextStep, previousStep };
};
