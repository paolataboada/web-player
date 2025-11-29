import MotionContainer from "../../../../global/containers/MotionContainer";
import AuthHeader from "../../shared/components/headers/AuthHeader";
import { SIGN_UP_STEPS } from "../constants/sign-up-steps";
import { useSignUpSteps } from "../hooks/useSignUpSteps";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useSignUpActionsServices } from "../services/useSignUpActionsServices";
import { useState } from "react";
import { type IUserEntity } from "@entities/user/types";
import CreateAccountStep1 from "../components/steps/CreateAccountStep1";
import CustomAccountStep2 from "../components/steps/CustomAccountStep2";
import ChooseTeamStep3 from "../components/steps/ChooseTeamStep3";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";

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

    const { step, nextStep, previousStep } = useSignUpSteps(SIGN_UP_STEPS);

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
            <AuthHeader
                title="¡Únete ahora!"
                description="Regístrate y empieza a jugar"
                titleWidth={237}
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