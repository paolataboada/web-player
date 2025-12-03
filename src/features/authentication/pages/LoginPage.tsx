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
import { useDispatch, useSelector } from "react-redux";
import { type IRootState } from "@app/store";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import ErrorAlert from "@global/components/alerts/ErrorAlert";

type TFormLogin = { identifier: string; password: string; }

const LoginPage = () => {
    const loading = useSelector((state: IRootState) => state.globalLoading.active);

    const { apiLoginService } = useLoginActionsServices();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleError = useHandlerError();
    const handleAuthError = useHandleAuthError();

    const { handleSubmit, register, setError, formState: { errors } } = useForm<TFormLogin>();

    const onSubmit = async (form: TFormLogin) => {
        dispatch(activeGlobalLoading({ message: "Validando credenciales..." }));
        try {
            const payload = {
                identifier: form.identifier.trim(),
                password: form.password.trim(),
            };
            const { exists } = await apiLoginService(payload);
            if (!exists) {
                setError("identifier", { type: "incorrect-identifier" });
                setError("password", { type: "incorrect-password" });
                return;
            }

            navigate(ROUTES.HOME);
        } catch (error) {
            handleAuthError(error); // 422: Unverified
            handleError(error);
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
                            title="¡Ups! Algo no coincide"
                            message="Tu usuario o contraseña son incorrectos. Revise sus datos e inténtelo de otra vez."
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
