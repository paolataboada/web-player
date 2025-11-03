import { useState } from "react";

export interface IStepProps {
    stepNumber: string,
    stepText: string,
    showInProgress?: boolean;
}

export const useSignUpSteps = (steps: IStepProps[]) => {
    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }

    const previousStep = () => {
        setStep((prev) => Math.max(prev - 1, 0));
    }

    const resetSteps = () => {
        setStep(0);
    };

    return { step, nextStep, previousStep, resetSteps };
};
