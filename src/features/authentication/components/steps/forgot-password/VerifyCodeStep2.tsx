import { useResetPasswordActionsServices } from "@features/authentication/services/useResetPasswordActionsServices";
import VerifyCodeStep from "@features/authentication/shared/components/steps/VerifyCodeStep";

interface Props {
    goBack: () => void;
    nextStep: () => void;
    email: string;
}

const VerifyCodeStep2 = ({ goBack, nextStep, email }: Props) => {
    const { verifyCodeService, resendRecoveryCodeService } = useResetPasswordActionsServices();

    return (
        <VerifyCodeStep
            nextStep={nextStep}
            resetSteps={goBack}
            verifyCodeService={verifyCodeService}
            resendCodeService={resendRecoveryCodeService}
            email={email}
        />
    )
}

export default VerifyCodeStep2