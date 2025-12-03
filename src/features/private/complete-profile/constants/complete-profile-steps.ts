export interface IStepProps {
    stepNumber: string;
    stepText: string;
    showInProgress?: boolean;
}

export const COMPLETE_PROFILE_STEPS: IStepProps[] = [
    {
        stepNumber: "1",
        stepText: "Paso 1 de 2: Ingresa tus datos",
    },
    {
        stepNumber: "2",
        stepText: "Paso 2 de 2: Elige tu equipo favorito",
    },
];
