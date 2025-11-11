import VerifyCodeStep from "@features/authentication/shared/components/steps/VerifyCodeStep";
import type { TFormSignUp } from "@features/authentication/sign-up/types/form-sign-up.types";
import { ROUTES } from "@navigation/routes/routes";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface Props {
    resetSteps: () => void;
}

const VerifyCodeStep4 = ({ resetSteps }: Props) => {
    const navigate = useNavigate();

    const { watch, getValues } = useFormContext<TFormSignUp>();
    const email = watch("email") ?? "";
    const player = getValues();

    const handleNext = () => {
        localStorage.setItem("player", JSON.stringify(player));
        navigate(ROUTES.HOME, {
            replace: true,
            state: { toast: "¡Bienvenid@ a FFantasy!" },
        });
    }

    return (
        <VerifyCodeStep nextStep={handleNext} resetSteps={resetSteps} email={email} />
    )
}

export default VerifyCodeStep4