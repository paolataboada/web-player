import type { IRecoveryData } from "@features/authentication/reset-password/pages/ResetPasswordPage";
import VerifyCodeStep from "@features/authentication/shared/components/steps/VerifyCodeStep";

interface Props {
    nextStep: () => void;
    resetSteps: () => void;
    setCode: (state: IRecoveryData) => void;
    email: string;
}

const VerifyCodeStep2 = ({ nextStep, resetSteps, setCode, email }: Props) => {
    return (
        <VerifyCodeStep
            nextStep={nextStep}
            resetSteps={resetSteps}
            email={email}
            setCode={setCode}
        />
    )
}

export default VerifyCodeStep2