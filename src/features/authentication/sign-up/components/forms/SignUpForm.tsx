import { Fragment } from "react"
import { AnimatePresence } from "framer-motion"
import StepIndicator from "../steps/StepIndicator"
import CreateAccountStep1 from "../steps/step-1/CreateAccountStep1"
import CustomAccountStep2 from "../steps/step-2/CustomAccountStep2"
import ChooseTeamStep3 from "../steps/step-3/ChooseTeamStep3"
import { SIGN_UP_STEPS } from "../../constants/sign-up-steps"

interface Props {
	step: number;
	nextStep: () => void;
	previousStep: () => void;
	handleSubmit: () => void;
}

const SignUpForm = ({ step, nextStep, previousStep, handleSubmit }: Props) => {
	return (
		<Fragment>
			<StepIndicator title="Crea tu cuenta" currentStep={step} steps={SIGN_UP_STEPS} />

			<AnimatePresence mode="wait">
				{/* Step 1 */}
				{step === 0 && <CreateAccountStep1 nextStep={nextStep} />}

				{/* Step 2 */}
				{step === 1 && <CustomAccountStep2 nextStep={nextStep} previousStep={previousStep} />}

				{/* Step 3 */}
				{step === 2 && <ChooseTeamStep3 previousStep={previousStep} handleSubmit={handleSubmit} />}
			</AnimatePresence>
		</Fragment>
	)
}

export default SignUpForm