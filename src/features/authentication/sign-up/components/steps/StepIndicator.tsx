interface StepProps {
    stepNumber: string,
    stepText: string,
    bgColor: {
        barOne: string,
        barTwo: string,
        barThree: string,
    },
}

interface StepObjProps {
    stepObj: StepProps;
}

const StepIndicator = ({ stepObj }: StepObjProps) => {
    return (
        <div className="w-full grid gap-4">
            <h3 className="text-center">Crea tu cuenta</h3>
            <div className="grid gap-2">
                <div className="h-1 flex gap-2">
                    <div className={`w-full h-1 rounded-sm transition-all duration-400 ${stepObj.bgColor.barOne}`} />
                    <div className={`w-full h-1 rounded-sm transition-all duration-400 ${stepObj.bgColor.barTwo}`} />
                    <div className={`w-full h-1 rounded-sm transition-all duration-400 ${stepObj.bgColor.barThree}`} />
                </div>
                <p className="text-body-normal-regular text-neutral-200 text-center flex justify-center items-center">
                    Paso {stepObj.stepNumber} de 3: {stepObj.stepText}
                </p>
            </div>
        </div>
    )
}

export default StepIndicator