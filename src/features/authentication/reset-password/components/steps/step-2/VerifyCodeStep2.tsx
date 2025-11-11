import { useResetPasswordActionsServices } from "@features/authentication/reset-password/services/useResetPasswordActionsServices";
import VerifyCodeStep from "@features/authentication/shared/components/steps/VerifyCodeStep";

interface Props {
    nextStep: () => void;
    resetSteps: () => void;
    email: string;
}

const VerifyCodeStep2 = ({ nextStep, resetSteps, email }: Props) => {
    const { verifyCodeService } = useResetPasswordActionsServices();

    return (
        <VerifyCodeStep nextStep={nextStep} resetSteps={resetSteps} service={verifyCodeService} email={email} />
    )
}

export default VerifyCodeStep2