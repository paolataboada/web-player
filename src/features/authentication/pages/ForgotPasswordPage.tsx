import { useStepsControl } from "@features/authentication/hooks/useSignUpSteps";
import { AnimatePresence } from "framer-motion";
import RecoverPasswordStep1 from "../components/steps/forgot-password/RecoverPasswordStep1";
import VerifyCodeStep2 from "../components/steps/forgot-password/VerifyCodeStep2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";
import { useDispatch } from "react-redux";
import { clearSession } from "@app/slices/session/session.slice";

const ForgotPasswordPage = () => {
  const [recoveryEmail, setRecoveryEmail] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { step, nextStep } = useStepsControl(2);

  const goBackToLogin = () => {
    navigate(ROUTES.LOGIN);
    dispatch(clearSession());
  };

  return (
    <AnimatePresence mode="wait">
      {/* Step 1 */}
      {step === 0 && (
        <RecoverPasswordStep1
          goBack={goBackToLogin}
          nextStep={nextStep}
          setEmail={setRecoveryEmail}
        />
      )}

      {/* Step 2 */}
      {step === 1 && (
        <VerifyCodeStep2
          goBack={goBackToLogin}
          email={recoveryEmail}
        />
      )}
    </AnimatePresence>
  );
};

export default ForgotPasswordPage;
