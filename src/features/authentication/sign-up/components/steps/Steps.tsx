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

const Steps = ( {stepObj}: StepObjProps ) => {
    return (
        <div className="w-full max-w-[332px] lg:max-w-[426px] h-[87px] flex flex-col justify-between">
            <h3 className="h3 text-neutral-50 pt-[9px] h-8 text-center ">Crea tu cuenta</h3>
            <div className="h-[30px] flex flex-col p-0 m-0 justify-between">
                <div className="steps h-1 p-0 m-0 flex justify-between gap-2">
                    <div className={`w-[136px] h-1 rounded-sm transition-all duration-400 ${stepObj.bgColor.barOne}`}></div>
                    <div className={`w-[136px] h-1 rounded-sm transition-all duration-400 ${stepObj.bgColor.barTwo}`}></div>
                    <div className={`w-[136px] h-1 rounded-sm transition-all duration-400 ${stepObj.bgColor.barThree}`} ></div>
                </div>
                <p className="text-body-normal-regular text-neutral-200 h-[18px] text-center flex justify-center items-center ">Paso {stepObj.stepNumber} de 3: {stepObj.stepText}</p>
            </div>
        </div>
    )
}

export default Steps