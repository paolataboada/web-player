
const StepIndicator = () => {
    return (
        <div className="h-[87px] flex flex-col justify-between">
            <h3 className="h3 text-neutral-50 pt-[9px] h-8 text-center">Crea tu cuenta</h3>
            <div className="h-[30px] flex flex-col p-0 m-0 justify-between">
                <div className="steps h-1 p-0 m-0 flex justify-between gap-2">
                    <div className="current-step w-[136px] h-1 rounded-sm bg-green-500"></div>
                    <div className="next-step w-[136px] h-1 rounded-sm bg-neutral-200"></div>
                    <div className="last-step w-[136px] h-1 rounded-sm bg-neutral-500" ></div>
                </div>
                <p className="text-body-normal-regular text-neutral-200 h-[18px] text-center flex justify-center items-center">
                    Paso 1 de 3: Ingresa tus datos
                </p>
            </div>
        </div>
    )
}

export default StepIndicator