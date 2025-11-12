import VerifyCodeStep from "@features/authentication/shared/components/steps/VerifyCodeStep";
import { useAuthActionsServices } from "@features/authentication/shared/services/useAuthActionsServices";

interface Props {
    nextStep: () => void;
    resetSteps: () => void;
    email: string;
}

const VerifyCodeStep2 = ({ nextStep, resetSteps, email }: Props) => {
    const { verifyAccountCodeService, resendRecoveryAccountCodeService } = useAuthActionsServices();

    return (
        <VerifyCodeStep
            nextStep={nextStep}
            resetSteps={resetSteps}
            verifyCodeService={verifyAccountCodeService}
            resendCodeService={resendRecoveryAccountCodeService}
            email={email}
        />
    )
}

export default VerifyCodeStep2;