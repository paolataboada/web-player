import { AnimatePresence } from "framer-motion";

const ResetPasswordPage = () => {

	//const navigate = useNavigate();
	//const dispatch = useDispatch();
	//const { step, nextStep } = useSignUpSteps(RESET_PASSWORD_STEPS);

	/*const goBackToLogin = () => {
		navigate(ROUTES.LOGIN);
		dispatch(clearSession());
	}*/

	return (
		<AnimatePresence mode="wait">
			{/* Step 1 */}
			{/* {step === 0 && <RecoverPasswordStep1 goBack={goBackToLogin} nextStep={nextStep} setEmail={setRecoveryEmail} />}

			{/* Step 2 */}
			{/* {step === 1 && <VerifyCodeStep2 goBack={goBackToLogin} nextStep={nextStep} email={recoveryEmail} />}

			{/* Step 3 */}
			{/* {step === 2 && <CreateNewPasswordStep3 goBack={goBackToLogin} nextStep={nextStep} />}

			{/* Step 4 */}
			{/*	step === 3 && <ConfirmationResetPasswordStep4 />*/}
		</AnimatePresence>
	);
};

export default ResetPasswordPage;