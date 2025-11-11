import { useForm } from "react-hook-form";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import MotionContainer from "@global/containers/MotionContainer";
import FantasyButton from "@global/components/buttons/FantasyButton";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import { useCodeInputs } from "@features/authentication/reset-password/hooks/useCodeInputs";
import { useResetPasswordActionsServices } from "@features/authentication/reset-password/services/useResetPasswordActionsServices";
import type { TFormVerifyCode } from "@features/authentication/reset-password/types/form-reset-password.types";
import { showCodeFieldErrors } from "@features/authentication/reset-password/utils/show-code-field-errors";
import { verifyCodeValidations } from "@features/authentication/reset-password/validations/verify-code.validations";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import IconLetter from "@global/assets/icons/shared/letter.svg";
import type { TReqVerifyCode } from "@features/authentication/reset-password/services/types/api-reset-password.types";

interface Props {
    nextStep: () => void;
    resetSteps: () => void;
    service: (values: TReqVerifyCode) => Promise<void>;
    email: string;
}

const VerifyCodeStep = ({ nextStep, resetSteps, service, email }: Props) => {
    const handleError = useHandlerError();

    const { resendRecoveryCodeService } = useResetPasswordActionsServices();

    const { register, setValue, handleSubmit, watch, setError, clearErrors, formState: { errors } } = useForm<TFormVerifyCode>({
        defaultValues: { code: ["", "", "", "", ""] },
        shouldFocusError: false,
        mode: "onChange",
    });

    const { handlePaste, handleChange, handleKeyDown } = useCodeInputs({ setValue });

    const onSubmit = async (form: TFormVerifyCode) => {
        try {
            const payload = { code: form.code.join(""), email };
            await service(payload);

            nextStep();
        } catch (error) {
            handleError(error);
            showCodeFieldErrors(setError);
        }
    };

    const handleResendCode = async () => {
        try {
            const payload = { email };
            await resendRecoveryCodeService(payload);
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <MotionContainer>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10">
                <div className="flex flex-col justify-between items-center">
                    <img src={IconLetter} className="w-12 h-12 text-neutral-50 mb-3" />
                    <div className="text-box flex flex-col justify-between">
                        <h2 className="text-center text-neutral-50 mb-2.5">Verifica tu acceso</h2>
                        <p className="font-body-normal-regular text-neutral-200 text-center">
                            Escribe el código de 6 digitos que llegó a tu correo
                            <br />
                            <span className="font-body-normal-medium text-neutral-50">
                                ({email})
                            </span>
                        </p>
                    </div>
                </div>
                <div className="grid gap-1.5">
                    <div className="flex items-center font-body-normal-regular">Código</div>
                    <div className="grid grid-cols-6 gap-2 w-full">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <AuthInput
                                key={i}
                                id={`code-${i}`}
                                type="text"
                                maxLength={1}
                                placeholder="0"
                                error={errors.code?.[i]?.message ? " " : undefined}
                                className="text-center"
                                {...register(`code.${i}`, verifyCodeValidations.code)}
                                onChange={(e) => { clearErrors("code"); handleChange(i, e) }}
                                onKeyDown={(e) => handleKeyDown(i, e)}
                                onPaste={i === 0 ? handlePaste : undefined}
                            />
                        ))}
                    </div>
                    {errors.code?.[0]?.message?.trim() && <p className="font-body-small-regular text-red-500 -mt-2">{errors.code[0].message}</p>}
                </div>
                <div className="flex flex-col justify-between">
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
                            disabled={!watch("code").every((c) => c.trim() !== "")}
                            className="h-auto w-full px-2.5!">
                            Confirmar código
                        </FantasyButton>
                    </div>
                    <AuthLinkText
                        text="¿No recibiste el código?"
                        linkText="Reenviar código"
                        onClick={handleResendCode}
                        className="py-[18px] px-4"
                    />
                </div>
            </form>
        </MotionContainer>
    )
}

export default VerifyCodeStep