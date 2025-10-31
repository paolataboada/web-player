import { Fragment } from "react"
import { AnimatePresence } from "framer-motion"
import StepIndicator from "../steps/StepIndicator"
import CreateAccount from "../steps/create-account/CreateAccount"
import CustomAccount from "../steps/custom-account/CustomAccount"
import ChooseTeam from "../steps/choose-team/ChooseTeam"
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
				{step === 0 && <CreateAccount nextStep={nextStep} />}

				{/* Step 2 */}
				{step === 1 && <CustomAccount nextStep={nextStep} previousStep={previousStep} />}

				{/* Step 3 */}
				{step === 2 && <ChooseTeam previousStep={previousStep} handleSubmit={handleSubmit} />}
			</AnimatePresence>
		</Fragment>
	)
}

export default SignUpForm