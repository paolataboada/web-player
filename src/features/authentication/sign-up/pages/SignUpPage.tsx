import MotionContainer from "../../../../global/containers/MotionContainer";
import HeaderAuth from "../../shared/components/headers/HeaderAuth";
import ChooseTeam from "../components/steps/choose-team/ChooseTeam";
import CreateAccount from "../components/steps/create-account/CreateAccount";
import CustomAccount from "../components/steps/custom-account/CustomAccount";
import StepIndicator from "../components/steps/StepIndicator";

const SignUpPage = () => {
    return (
        <MotionContainer>
            <div className="min-h-screen text-neutral-50 flex flex-col items-center bg-linear-to-b from-brand-secondary-500 via-brand-secondary-700 to-neutral-900">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-full max-w-md">
                        <HeaderAuth title="¡Únete ahora!" description="Regístrate y empieza a jugar" titleWidth={237} />

                        <StepIndicator />

                        {/* Step 1 */}
                        <CreateAccount />

                        <br /> <br />

                        {/* Step 2 */}
                        <CustomAccount />

                        <br /> <br />

                        {/* Step 3 */}
                        <ChooseTeam />
                    </div>
                </div>
            </div>
        </MotionContainer>
    )
}

export default SignUpPage