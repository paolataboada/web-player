import type { IStepProps } from "../../hooks/useSignUpSteps";

interface Props {
    title?: string;
    description?: string;
    currentStep: number;
    steps: IStepProps[];
    activeColor?: string;
    completedColor?: string;
    inactiveColor?: string;
}

const StepIndicator = ({
    title,
    description,
    currentStep,
    steps,
    activeColor = "bg-neutral-200",
    completedColor = "bg-green-500",
    inactiveColor = "bg-neutral-500",
}: Props) => {
    const visibleSteps = steps.filter(step => step.showInProgress !== false);
    const visibleIndex = Math.min(currentStep, visibleSteps.length - 1);
    const { stepNumber, stepText } = steps[visibleIndex];

    const totalBars = visibleSteps.length;
    const bars = Array.from({ length: totalBars }, (_, i) => {
        if (i < visibleIndex) return completedColor;
        if (i === visibleIndex) return activeColor;
        return inactiveColor;
    });

    return (
        <div className="w-full grid gap-4">
            <div className="grid gap-2 place-content-center text-center">
                {title && <h3>{title}</h3>}
                {description && <p className="font-body-normal-regular text-neutral-200">{description}</p>}
            </div>
            <div className="grid gap-2">
                <div className="h-1 flex gap-2">
                    {bars.map((color, index) => (
                        <div
                            key={index}
                            className={`w-full h-1 rounded-sm transition-all duration-400 ${color}`}
                        />
                    ))}
                </div>
                <p className="text-body-normal-regular text-neutral-200 text-center flex justify-center items-center">
                    Paso {stepNumber} de {visibleSteps.length}: {stepText}
                </p>
            </div>
        </div>
    )
}

export default StepIndicator