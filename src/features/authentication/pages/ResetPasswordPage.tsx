import { useSignUpSteps } from "@features/authentication/hooks/useSignUpSteps";
import { RESET_PASSWORD_STEPS } from "../constants/reset-password-steps";
import { AnimatePresence } from "framer-motion";
import RecoverPasswordStep1 from "../components/steps/forgot-password/RecoverPasswordStep1";
import VerifyCodeStep2 from "../components/steps/forgot-password/VerifyCodeStep2";
import CreateNewPasswordStep3 from "../components/steps/forgot-password/CreateNewPasswordStep3";
import ConfirmationResetPasswordStep4 from "../components/steps/forgot-password/ConfirmationResetPasswordStep4";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";
import { useDispatch } from "react-redux";
import { clearSession } from "@app/slices/session/session.slice";

const ResetPasswordPage = () => {
	const [recoveryEmail, setRecoveryEmail] = useState<string>("");

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { step, nextStep } = useSignUpSteps(RESET_PASSWORD_STEPS);

	const goBackToLogin = () => {
		navigate(ROUTES.LOGIN);
		dispatch(clearSession());
	}

	return (
		<AnimatePresence mode="wait">
			{/* Step 1 */}
			{step === 0 && <RecoverPasswordStep1 goBack={goBackToLogin} nextStep={nextStep} setEmail={setRecoveryEmail} />}

			{/* Step 2 */}
			{step === 1 && <VerifyCodeStep2 goBack={goBackToLogin} nextStep={nextStep} email={recoveryEmail} />}

			{/* Step 3 */}
			{step === 2 && <CreateNewPasswordStep3 goBack={goBackToLogin} nextStep={nextStep} />}

			{/* Step 4 */}
			{step === 3 && <ConfirmationResetPasswordStep4 />}
		</AnimatePresence>
	);
};

export default ResetPasswordPage;