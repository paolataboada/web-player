import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ROUTES } from "../../../navigation/routes/routes";
import { useLoginActionsServices } from "../services/useLoginActionsServices";
import MotionContainer from "@global/containers/MotionContainer";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import { AuthPasswordInput } from "@features/authentication/shared/components/inputs/AuthPasswordInput";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { validationsLogin } from "../validations/login/login.validations";
import AuthHeader from "@features/authentication/shared/components/headers/AuthHeader";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import ErrorAlert from "@global/components/alerts/ErrorAlert";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { setSession } from "@app/slices/session/session.slice";

type TFormLogin = { identifier: string; password: string; }

const LoginPage = () => {
    const { apiLoginService } = useLoginActionsServices();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleError = useHandlerError();

    const { handleSubmit, register, setError, formState: { errors } } = useForm<TFormLogin>();

    const onSubmit = async (form: TFormLogin) => {
        dispatch(activeGlobalLoading({ message: "Validando credenciales..." }));
        try {
            const payload = {
                identifier: form.identifier.trim(),
                password: form.password.trim(),
            };
            const { token } = await apiLoginService(payload);
            if (token) {
                setSession({ token, user: null });
            }
            navigate(ROUTES.HOME);
        } catch (error: any) {
            const status = error.response.data.statusCode;
            if (status === 401 || status === 404) {
                setError("identifier", { type: "incorrect-identifier" });
                setError("password", { type: "incorrect-password" });
            } else {
                handleError(error);
            }
        } finally {
            dispatch(disableGlobalLoading());
        };
    };

    return (
        <MotionContainer>
            <AuthHeader title="¡Hey, ya estás aquí!" description="Conéctate y arma tu liga ganadora" titleWidth={192} />

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                {
                    errors.identifier?.type === "incorrect-identifier" && errors.password?.type === "incorrect-password" && (
                        <ErrorAlert
                            title="Credenciales incorrectas"
                            message="Intenta de nuevo"
                        />
                    )
                }

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
                    onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
                    className="text-end"
                />

                <FantasyButton
                    type="submit"
                    variant="primary"
                    size="lg"
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
