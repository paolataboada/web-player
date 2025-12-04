import { useForm } from "react-hook-form";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import MotionContainer from "@global/containers/MotionContainer";
import FantasyButton from "@global/components/buttons/FantasyButton";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import { useCodeInputs } from "@features/authentication/hooks/useCodeInputs";
import { showCodeFieldErrors } from "@features/authentication/utils/show-code-field-errors";
import { verifyCodeValidations } from "@features/authentication/validations/forgot-password/verify-code.validations";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";
import { useState } from "react";
import type { TFormVerifyCode } from "@features/authentication/types/form-reset-password.types";
const VerifyEmailPage = () => {
   const [loading, setLoading] = useState<{ sendCode?: boolean; resendCode?: boolean; }>({ sendCode: false, resendCode: false });

   const handleError = useHandlerError();
   //const { verifyCodeService, resendCodeService } = useVerifyEmailActionsServices();

   const { register, setValue, handleSubmit, watch, setError, clearErrors, formState: { errors } } = useForm<TFormVerifyCode>({
      defaultValues: { code: ["", "", "", "", ""] },
      shouldFocusError: false,
      mode: "onChange",
   });

   //const email = localStorage.getItem("email");
   const { handlePaste, handleChange, handleKeyDown } = useCodeInputs({ setValue });

   const onSubmit = async () => {
      setLoading({ sendCode: true });
      try {
         //const payload = { code: form.code.join(""), email };
         //await verifyCodeService(payload);

      } catch (error) {
         handleError(error);
         showCodeFieldErrors(setError);
      } finally {
         setLoading({ sendCode: false });
      }
   };

   const handleResendCode = async () => {
      setLoading({ resendCode: true });
      try {
         //const payload = { email };
         //await resendCodeService(payload);
      } catch (error) {
         handleError(error);
      } finally {
         setLoading({ resendCode: false });
      }
   };

   return (
      <MotionContainer>
         <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10">
            <div className="text-box flex flex-col justify-between">
               <h2 className="text-center text-neutral-50 mb-2.5">Verifica tu acceso</h2>
               <p className="font-body-normal-regular text-neutral-200 text-center">
                  Escribe el código de 6 digitos que llegó a tu correo
                  <br />
                  <span className="font-body-normal-medium text-neutral-50">
                     ""
                  </span>
               </p>
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
                        error={errors.code?.[i] ? { type: "manual", message: " " } : undefined}
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
               <FantasyButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading.sendCode}
                  disabled={!watch("code").every((c) => c.trim() !== "") || loading.resendCode}
                  className="h-auto w-full px-2.5!">
                  Confirmar código
               </FantasyButton>
               <AuthLinkText
                  loading={loading.resendCode}
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

export default VerifyEmailPage