import VerifyCodeStep from "@features/authentication/shared/components/steps/VerifyCodeStep";
import type { TFormSignUp } from "@features/authentication/sign-up/types/form-sign-up.types";
import { ROUTES } from "@navigation/routes/routes";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface Props {
    nextStep: () => void;
    resetSteps: () => void;
}

const VerifyCodeStep4 = ({ nextStep, resetSteps }: Props) => {
    const navigate = useNavigate();

    const { watch } = useFormContext<TFormSignUp>();
    const email = watch("email") ?? "";

    const handleNext = () => {
        nextStep();
        navigate(ROUTES.LOGIN);
    }

    return (
        <VerifyCodeStep nextStep={handleNext} resetSteps={resetSteps} email={email} />
    )
}

export default VerifyCodeStep4