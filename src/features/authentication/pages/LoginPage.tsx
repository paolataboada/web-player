import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ROUTES } from "../../../navigation/routes/routes";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useLoginActionsServices } from "../services/useLoginActionsServices";
import MotionContainer from "@global/containers/MotionContainer";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import { AuthPasswordInput } from "@features/authentication/shared/components/inputs/AuthPasswordInput";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { validationsLogin } from "../validations/login/login.validations";
import AuthHeader from "@features/authentication/shared/components/headers/AuthHeader";
import { useHandleAuthError } from "@global/errors/handlers/handleAuthError";

type TFormLogin = { identifier: string; password: string; }

const LoginPage = () => {
    const [loading, setLoading] = useState(false);

    const { apiLoginService } = useLoginActionsServices();

    const navigate = useNavigate();
    const handleError = useHandlerError();
    const handleAuthError = useHandleAuthError();

    const { handleSubmit, register, formState: { errors } } = useForm<TFormLogin>();

    const onSubmit = async (form: TFormLogin) => {
        setLoading(true);
        try {
            const payload = {
                identifier: form.identifier.trim(),
                password: form.password.trim(),
            };
            await apiLoginService(payload);

            navigate(ROUTES.HOME);
        } catch (error) {
            handleAuthError(error); // 422: Unverified
            handleError(error);
        } finally {
            setLoading(false);
        };
    };

    return (
        <MotionContainer>
            <AuthHeader title="¡Hey, ya estás aquí!" description="Conéctate y arma tu liga ganadora" titleWidth={192} />

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                <AuthInput
                    label="Username o Correo electrónico"
                    placeholder="Username o correo electrónico"
                    error={errors.identifier}
                    {...register("identifier", validationsLogin.identifier)}
                />

                <AuthPasswordInput
                    label="Contraseña"
                    placeholder="Contraseña"
                    error={errors.password}
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
                    loading={loading}
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
