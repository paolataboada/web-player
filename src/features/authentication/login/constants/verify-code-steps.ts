import type { IStepProps } from "@features/authentication/sign-up/hooks/useSignUpSteps";

export const VERIFY_CODE_STEPS: IStepProps[] = [
    {
        stepNumber: "1",
        stepText: "Ingresar correo electrónico",
    },
    {
        stepNumber: "2",
        stepText: "Verificar código",
    },
];