import { useState } from "react";
import { StepOne, StepTwo, StepThree } from "./Steps.tsx";
import FantasyButton from "../../../../../global/components/buttons/FantasyButton.tsx";

const StepIndicator = () => {
    const [step, setStep] = useState(1);

    const stepsArray = [StepOne, StepTwo, StepThree]; 

    function nextStep() {
        if ( step < 3 ) {
            setStep(step + 1);
        } 
    }

    function lastStep() {
        if ( step > 1 ) {
            setStep(step - 1);
        }
    }

    const StepComponent = stepsArray[step - 1];

    return (
        <div className="w-full max-w-[332px] lg:max-w-[426px]">
            <StepComponent />
            <div className="h-14 flex justify-between">
                <FantasyButton variant="secondary" size="lg" className="lg:w-[205px] w-[158px]" onClick={lastStep} >Volver</FantasyButton>
                <FantasyButton variant="primary" size="lg" className="lg:w-[205px] w-[158px] px-2.5!" onClick={nextStep} >Siguiente</FantasyButton>
            </div>
        </div>
    )
}

export default StepIndicator