import MotionContainer from "../../../../global/containers/MotionContainer";
import AuthHeader from "../../shared/components/headers/AuthHeader";
import { SIGN_UP_STEPS } from "../constants/sign-up-steps";
import { useSignUpSteps } from "../hooks/useSignUpSteps";
import { FormProvider, useForm } from "react-hook-form";
import type { TFormSignUp } from "../types/form-sign-up.types";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useSignUpStepValidation } from "../hooks/useSignUpStepValidation";
import { useSignUpActionsServices } from "../services/useSignUpActionsServices";
import { useTokenAuthRedirect } from "@features/authentication/shared/hooks/useTokenAuthRedirect";
import { useState } from "react";
import SignUpForm from "../components/forms/SignUpForm";
import SignUpProviderForm from "../components/forms/SignUpProviderForm";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";
import { ECreatedVia, type IUserEntity } from "@entities/user/types";
import CreateAccountStep1 from "../components/steps/step-1/CreateAccountStep1";
import CustomAccountStep2 from "../components/steps/step-2/CustomAccountStep2";
import ChooseTeamStep3 from "../components/steps/step-3/ChooseTeamStep3";

export type ISignUpData = Pick<
    IUserEntity,
    "username" | "password" | "firstName" | "lastName" | "email" | "birthDate" | "teamId"
> | null


const SignUpPage = () => {
    const navigate = useNavigate();
    const handleError = useHandlerError();

    const { apiSignUpService } = useSignUpActionsServices();

    const [signUpData, setSignUpData] = useState<ISignUpData>(null);

    const { step, nextStep, previousStep, goToStep } = useSignUpSteps(SIGN_UP_STEPS);

    const { handleNextStep } = useSignUpStepValidation(step, methods, nextStep, formType);

    const onSubmit = async () => {
        try {
            await apiSignUpService(signUpData)
        } catch (error) {
            handleError(error);
        } finally {
            navigate(ROUTES.LOGIN);
        }
    };

    return (
        <MotionContainer>
            <AuthHeader
                title="¡Únete ahora!"
                description="Regístrate y empieza a jugar"
                titleWidth={237}
                withProviders={!isExternalSignup}
            />

            {/* Step 1 */}
            {step === 0 && <CreateAccountStep1 nextStep={nextStep} />}

            {/* Step 2 */}
            {step === 1 && <CustomAccountStep2 nextStep={nextStep} previousStep={previousStep} />}

            {/* Step 3 */}
            {step === 2 && <ChooseTeamStep3 type="STANDARD" previousStep={previousStep} handleSubmit={handleSubmit} />}
        </MotionContainer>
    )
}

export default SignUpPage