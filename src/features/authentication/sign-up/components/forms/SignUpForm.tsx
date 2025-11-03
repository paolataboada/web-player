import { Fragment } from "react"
import { AnimatePresence } from "framer-motion"
import StepIndicator from "../steps/StepIndicator"
import CreateAccountStep1 from "../steps/step-1/CreateAccountStep1"
import CustomAccountStep2 from "../steps/step-2/CustomAccountStep2"
import ChooseTeamStep3 from "../steps/step-3/ChooseTeamStep3"
import { SIGN_UP_STEPS } from "../../constants/sign-up-steps"
import VerifyCodeStep4 from "../steps/step-4/VerifyCodeStep4"

interface Props {
	step: number;
	nextStep: () => void;
	previousStep: () => void;
	resetSteps: () => void;
	handleSubmit: () => void;
}

const SignUpForm = ({ step, nextStep, previousStep, resetSteps, handleSubmit }: Props) => {
	return (
		<Fragment>
			{step !== 3 && <StepIndicator title="Crea tu cuenta" currentStep={step} steps={SIGN_UP_STEPS} />}

			<AnimatePresence mode="wait">
				{/* Step 1 */}
				{step === 0 && <CreateAccountStep1 nextStep={nextStep} />}

				{/* Step 2 */}
				{step === 1 && <CustomAccountStep2 nextStep={nextStep} previousStep={previousStep} />}

				{/* Step 3 */}
				{step === 2 && <ChooseTeamStep3 previousStep={previousStep} handleSubmit={handleSubmit} />}

				{/* Step 4 */}
				{step === 3 && <VerifyCodeStep4 nextStep={nextStep} resetSteps={resetSteps}  />}
			</AnimatePresence>
		</Fragment>
	)
}

export default SignUpForm