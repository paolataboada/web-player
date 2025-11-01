import type { IStepProps } from "../hooks/useSignUpSteps";

export const SIGN_UP_STEPS: IStepProps[] = [
    {
        stepNumber: "1",
        stepText: "Ingresa tus datos",
        bgColor: {
            barOne: "bg-neutral-200",
            barTwo: "bg-neutral-500",
            barThree: "bg-neutral-500",
        },
    },
    {
        stepNumber: "2",
        stepText: "Personaliza tu cuenta",
        bgColor: {
            barOne: "bg-green-500",
            barTwo: "bg-neutral-200",
            barThree: "bg-neutral-500",
        },
    },
    {
        stepNumber: "3",
        stepText: "Elige tu equipo favorito",
        bgColor: {
            barOne: "bg-green-500",
            barTwo: "bg-green-500",
            barThree: "bg-neutral-200",
        },
    },
];

export const SIGN_UP_PROVIDER_STEPS: IStepProps[] = [
    {
        stepNumber: "1",
        stepText: "Ingresa tus datos",
        bgColor: {
            barOne: "bg-neutral-200",
            barTwo: "bg-neutral-500",
        },
    },
    {
        stepNumber: "2",
        stepText: "Elige tu equipo favorito",
        bgColor: {
            barOne: "bg-green-500",
            barTwo: "bg-neutral-200",
        },
    },
];
