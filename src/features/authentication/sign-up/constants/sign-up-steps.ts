import type { IStepProps } from "../hooks/useSignUpSteps";

export const SIGN_UP_STEPS: IStepProps[] = [
    {
        stepNumber: "1",
        stepText: "Ingresa tus datos",
    },
    {
        stepNumber: "2",
        stepText: "Personaliza tu cuenta",
    },
    {
        stepNumber: "3",
        stepText: "Elige tu equipo favorito",
    },
    {
        stepNumber: "4",
        stepText: "Verificar Código",
        showInProgress: false,
    },
];

export const SIGN_UP_PROVIDER_STEPS: IStepProps[] = [
    {
        stepNumber: "1",
        stepText: "Ingresa tus datos",
    },
    {
        stepNumber: "2",
        stepText: "Elige tu equipo favorito",
    },
];
