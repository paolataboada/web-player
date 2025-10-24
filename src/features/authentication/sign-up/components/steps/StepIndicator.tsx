import { useState } from "react";
import Steps from "./Steps.tsx";
import FantasyButton from "../../../../../global/components/buttons/FantasyButton.tsx";

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
    [key: number]: StepProps,
}

const stepsObj: StepObjProps = {
    1:{
        stepNumber: "1",
        stepText: "Ingresa tus datos",
        bgColor: {
            barOne: "bg-neutral-200",
            barTwo: "bg-neutral-500",
            barThree: "bg-neutral-500",
        },
    },
    2:{
        stepNumber: "2",
        stepText: "Personaliza tu cuenta",
        bgColor: {
            barOne: "bg-green-500",
            barTwo: "bg-neutral-200",
            barThree: "bg-neutral-500",
        },
    },
    3:{
        stepNumber: "3",
        stepText: "Elige tu equipo favorito",
        bgColor: {
            barOne: "bg-green-500",
            barTwo: "bg-green-500",
            barThree: "bg-neutral-200",
        },
    },
};

const StepIndicator = () => {
    const [step, setStep] = useState(1);

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

    return (
        <div className="w-full max-w-[332px] lg:max-w-[426px]">
            <Steps stepObj={stepsObj[step]}  />
            <div className="h-14 flex justify-between">
                <FantasyButton variant="secondary" size="lg" className="lg:w-[205px] w-[158px]" onClick={lastStep} >Volver</FantasyButton>
                <FantasyButton variant="primary" size="lg" className="lg:w-[205px] w-[158px] px-2.5!" onClick={nextStep} >Siguiente</FantasyButton>
            </div>
        </div>
    )
}

export default StepIndicator