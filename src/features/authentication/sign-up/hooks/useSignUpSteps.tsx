import { useState } from "react";
import { type StepProps } from "../constants/sign-up-steps";

export const useSignUpSteps = (steps: StepProps[]) => {
    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }

    const previousStep = () => {
        setStep((prev) => Math.max(prev - 1, 0));
    }

    return { step, nextStep, previousStep };
};
