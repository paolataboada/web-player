import MotionContainer from "../../../../global/components/MotionContainer";
import HeaderAuth from "../../shared/components/headers/HeaderAuth";
import ChooseTeam from "../components/steps/choose-team/ChooseTeam";
import CreateAccount from "../components/steps/create-account/CreateAccount";
import CustomAccount from "../components/steps/custom-account/CustomAccount";
import StepIndicator from "../components/steps/StepIndicator";

const SignUpPage = () => {
    return (
        <MotionContainer>
            <HeaderAuth />

            <StepIndicator />

            {/* Step 1 */}
            <CreateAccount />

            {/* Step 2 */}
            <CustomAccount />

            {/* Step 3 */}
            <ChooseTeam />
        </MotionContainer>
    )
}

export default SignUpPage