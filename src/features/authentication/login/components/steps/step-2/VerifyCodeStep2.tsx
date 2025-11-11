import VerifyCodeStep from "@features/authentication/shared/components/steps/VerifyCodeStep";
import { useAuthActionsServices } from "@features/authentication/shared/services/useAuthActionsServices";

interface Props {
    nextStep: () => void;
    resetSteps: () => void;
    email: string;
}

const VerifyCodeStep2 = ({ nextStep, resetSteps, email }: Props) => {
    const { verifyAccountService } = useAuthActionsServices();

    return (
        <VerifyCodeStep nextStep={nextStep} resetSteps={resetSteps} service={verifyAccountService} email={email} />
    )
}

export default VerifyCodeStep2;