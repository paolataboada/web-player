import type { StepProps } from "../../constants/sign-up-steps";

const StepIndicator = ({ stepNumber, stepText, bgColor }: StepProps) => {
    const bars = [bgColor.barOne, bgColor.barTwo, bgColor.barThree];

    return (
        <div className="w-full grid gap-4">
            <h3 className="text-center">Crea tu cuenta</h3>
            <div className="grid gap-2">
                <div className="h-1 flex gap-2">
                    {bars.map((bar, index) => (
                        <div
                            key={index}
                            className={`w-full h-1 rounded-sm transition-all duration-400 ${bar}`}
                        />
                    ))}
                </div>
                <p className="text-body-normal-regular text-neutral-200 text-center flex justify-center items-center">
                    Paso {stepNumber} de 3: {stepText}
                </p>
            </div>
        </div>
    )
}

export default StepIndicator