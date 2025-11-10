import { useForm } from "react-hook-form";
import IconLock from "@global/assets/icons/shared/lock.svg";
import MotionContainer from "@global/containers/MotionContainer";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import type { TFormRecoverPassword } from "@features/authentication/reset-password/types/form-reset-password.types";
import { useResetPasswordActionsServices } from "@features/authentication/reset-password/services/useResetPasswordActionsServices";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";
import { signUpValidations } from "@features/authentication/sign-up/validations/sign-up.validations";

interface Props {
    nextStep: () => void;
    setEmail: (state: string) => void;
}

const RecoverPasswordStep1 = ({ nextStep, setEmail }: Props) => {
    const navigate = useNavigate();
    const handleError = useHandlerError();

    const { sendRecoveryCodeService } = useResetPasswordActionsServices();

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<TFormRecoverPassword>({ mode: "onChange" });

    const onSubmit = async (form: TFormRecoverPassword) => {
        try {
            const payload = { email: form.email.trim() };
            await sendRecoveryCodeService(payload);

            setEmail(payload.email);
            nextStep();
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <MotionContainer>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10 mb-20">
                <div className="grid place-content-center gap-3">
                    <img src={IconLock} className="w-12 h-12 mx-auto" />
                    <div className="grid gap-2.5 max-w-[332px]">
                        <h2 className="text-center text-neutral-50">Ups, ¿No recuerdas tu contraseña?</h2>
                        <p className="font-body-normal-regular text-neutral-200 text-center">
                            Ingresa tu correo y te enviaremos un código <br className="hidden sm:flex" /> para crear una nueva.
                        </p>
                    </div>
                </div>

                <AuthInput
                    label="Correo electrónico"
                    placeholder="Ingresa tu correo electrónico"
                    error={errors.email?.message}
                    {...register("email", signUpValidations.email)}
                />

                <div className="flex justify-between gap-4">
                    <FantasyButton
                        type="button"
                        variant="secondary"
                        size="lg"
                        onClick={() => navigate(ROUTES.LOGIN)}
                        className="w-full h-auto">
                        Volver al inicio
                    </FantasyButton>
                    <FantasyButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={!isValid || isSubmitting}
                        className="w-full h-auto">
                        Enviar código
                    </FantasyButton>
                </div>
            </form>
        </MotionContainer>
    )
}

export default RecoverPasswordStep1