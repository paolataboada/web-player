import { useNavigate } from "react-router-dom";
import MotionContainer from "../../../../global/containers/MotionContainer";
import AuthHeader from "../../shared/components/headers/AuthHeader";
import { AuthLinkText } from "../../shared/components/texts/AuthLinkText";
import { ROUTES } from "../../../../navigation/routes/routes";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useForm } from "react-hook-form";
import { validationsLogin } from "../validations/login.validations";
import { AuthPasswordInput } from "@features/authentication/shared/components/inputs/AuthPasswordInput";
import { useTokenAuthRedirect } from "../../shared/hooks/useTokenAuthRedirect";
import { useLoginActionsServices } from "../services/useLoginActionsServices";
import type { TFormLogin } from "../types/form-login.types";

const LoginPage = () => {
    useTokenAuthRedirect();
    const navigate = useNavigate();
    const handleError = useHandlerError();
    const { apiLoginService } = useLoginActionsServices();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<TFormLogin>();

    const handleLogin = async (form: TFormLogin) => {
        try {
            const payload = {
                identifier: form.identifier.trim(),
                password: form.password.trim(),
            };
            await apiLoginService(payload);

            navigate(ROUTES.HOME);
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <MotionContainer>
            <AuthHeader title="¡Hey, ya estás aquí!" description="Conéctate y arma tu liga ganadora" titleWidth={192} />

            <form onSubmit={handleSubmit(handleLogin)} className="grid gap-6">
                <AuthInput
                    label="Username o Correo electrónico"
                    placeholder="Username o correo electrónico"
                    error={errors.identifier?.message}
                    {...register("identifier", validationsLogin.identifier)}
                />

                <AuthPasswordInput
                    label="Contraseña"
                    placeholder="Contraseña"
                    error={errors.password?.message}
                    register={register("password", validationsLogin.password)}
                />

                <AuthLinkText
                    linkText="¿Olvidaste tu contraseña?"
                    onClick={() => navigate(ROUTES.RESET_PASSWORD)}
                    className="text-end"
                />

                <FantasyButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={!isValid}
                    className="mt-4 mb-2">
                    Iniciar Sesión
                </FantasyButton>
            </form>

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
