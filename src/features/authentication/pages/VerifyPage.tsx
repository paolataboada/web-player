import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";
import { AnimatePresence } from "framer-motion";
import RecoverVerifyCodeStep1 from "@features/authentication/components/steps/verify-account/RecoverVerifyCodeStep1";
import { useState } from "react";
import { useStepsControl } from "@features/authentication/hooks/useSignUpSteps";
import VerifyCodeStep2 from "@features/authentication/components/steps/forgot-password/VerifyCodeStep2";

const VerifyPage = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { step, nextStep, previousStep } = useStepsControl(2);

  const goToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <AnimatePresence mode="wait">
      {/* Step 1 */}
      {step === 0 && (
        <RecoverVerifyCodeStep1
          nextStep={nextStep}
          previousStep={goToLogin}
          setEmail={setEmail}
        />
      )}

      {/* Step 2 */}
      {step === 1 && (
        <VerifyCodeStep2
          nextStep={goToLogin}
          goBack={previousStep}
          email={email}
        />
      )}
    </AnimatePresence>
  );
};

export default VerifyPage;
