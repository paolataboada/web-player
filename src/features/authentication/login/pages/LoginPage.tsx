import { useNavigate } from "react-router-dom";
import MotionContainer from "../../../../global/containers/MotionContainer";
import AuthHeader from "../../shared/components/headers/AuthHeader";
import { AuthLinkText } from "../../shared/components/texts/AuthLinkText";
import LoginForm from "../components/forms/LoginForm";
import { ROUTES } from "../../../../navigation/routes/routes";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <MotionContainer>
            <AuthHeader title="¡Hey, ya estás aquí!" description="Conéctate y arma tu liga ganadora" titleWidth={192} />

            <LoginForm />

            <AuthLinkText
                text="¿Primera vez por aquí?"
                linkText="Crea una cuenta"
                onClick={() => navigate(ROUTES.SIGNUP)}
                className="py-[18px] px-4"
            />
        </MotionContainer>
    );
};

export default LoginPage;
