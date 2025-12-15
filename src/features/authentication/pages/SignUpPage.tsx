import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useSignUpActionsServices } from "../services/useSignUpActionsServices";
import { useState } from "react";
import { type IUserEntity } from "@entities/user/types";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import MotionContainer from "@global/containers/MotionContainer";
import AuthHeader from "../shared/components/headers/AuthHeader";
import StepIndicator from "../components/steps/sign-up/StepIndicator";
import CreateAccountStep1 from "../components/steps/sign-up/CreateAccountStep1";
import CustomAccountStep2 from "../components/steps/sign-up/CustomAccountStep2";
import ChooseTeamStep3 from "../components/steps/sign-up/ChooseTeamStep3";
import { useStepsControl } from "../hooks/useSignUpSteps";
import { SIGN_UP_STEPS } from "../constants/sign-up-steps";
import { setSession } from "@app/slices/session/session.slice";
import { useNavigate } from "react-router-dom";
import { BUSINESS_ERROR_MAPPING } from "@documentation/mapping/error.mapping";
import type { BusinessECSignUp } from "@documentation/code/business.error.code";
import ErrorAlert from "@global/components/alerts/ErrorAlert";

export type ISignUpPayload = Pick<
    IUserEntity,
    "username" | "password" | "firstName" | "lastName" | "email" | "birthDate" | "teamId"
>;

export type ISignUpData = ISignUpPayload & {
    confirmPassword: string;
    acceptDeclaration: boolean;
    acceptInformation: boolean;
    acceptTerms: boolean;
}

const initialSignUpData: ISignUpData = {
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    username: "",
    password: "",
    teamId: "",
    confirmPassword: "",
    acceptDeclaration: false,
    acceptInformation: false,
    acceptTerms: false,
};

const SignUpPage = () => {
    const handleError = useHandlerError();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { apiSignUpService } = useSignUpActionsServices();

    const [signUpData, setSignUpData] = useState<ISignUpData>(initialSignUpData);
    const [error, setError] = useState<string>();

    const { step, nextStep, previousStep } = useStepsControl(3);

    const onSubmit = async (extra?: Partial<ISignUpData>) => {
        dispatch(activeGlobalLoading({ message: "Registrando usuario..." }));
        try {
            const data = { ...signUpData, ...extra };
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { confirmPassword, acceptDeclaration, acceptInformation, acceptTerms, ...payload } = data;
            const { token } = await apiSignUpService(payload);
            dispatch(setSession({ token, user: null }));
            navigate("/");
        } catch (error: any) {
            const businessError = BUSINESS_ERROR_MAPPING.SIGNUP[error?.code as BusinessECSignUp];
            if (businessError) {
                setError(businessError.message);
                return;
            }
            handleError(error);
        } finally {
            dispatch(disableGlobalLoading());
        }
    };

    return (
        <MotionContainer>
            {
                /* Show header only in the first step */
                step === 0 &&
                <AuthHeader
                    title="¡Únete ahora!"
                    subtitle="Regístrate y empieza a jugar"
                />
            }

            <StepIndicator
                title="Crea tu cuenta"
                currentStep={step}
                steps={SIGN_UP_STEPS}
            />

            {error && <ErrorAlert message={error} />}

            {
                /* Step 1 */
                step === 0 &&
                <CreateAccountStep1
                    signUpData={signUpData}
                    nextStep={nextStep}
                    setSignUpData={setSignUpData}
                />
            }

            {
                /* Step 2 */
                step === 1 &&
                <CustomAccountStep2
                    signUpData={signUpData}
                    nextStep={nextStep}
                    previousStep={previousStep}
                    setSignUpData={setSignUpData}
                />
            }

            {
                /* Step 3 */
                step === 2 &&
                <ChooseTeamStep3
                    previousStep={previousStep}
                    handleSubmit={onSubmit}
                    setSignUpData={setSignUpData}
                />
            }
        </MotionContainer>
    )
}

export default SignUpPage