import type { StepProps } from "../../constants/sign-up-steps";

interface Props {
    title?: string;
    description?: string;
    currentStep: number;
    steps: StepProps[];
}

const StepIndicator = ({ title, description, currentStep, steps }: Props) => {
    const { stepNumber, stepText, bgColor } = steps[currentStep];

    return (
        <div className="w-full grid gap-4">
            <div className="grid gap-2 place-content-center text-center">
                {title && <h3>{title}</h3>}
                {description && <p className="font-body-normal-regular text-neutral-200">{description}</p>}
            </div>
            <div className="grid gap-2">
                <div className="h-1 flex gap-2">
                    {Object.values(bgColor).map((bar, index) => (
                        <div
                            key={index}
                            className={`w-full h-1 rounded-sm transition-all duration-400 ${bar}`}
                        />
                    ))}
                </div>
                <p className="text-body-normal-regular text-neutral-200 text-center flex justify-center items-center">
                    Paso {stepNumber} de {steps.length}: {stepText}
                </p>
            </div>
        </div>
    )
}

export default StepIndicator