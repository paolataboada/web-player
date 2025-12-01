import { useState } from "react";

export const useStepsControl = (steps: number) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, steps - 1));
  };

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const goToStep = (index: number) => {
    if (index < 0 || index >= steps) return;
    setStep(index);
  };

  const resetSteps = () => {
    setStep(0);
  };

  return { step, nextStep, previousStep, goToStep, resetSteps };
};
