import { useLocation, useNavigate } from "react-router-dom";
import MotionContainer from "../../../../global/containers/MotionContainer";
import AuthHeader from "../../shared/components/headers/AuthHeader";
import { AuthLinkText } from "../../shared/components/texts/AuthLinkText";
import LoginForm from "../components/forms/LoginForm";
import { ROUTES } from "../../../../navigation/routes/routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { setPlayer } from "@app/slices/player/player.slice";
import type { IPlayerJwtPayload } from "../types/api-login.types";

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");

        if (token) {
            try {
                localStorage.setItem("token", token);

                const decoded: IPlayerJwtPayload = jwtDecode(token);
                dispatch(setPlayer(decoded));

                navigate(ROUTES.HOME, { replace: true });
            } catch (err) {
                console.error("Error al decodificar el token:", err);
            }
        }
    }, [location.search, dispatch, navigate]);

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
