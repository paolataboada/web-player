import MotionContainer from "../../../../global/containers/MotionContainer";
import ChooseTeam from "../components/steps/choose-team/ChooseTeam";
import CreateAccount from "../components/steps/create-account/CreateAccount";
import CustomAccount from "../components/steps/custom-account/CustomAccount";
import StepIndicator from "../components/steps/StepIndicator";
import AuthHeader from "../../shared/components/headers/AuthHeader";
import { SIGN_UP_STEPS } from "../constants/sign-up-steps";
import { useSignUpSteps } from "../hooks/useSignUpSteps";
import { AnimatePresence } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import type { TFormSignUp } from "../types/form-sign-up.types";
import { useNavigate } from "react-router-dom";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { ROUTES } from "@navigation/routes/routes";
import { useSignUpStepValidation } from "../hooks/useSignUpStepValidation";
import { useSignUpActions } from "../services/useSignUpActions";
import { useTokenAuthRedirect } from "@features/authentication/shared/hooks/useTokenAuthRedirect";

const SignUpPage = () => {
    useTokenAuthRedirect();
    const navigate = useNavigate();
    const handleError = useHandlerError();
    const { apiSignUpService } = useSignUpActions();

    const methods = useForm<TFormSignUp>({ mode: "onChange" });

    const { step, nextStep, previousStep } = useSignUpSteps(SIGN_UP_STEPS);
    const { handleNextStep } = useSignUpStepValidation(step, methods, nextStep);

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

            navigate(ROUTES.VERIFY_CODE, {
                replace: true,
                state: { email: form.email, from: ROUTES.SIGNUP },
            });
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <MotionContainer>
            <AuthHeader title="¡Únete ahora!" description="Regístrate y empieza a jugar" titleWidth={237} />

            <StepIndicator title="Crea tu cuenta" currentStep={step} steps={SIGN_UP_STEPS} />

            <AnimatePresence mode="wait">
                <FormProvider {...methods}>
                    {/* Step 1 */}
                    {step === 0 && <CreateAccount nextStep={handleNextStep} />}

                    {/* Step 2 */}
                    {step === 1 && <CustomAccount nextStep={handleNextStep} previousStep={previousStep} />}

                    {/* Step 3 */}
                    {step === 2 && <ChooseTeam previousStep={previousStep} handleSubmit={methods.handleSubmit(onSubmit)} />}
                </FormProvider>
            </AnimatePresence>
        </MotionContainer>
    )
}

export default SignUpPage