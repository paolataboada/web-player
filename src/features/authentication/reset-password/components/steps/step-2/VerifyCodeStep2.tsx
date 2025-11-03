import VerifyCodeStep from "@features/authentication/shared/components/steps/VerifyCodeStep";

interface Props {
    nextStep: () => void;
    resetSteps: () => void;
    email: string;
}

const VerifyCodeStep2 = ({ nextStep, resetSteps, email }: Props) => {
    return (
        <VerifyCodeStep nextStep={nextStep} resetSteps={resetSteps} email={email} />
    )
}

export default VerifyCodeStep2