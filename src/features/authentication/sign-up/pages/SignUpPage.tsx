import MotionContainer from "../../../../global/containers/MotionContainer";
import AuthHeader from "../../shared/components/headers/AuthHeader";
import { SIGN_UP_STEPS } from "../constants/sign-up-steps";
import { useSignUpSteps } from "../hooks/useSignUpSteps";
import { FormProvider, useForm } from "react-hook-form";
import type { TFormSignUp } from "../types/form-sign-up.types";
import { useNavigate } from "react-router-dom";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { ROUTES } from "@navigation/routes/routes";
import { useSignUpStepValidation } from "../hooks/useSignUpStepValidation";
import { useSignUpActionsServices } from "../services/useSignUpActionsServices";
import { useTokenAuthRedirect } from "@features/authentication/shared/hooks/useTokenAuthRedirect";
import { useState } from "react";
import SignUpForm from "../components/forms/SignUpForm";
import SignUpProviderForm from "../components/forms/SignUpProviderForm";


const SignUpPage = () => {
    const [isExternalSignup, setIsExternalSignup] = useState(true);
    useTokenAuthRedirect({ setExternal: setIsExternalSignup });

    const navigate = useNavigate();
    const handleError = useHandlerError();
    const { apiSignUpService } = useSignUpActionsServices();

    const methods = useForm<TFormSignUp>({ mode: "onChange" });
    
    const formType = isExternalSignup ? "PROVIDER" : "STANDARD";
    const { step, nextStep, previousStep } = useSignUpSteps(SIGN_UP_STEPS);
    const { handleNextStep } = useSignUpStepValidation(step, methods, nextStep, formType);

    const onSubmit = async (form: TFormSignUp) => {
        try {
            const payload = {
                username: form.username,
                password: form.password,
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                birthDate: form.birthDate,
                documentType: form.documentType,
                documentNumber: form.documentNumber,
                teamId: form.teamId,
            };
            await apiSignUpService(payload);

            navigate(ROUTES.VERIFY_CODE_SIGNUP, {
                replace: true,
                state: { email: form.email, from: ROUTES.SIGNUP },
            });
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <MotionContainer>
            {(step === 0 && !isExternalSignup) &&
                <AuthHeader
                    title="¡Únete ahora!"
                    description="Regístrate y empieza a jugar"
                    titleWidth={237}
                    withProviders={!isExternalSignup}
                />
            }

            <FormProvider {...methods}>
                {!isExternalSignup ?
                    <SignUpForm
                        step={step}
                        nextStep={handleNextStep}
                        previousStep={previousStep}
                        handleSubmit={methods.handleSubmit(onSubmit)}
                    />
                    :
                    <SignUpProviderForm
                        step={step}
                        nextStep={handleNextStep}
                        previousStep={previousStep}
                        handleSubmit={methods.handleSubmit(onSubmit)}
                    />
                }
            </FormProvider>
        </MotionContainer>
    )
}

export default SignUpPage