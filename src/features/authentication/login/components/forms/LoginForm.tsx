import { useState } from "react";
import IconOpenEye from "../../../../../global/components/icons/IconOpenEye";
import IconCloseEye from "../../../../../global/components/icons/IconCloseEye";
import { AuthLinkText } from "../../../shared/components/texts/AuthLinkText";
import { ROUTES } from "../../../../../navigation/routes/routes";
import { useNavigate } from "react-router-dom";
import FantasyButton from "../../../../../global/components/buttons/FantasyButton";
import AuthInput from "../../../shared/components/inputs/AuthInput";
import { apiLoginService } from "../../services/api-login.service";
import { useDispatch } from "react-redux";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useForm } from "react-hook-form";
import { validationsLogin } from "../../validations/login.validations";

type TFormLogin = {
    identifier: string;
    password: string;
}

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleError = useHandlerError();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<TFormLogin>();

    const handleLogin = async (form: TFormLogin) => {
        try {
            const payload = {
                identifier: form.identifier.trim(),
                password: form.password.trim(),
            };
            await apiLoginService(dispatch, payload);

            navigate(ROUTES.HOME);
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)} className="grid gap-6">
            <AuthInput
                label="Username o Correo electrónico"
                placeholder="Username o correo electrónico"
                error={errors.identifier?.message}
                {...register("identifier", validationsLogin.identifier)}
            />

            <AuthInput
                type={showPassword ? "text" : "password"}
                label="Contraseña"
                placeholder="Contraseña"
                icon={
                    <div
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute bottom-0 right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                        {showPassword ? <IconOpenEye color="white" size={24} /> : <IconCloseEye color="white" size={24} />}
                    </div>
                }
                error={errors.password?.message}
                {...register("password", validationsLogin.password)}
                className="pr-10"
            />

            <AuthLinkText
                linkText="¿Olvidaste tu contraseña?"
                onClick={() => navigate(ROUTES.RECOVER_PASSWORD)}
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
    );
};

export default LoginForm;