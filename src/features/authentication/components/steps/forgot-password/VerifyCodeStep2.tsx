import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import { useCodeInputs } from "@features/authentication/hooks/useCodeInputs";
import { useResetPasswordActionsServices } from "@features/authentication/services/useResetPasswordActionsServices";
import type { TFormVerifyCode } from "@features/authentication/types/form-reset-password.types";
import { showCodeFieldErrors } from "@features/authentication/utils/show-code-field-errors";
import MotionContainer from "@global/containers/MotionContainer";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { ROUTES } from "@navigation/routes/routes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconLetter from "@global/assets/icons/shared/letter.svg";
import ErrorAlert from "@global/components/alerts/ErrorAlert";
import InputField from "@global/components/forms/InputField";
import { verifyCodeValidations } from "@features/authentication/validations/forgot-password/verify-code.validations";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import { setSession } from "@app/slices/session/session.slice";

interface Props {
    goBack: () => void;
    email: string;
}

const VerifyCodeStep2 = ({ goBack, email }: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleError = useHandlerError();

    const { verifyCodeService, resendRecoveryCodeService } = useResetPasswordActionsServices();

    const { register, setValue, handleSubmit, setError, clearErrors, formState: { errors } } = useForm<TFormVerifyCode>({
        defaultValues: { code: ["", "", "", "", ""] },
        shouldFocusError: false,
        mode: "onChange",
    });

    const { handlePaste, handleChange, handleKeyDown } = useCodeInputs({ setValue });

    const onSubmit = async (form: TFormVerifyCode) => {
        dispatch(activeGlobalLoading({ message: "Validando código..." }));
        try {
            const payload = { code: form.code.join(""), email };
            const { token } = await verifyCodeService(payload);;
            if (!token) {
                setError("code", { type: "invalid-code" });
                showCodeFieldErrors(setError);
                return;
            } else {
                dispatch(setSession({ token, user: null }));
                navigate(ROUTES.RESET_PASSWORD);
            }
        } catch (error) {
            handleError(error);
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTMwOTBmOGU4ZjUyMjQzZTAzZGMwOWEiLCJ1c2VybmFtZSI6IlBBT0xBIiwiZW1haWwiOiJQQU9MQUBnbWFpbC5jb20iLCJpYXQiOjE3NjQ4MDMzOTUsImV4cCI6MTc2NDg4OTc5NX0.Uxw4fB1bNdMirPXmihcMqdM-Aesvv0MGGnXDitM3q3Q"
            dispatch(setSession({ token, user: null }));
            navigate(ROUTES.RESET_PASSWORD);
        } finally {
            dispatch(disableGlobalLoading());
        }
    };

    const handleResendCode = async () => {
        dispatch(activeGlobalLoading({ message: "Reenviando el código..." }));
        try {
            const payload = { email };
            await resendRecoveryCodeService(payload);
        } catch (error) {
            handleError(error);
        } finally {
            dispatch(disableGlobalLoading());
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
                    {
                        errors.code?.type === "invalid-code" && (
                            <ErrorAlert
                                title="Código inválido"
                                message="Vuelve a intentarlo."
                            />
                        )
                    }

                    <div className="flex items-center font-body-normal-regular">Código</div>
                    <div className="grid grid-cols-6 gap-2 w-full">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <InputField
                                key={i}
                                id={`code-${i}`}
                                type="text"
                                maxLength={1}
                                placeholder="0"
                                error={errors.code?.[i] ? { type: "manual", message: " " } : undefined}
                                className="text-center"
                                {...register(`code.${i}`, verifyCodeValidations.code)}
                                onChange={(e) => { clearErrors("code"); handleChange(i, e) }}
                                onKeyDown={(e) => handleKeyDown(i, e)}
                                onPaste={i === 0 ? handlePaste : undefined}
                            />
                        ))}
                    </div>
                    {errors.code?.[0]?.message?.trim() && <p className="font-body-small-regular text-red-500">
                        {errors.code[0].message}
                    </p>}
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex gap-4 mb-2">
                        <FantasyButton
                            type="button"
                            variant="secondary"
                            size="lg"
                            onClick={goBack}
                            className="h-auto w-full">
                            Volver al inicio
                        </FantasyButton>
                        <FantasyButton
                            type="submit"
                            variant="primary"
                            size="lg"
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

export default VerifyCodeStep2