import MotionContainer from "../../../../global/containers/MotionContainer";
import ChooseTeam from "../components/steps/choose-team/ChooseTeam";
import CreateAccount from "../components/steps/create-account/CreateAccount";
import CustomAccount from "../components/steps/custom-account/CustomAccount";
import StepIndicator from "../components/steps/StepIndicator";
import AuthHeader from "../../shared/components/headers/AuthHeader";
import { SIGN_UP_STEPS } from "../constants/sign-up-steps";
import { useSignUpSteps } from "../hooks/useSignUpSteps";
import { AnimatePresence } from "framer-motion";

const SignUpPage = () => {
    const { step, nextStep, previousStep } = useSignUpSteps();

    return (
        <MotionContainer>
            <AuthHeader title="¡Únete ahora!" description="Regístrate y empieza a jugar" titleWidth={237} />

            <StepIndicator
                stepNumber={SIGN_UP_STEPS[step].stepNumber}
                stepText={SIGN_UP_STEPS[step].stepText}
                bgColor={SIGN_UP_STEPS[step].bgColor}
            />

            <AnimatePresence mode="wait">
                {/* Step 1 */}
                {step === 0 && <CreateAccount nextStep={nextStep} />}

                {/* Step 2 */}
                {step === 1 && <CustomAccount nextStep={nextStep} previousStep={previousStep} />}

                {/* Step 3 */}
                {step === 2 && <ChooseTeam nextStep={nextStep} previousStep={previousStep} />}
            </AnimatePresence>
        </MotionContainer>
    )
}

export default SignUpPage