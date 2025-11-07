import { useForm } from "react-hook-form";
import IconKey from "@global/assets/icons/shared/key.svg";
import MotionContainer from "@global/containers/MotionContainer";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { AuthPasswordInput } from "@features/authentication/shared/components/inputs/AuthPasswordInput";
import { PasswordStrength } from "@features/authentication/shared/components/passwords/PasswordStrength";
import { usePasswordValidation } from "@features/authentication/shared/hooks/usePasswordValidation";
import { getPasswordValidations } from "@features/authentication/shared/validations/password.validations";
import type { TFormResetPassword } from "@features/authentication/reset-password/types/form-reset-password.types";
import { useResetPasswordActionsServices } from "@features/authentication/reset-password/services/useResetPasswordActionsServices";

interface Props {
    nextStep: () => void;
    resetSteps: () => void;
}

const CreateNewPasswordStep3 = ({ nextStep, resetSteps }: Props) => {
    const handleError = useHandlerError();

    const { resetPasswordService } = useResetPasswordActionsServices();

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<TFormResetPassword>({
        mode: "onChange"
    });

    const password = watch("newPassword")?.trim() ?? "";
    const { rules, getBarColor, getProgressWidth } = usePasswordValidation(password);
    const resetPasswordValidations = getPasswordValidations(password);

    const onSubmit = async (form: TFormResetPassword) => {
        try {
            const payload = {
                newPassword: form.newPassword,
                confirmPassword: form.confirmPassword,
            };
            await resetPasswordService(payload);

            nextStep();
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <MotionContainer className="grid">
            <img src={IconKey} alt="Key Icon" className="w-16 h-16 mx-auto mb-3 md:w-20 md:h-20" />
            <h2 className="text-center mb-2.5">
                Nueva contraseña
            </h2>

            <p className="font-body-normal-regular text-center text-neutral-200 mb-10">
                Crea una nueva contraseña y recupera tu acceso
                <br />
                para seguir compitiendo
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10">
                <div className="grid gap-4">
                    <AuthPasswordInput
                        label="Contraseña"
                        placeholder="Contraseña"
                        autoComplete="new-password"
                        error={errors.newPassword?.message}
                        register={register("newPassword", resetPasswordValidations.password)}
                    />
                    <PasswordStrength
                        rules={rules}
                        getBarColor={getBarColor}
                        getProgressWidth={getProgressWidth}
                    />
                </div>

                <AuthPasswordInput
                    label="Confirmar Nueva Contraseña"
                    placeholder="Confirmar Nueva Contraseña"
                    error={errors.confirmPassword?.message}
                    register={register("confirmPassword", resetPasswordValidations.confirmPassword)}
                />

                <div className="flex gap-4 mb-2">
                    <FantasyButton
                        type="button"
                        variant="secondary"
                        size="lg"
                        onClick={resetSteps}
                        className="h-auto w-full">
                        Volver al inicio
                    </FantasyButton>
                    <FantasyButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={!isValid}
                        className="h-auto w-full px-2.5!">
                        Guardar
                    </FantasyButton>
                </div>
            </form>
        </MotionContainer>
    );
}

export default CreateNewPasswordStep3