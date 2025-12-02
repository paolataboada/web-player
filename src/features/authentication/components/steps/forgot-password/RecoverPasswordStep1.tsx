import { useForm } from "react-hook-form";
import IconLock from "@global/assets/icons/shared/lock.svg";
import MotionContainer from "@global/containers/MotionContainer";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import type { TFormRecoverPassword } from "@features/authentication/types/form-reset-password.types";
import { step1SignUpValidations } from "@features/authentication/validations/sign-up/step-1-sign-up.validations";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import { useSignUpActionsServices } from "@features/authentication/services/useSignUpActionsServices";
import ErrorAlert from "@global/components/alerts/ErrorAlert";

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
            handleError(error);
        } finally {
            dispatch(disableGlobalLoading());
        }
    };

    return (
        <MotionContainer>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 mb-20">
                <div className="grid place-content-center gap-3">
                    <img src={IconLock} className="w-12 h-12 mx-auto" />
                    <div className="grid gap-2.5 max-w-[332px]">
                        <h2 className="text-center text-neutral-50">Ups, ¿No recuerdas tu contraseña?</h2>
                        <p className="font-body-normal-regular text-neutral-200 text-center">
                            Ingresa tu correo y te enviaremos un código <br className="hidden sm:flex" /> para crear una nueva.
                        </p>
                    </div>
                </div>

                {
                    errors.email?.type === "email-not-found" && (
                        <ErrorAlert
                            title="No encontramos tu cuenta"
                            message="Revisa tu correo o crea una nueva cuenta."
                        />
                    )
                }

                <AuthInput
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