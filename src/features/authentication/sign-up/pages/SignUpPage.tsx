import { useState } from "react";
import MotionContainer from "../../../../global/containers/MotionContainer";
import HeaderAuth from "../../shared/components/headers/HeaderAuth";
import ChooseTeam from "../components/steps/choose-team/ChooseTeam";
import CreateAccount from "../components/steps/create-account/CreateAccount";
import CustomAccount from "../components/steps/custom-account/CustomAccount";
import StepIndicator from "../components/steps/StepIndicator";


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
    1: {
        stepNumber: "1",
        stepText: "Ingresa tus datos",
        bgColor: {
            barOne: "bg-neutral-200",
            barTwo: "bg-neutral-500",
            barThree: "bg-neutral-500",
        },
    },
    2: {
        stepNumber: "2",
        stepText: "Personaliza tu cuenta",
        bgColor: {
            barOne: "bg-green-500",
            barTwo: "bg-neutral-200",
            barThree: "bg-neutral-500",
        },
    },
    3: {
        stepNumber: "3",
        stepText: "Elige tu equipo favorito",
        bgColor: {
            barOne: "bg-green-500",
            barTwo: "bg-green-500",
            barThree: "bg-neutral-200",
        },
    },
};


const SignUpPage = () => {
    const [step, setStep] = useState(1);

    function nextStep() {
        if (step < 3) {
            setStep(step + 1);
        }
    }

    function previousStep() {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    return (
        <MotionContainer>
            <HeaderAuth title="¡Únete ahora!" description="Regístrate y empieza a jugar" titleWidth={237} />

            <StepIndicator stepObj={stepsObj[step]} />

            {/* Step 1 */}
            {step === 1 && <CreateAccount nextStep={nextStep} />}

            {/* Step 2 */}
            {step === 2 && <CustomAccount nextStep={nextStep} previousStep={previousStep} />}

            {/* Step 3 */}
            {step === 3 && <ChooseTeam nextStep={nextStep} previousStep={previousStep} />}
        </MotionContainer>
    )
}

export default SignUpPage