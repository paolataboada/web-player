import MotionContainer from "../../../../global/containers/MotionContainer";
import ChooseTeam from "../components/steps/choose-team/ChooseTeam";
import CreateAccount from "../components/steps/create-account/CreateAccount";
import CustomAccount from "../components/steps/custom-account/CustomAccount";
import StepIndicator from "../components/steps/StepIndicator";
import AuthHeader from "../../shared/components/headers/AuthHeader";
import { SIGN_UP_STEPS } from "../constants/sign-up-steps";
import { useSignUpSteps } from "../hooks/useSignUpSteps";
import { AnimatePresence } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import type { TFormSignUp } from "../types/form-sign-up.types";
import { FIELDS_PER_STEP, STEP_KEYS } from "../constants/sign-up-fields-per-step";

const SignUpPage = () => {
    const { step, nextStep, previousStep } = useSignUpSteps();

    const methods = useForm<TFormSignUp>({ mode: "onChange" });

    const handleNextStep = async () => {
        const key = STEP_KEYS[step];
        const fields = FIELDS_PER_STEP[key];
        if (!fields) return;

        const valid = await methods.trigger(fields);
        if (!valid) return;
        nextStep();
    }

    return (
        <MotionContainer>
            <AuthHeader title="¡Únete ahora!" description="Regístrate y empieza a jugar" titleWidth={237} />

            <StepIndicator
                stepNumber={SIGN_UP_STEPS[step].stepNumber}
                stepText={SIGN_UP_STEPS[step].stepText}
                bgColor={SIGN_UP_STEPS[step].bgColor}
            />

            <AnimatePresence mode="wait">
                <FormProvider {...methods}>
                    {/* Step 1 */}
                    {step === 0 && <CreateAccount nextStep={handleNextStep} />}

                    {/* Step 2 */}
                    {step === 1 && <CustomAccount nextStep={handleNextStep} previousStep={previousStep} />}

                    {/* Step 3 */}
                    {step === 2 && <ChooseTeam previousStep={previousStep} />}
                </FormProvider>
            </AnimatePresence>
        </MotionContainer>
    )
}

export default SignUpPage