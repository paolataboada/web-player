export interface IStepProps {
    stepNumber: string;
    stepText: string;
    showInProgress?: boolean;
}

export const COMPLETE_PROFILE_STEPS: IStepProps[] = [
    {
        stepNumber: "1",
        stepText: "Ingresa tus datos",
    },
    {
        stepNumber: "2",
        stepText: "Elige tu equipo favorito",
    },
];
