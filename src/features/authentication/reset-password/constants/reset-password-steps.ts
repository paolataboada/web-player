import type { IStepProps } from "@features/authentication/sign-up/hooks/useSignUpSteps";

export const RESET_PASSWORD_STEPS: IStepProps[] = [
    {
        stepNumber: "1",
        stepText: "Recupera tu contraseña",
    },
    {
        stepNumber: "2",
        stepText: "Verificar código",
    },
    {
        stepNumber: "3",
        stepText: "Crear nueva contraseña",
    },
    {
        stepNumber: "4",
        stepText: "Confirmar reseteo de contraseña",
    },
];