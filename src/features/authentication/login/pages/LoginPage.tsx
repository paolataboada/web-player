import MotionContainer from "../../../../global/containers/MotionContainer";
import HeaderAuth from "../../shared/components/headers/HeaderAuth";
import LoginForm from "../components/forms/LoginForm";

const LoginPage = () => {
    return (
        <MotionContainer>
            <HeaderAuth />

            <LoginForm />
        </MotionContainer>
    );
};

export default LoginPage;
