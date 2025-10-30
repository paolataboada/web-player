import MotionContainer from "../../../../global/containers/MotionContainer";
import ChooseTeam from "../components/steps/choose-team/ChooseTeam";
import StepIndicator from "../components/steps/StepIndicator";
import AuthHeader from "../../shared/components/headers/AuthHeader";
import { useSignUpSteps } from "../hooks/useSignUpSteps";
import { AnimatePresence } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import type { TFormSignUpProvider } from "../types/form-sign-up.types";
import { useLocation, useNavigate } from "react-router-dom";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { ROUTES } from "@navigation/routes/routes";
import { useSignUpStepValidation } from "../hooks/useSignUpStepValidation";
import { useSignUpActions } from "../services/useSignUpActions";
import { SIGN_UP_PROVIDER_STEPS } from "../constants/sign-up-steps";
import CreateAccountProvider from "../components/steps/create-account-provider/CreateAccountProvider";

const SignUpProviderPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleError = useHandlerError();
    const { apiSignUpService } = useSignUpActions();

    const methods = useForm<TFormSignUpProvider>({ mode: "onChange" });

    const { step, nextStep, previousStep } = useSignUpSteps(SIGN_UP_PROVIDER_STEPS);
    const { handleNextStep } = useSignUpStepValidation(step, methods, nextStep, "PROVIDER");

    const onSubmit = async (form: TFormSignUpProvider) => {
        try {
            const payload = {
                username: form.username,
                password: "",
                firstName: location.state.firstName,
                lastName: location.state.lastName,
                email: location.state.email,
                birthDate: location.state.birthDate,
                documentType: form.documentType,
                documentNumber: form.documentNumber,
                teamId: form.teamId,
            };
            await apiSignUpService(payload);

            navigate(ROUTES.HOME, {
                replace: true,
                state: { toast: "¡Bienvenido a Fantasy!" },
            });
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <MotionContainer>
            <AuthHeader title="Finaliza tu registro" description="Completa los últimos pasos para empezar a jugar" withProviders={false} />

            <StepIndicator currentStep={step} steps={SIGN_UP_PROVIDER_STEPS} />

            <AnimatePresence mode="wait">
                <FormProvider {...methods}>
                    {/* Step 1 */}
                    {step === 0 && <CreateAccountProvider nextStep={handleNextStep} previousStep={previousStep} />}

                    {/* Step 3 */}
                    {step === 1 && <ChooseTeam previousStep={previousStep} handleSubmit={methods.handleSubmit(onSubmit)} />}
                </FormProvider>
            </AnimatePresence>
        </MotionContainer>
    )
}

export default SignUpProviderPage