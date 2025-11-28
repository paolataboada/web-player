import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { ROUTES } from "@navigation/routes/routes";
import type { TFormSignUp } from "@features/authentication/sign-up/types/form-sign-up.types";
import VerifyCodeStep from "@features/authentication/shared/components/steps/VerifyCodeStep";
import { useAuthActionsServices } from "@features/authentication/shared/services/useAuthActionsServices";

interface Props {
    resetSteps: () => void;
}

const VerifyCodeStep4 = ({ resetSteps }: Props) => {
    const navigate = useNavigate();

    const { verifyAccountCodeService, resendRecoveryAccountCodeService } = useAuthActionsServices();

    const { watch } = useFormContext<TFormSignUp>();
    const email = watch("email") ?? "";

    const handleNext = () => {
        navigate(ROUTES.HOME);
    }

    return (
        <VerifyCodeStep
            nextStep={handleNext}
            resetSteps={resetSteps}
            verifyCodeService={verifyAccountCodeService}
            resendCodeService={resendRecoveryAccountCodeService}
            email={email}
        />
    )
}

export default VerifyCodeStep4