import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";
import { AnimatePresence } from "framer-motion";
import RecoverVerifyCodeStep1 from "@features/authentication/login/components/steps/step-1/RecoverVerifyCodeStep1";
import VerifyCodeStep2 from "@features/authentication/reset-password/components/steps/step-2/VerifyCodeStep2";
import { useSignUpSteps } from "@features/authentication/sign-up/hooks/useSignUpSteps";
import { VERIFY_CODE_STEPS } from "@features/authentication/login/constants/verify-code-steps";
import { useState } from "react";

const VerifyPage = () => {
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const { step, nextStep, previousStep } = useSignUpSteps(VERIFY_CODE_STEPS);

    const goToLogin = () => {
        navigate(ROUTES.LOGIN);
    }

    return (
        <AnimatePresence mode="wait">
            {/* Step 1 */}
            {step === 0 && <RecoverVerifyCodeStep1 nextStep={nextStep} previousStep={goToLogin} setEmail={setEmail} />}

            {/* Step 2 */}
            {step === 1 && <VerifyCodeStep2 nextStep={goToLogin} goBack={previousStep} email={email} />}
        </AnimatePresence>
    )
};

export default VerifyPage;