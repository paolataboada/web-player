import { useSignUpSteps } from "@features/authentication/sign-up/hooks/useSignUpSteps";
import { VERIFY_CODE_STEPS } from "../../constants/verify-code-steps";
import { AnimatePresence } from "framer-motion";
import VerifyCodeStep2 from "../steps/step-2/VerifyCodeStep2";
import { useState } from "react";
import RecoverVerifyCodeStep1 from "../steps/step-1/RecoverVerifyCodeStep1";

interface Props {
    setHasVerified: (state: boolean) => void;
}

const VerifyAccountForm = ({ setHasVerified }: Props) => {
    const [email, setEmail] = useState("");

    const { step, nextStep, resetSteps } = useSignUpSteps(VERIFY_CODE_STEPS);

    const goToLoginForm = () => {
        setHasVerified(true);
    }

    return (
        <AnimatePresence mode="wait">
            {/* Step 1 */}
            {step === 0 && <RecoverVerifyCodeStep1 nextStep={nextStep} previousStep={goToLoginForm} setEmail={setEmail} />}

            {/* Step 2 */}
            {step === 1 && <VerifyCodeStep2 nextStep={goToLoginForm} resetSteps={resetSteps} email={email} />}
        </AnimatePresence>
    )
}

export default VerifyAccountForm;