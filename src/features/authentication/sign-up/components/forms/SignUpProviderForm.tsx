import { Fragment } from "react"
import { AnimatePresence } from "framer-motion"
import StepIndicator from "../steps/StepIndicator"
import ChooseTeamStep2 from "../steps/step-3/ChooseTeamStep3"
import { SIGN_UP_PROVIDER_STEPS } from "../../constants/sign-up-steps"
import CreateAccountProviderStep1 from "../steps/step-1/CreateAccountProviderStep1"

interface Props {
	step: number;
	nextStep: () => void;
	previousStep: () => void;
	handleSubmit: () => void;
}

const SignUpProviderForm = ({ step, nextStep, previousStep, handleSubmit }: Props) => {
	return (
		<Fragment>
			<StepIndicator
				title="Finaliza tu registro"
				description="Completa los últimos pasos para empezar a jugar"
				currentStep={step}
				steps={SIGN_UP_PROVIDER_STEPS}
			/>

			<AnimatePresence mode="wait">
				{/* Step 1 */}
				{step === 0 && <CreateAccountProviderStep1 nextStep={nextStep} />}

				{/* Step 2 */}
				{step === 1 && <ChooseTeamStep2 type="PROVIDER" previousStep={previousStep} handleSubmit={handleSubmit} />}
			</AnimatePresence>
		</Fragment>
	)
}

export default SignUpProviderForm