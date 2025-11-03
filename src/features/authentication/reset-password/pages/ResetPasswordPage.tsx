import { useSignUpSteps } from "@features/authentication/sign-up/hooks/useSignUpSteps";
import { RESET_PASSWORD_STEPS } from "../constants/reset-password-steps";
import { AnimatePresence } from "framer-motion";
import RecoverPasswordStep1 from "../components/steps/step-1/RecoverPasswordStep1";
import VerifyCodeStep2 from "../components/steps/step-2/VerifyCodeStep2";
import CreateNewPasswordStep3 from "../components/steps/step-3/CreateNewPasswordStep3";
import ConfirmationResetPasswordStep4 from "../components/steps/step-4/ConfirmationResetPasswordStep4";
import { useState } from "react";

const ResetPasswordPage = () => {
	const [recoveryEmail, setRecoveryEmail] = useState<string>("");

	const { step, nextStep, resetSteps } = useSignUpSteps(RESET_PASSWORD_STEPS);

	return (
		<AnimatePresence mode="wait">
			{/* Step 1 */}
			{step === 0 && <RecoverPasswordStep1 nextStep={nextStep} setEmail={setRecoveryEmail} />}

			{/* Step 2 */}
			{step === 1 && <VerifyCodeStep2 nextStep={nextStep} resetSteps={resetSteps} email={recoveryEmail} />}

			{/* Step 3 */}
			{step === 2 && <CreateNewPasswordStep3 nextStep={nextStep} resetSteps={resetSteps} />}

			{/* Step 4 */}
			{step === 3 && <ConfirmationResetPasswordStep4 />}
		</AnimatePresence>
	);
};

export default ResetPasswordPage;