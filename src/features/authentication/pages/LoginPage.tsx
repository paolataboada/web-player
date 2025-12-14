import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ROUTES } from "../../../navigation/routes/routes";
import { useLoginActionsServices } from "../services/useLoginActionsServices";
import MotionContainer from "@global/containers/MotionContainer";
import InputField from "@global/components/forms/InputField";
import { PasswordInputField } from "@global/components/forms/PasswordInputField";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { validationsLogin } from "../validations/login/login.validations";
import AuthHeader from "@features/authentication/shared/components/headers/AuthHeader";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import ErrorAlert from "@global/components/alerts/ErrorAlert";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { BUSINESS_ERROR_MAPPING } from "@documentation/mapping/error.mapping";
import { setSession } from "@app/slices/session/session.slice";

type TFormLogin = { emailOrUsername: string; password: string; }

const LoginPage = () => {
    const { apiLoginService } = useLoginActionsServices();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleError = useHandlerError();

    const { handleSubmit, register, setError, formState: { errors } } = useForm<TFormLogin>();

    const onSubmit = async (form: TFormLogin) => {
        dispatch(activeGlobalLoading({ message: "Validando credenciales..." }));
        try {
            const { token } = await apiLoginService(form);
            dispatch(setSession({ token, user: null }));
            navigate(ROUTES.HOME);
        } catch (error) {
            const businessError = BUSINESS_ERROR_MAPPING[error?.code];
            if (businessError) {
                setError("emailOrUsername", { type: "login", message: businessError.message });
                return;
            }
            handleError(error);
        } finally {
            dispatch(disableGlobalLoading());
        };
    };

    return (
        <MotionContainer>
            <AuthHeader title="¡Hey, ya estás aquí!" subtitle="Conéctate y arma tu liga ganadora" />

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                {
                    (errors.emailOrUsername?.type === "login" && errors.emailOrUsername?.message) &&
                    <ErrorAlert message={errors.emailOrUsername?.message} />
                }

                <InputField
                    label="Username o Correo electrónico"
                    placeholder="Username o correo electrónico"
                    error={errors.emailOrUsername}
                    {...register("emailOrUsername", validationsLogin.identifier)}
                />

                <PasswordInputField
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
