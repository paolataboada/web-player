
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

export type ISignUpData = Pick<
    IUserEntity,
    "username" | "password" | "firstName" | "lastName" | "email" | "birthDate" | "teamId"
>

const initialSignUpData: ISignUpData = {
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    username: "",
    password: "",
    teamId: ""
};

const SignUpPage = () => {
    const handleError = useHandlerError();
    const dispatch = useDispatch();
    const { apiSignUpService } = useSignUpActionsServices();

    const [signUpData, setSignUpData] = useState<ISignUpData>(initialSignUpData);

    const { step, nextStep, previousStep } = useStepsControl(3);

    const onSubmit = async () => {
        dispatch(activeGlobalLoading({ message: "Registrando usuario..." }));
        try {
            await apiSignUpService(signUpData)
        } catch (error) {
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
                    description="Regístrate y empieza a jugar"
                    titleWidth={237}
                />
            }

            <StepIndicator
                title="Crea tu cuenta"
                currentStep={step}
                steps={SIGN_UP_STEPS}
            />

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