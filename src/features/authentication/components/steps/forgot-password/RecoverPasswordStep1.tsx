import { useForm } from "react-hook-form";
import IconLock from "@global/assets/icons/shared/lock.svg";
import MotionContainer from "@global/containers/MotionContainer";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import InputField from "@global/components/forms/InputField";
import type { TFormRecoverPassword } from "@features/authentication/types/form-reset-password.types";
import { step1SignUpValidations } from "@features/authentication/validations/sign-up/step-1-sign-up.validations";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import { useSignUpActionsServices } from "@features/authentication/services/useSignUpActionsServices";
import ErrorAlert from "@global/components/alerts/ErrorAlert";
import HeaderForm from "@features/authentication/shared/components/headers/HeaderForm";
import { BUSINESS_ERROR_MAPPING } from "src/documentation/mapping/error.mapping";

interface Props {
    goBack: () => void;
    nextStep: () => void;
    setEmail: (state: string) => void;
}

const RecoverPasswordStep1 = ({ goBack, nextStep, setEmail }: Props) => {
    const dispatch = useDispatch();
    const handleError = useHandlerError();

    const { validateEmailService } = useSignUpActionsServices();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<TFormRecoverPassword>({ mode: "onChange" });

    const onSubmit = async (form: TFormRecoverPassword) => {
        try {
            dispatch(activeGlobalLoading({ message: "Verificando correo electrónico..." }));
            const email = form.email.trim();
            const { exists } = await validateEmailService(email);
            if (!exists) {
                setError("email", { type: "email-not-found" });
                return;
            }
            setEmail(email);
            nextStep();
        } catch (error) {
            const businessError = BUSINESS_ERROR_MAPPING[error?.code];
            if (businessError) {
                setError("email", { type: businessError.message });
                return;
            }
            handleError(error);
        } finally {
            dispatch(disableGlobalLoading());
        }
    };

    return (
        <MotionContainer>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 my-10">
                <HeaderForm
                    title="Ups, ¿No recuerdas tu contraseña?"
                    subtitle="Ingresa tu correo y te enviaremos un código para crear una nueva."
                    icon={IconLock}
                />

                {
                    errors.email?.type === "email-not-found" && (
                        <ErrorAlert
                            title="No encontramos tu cuenta"
                            message="Revisa tu correo o crea una nueva cuenta."
                        />
                    )
                }

                <InputField
                    label="Correo electrónico"
                    placeholder="Ingresa tu correo electrónico"
                    error={errors.email}
                    {...register("email", step1SignUpValidations.email)}
                />

                <div className="flex justify-between gap-4 mt-4">
                    <FantasyButton
                        type="button"
                        variant="secondary"
                        size="lg"
                        onClick={goBack}
                        className="w-full h-auto">
                        Volver al inicio
                    </FantasyButton>
                    <FantasyButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full h-auto">
                        Enviar código
                    </FantasyButton>
                </div>
            </form>
        </MotionContainer>
    )
}

export default RecoverPasswordStep1