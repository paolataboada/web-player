import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@navigation/routes/routes";
import MotionContainer from "@global/containers/MotionContainer";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { AuthPasswordInput } from "@features/authentication/shared/components/inputs/AuthPasswordInput";
import { useResetPasswordActionsServices } from "@features/authentication/services/useResetPasswordActionsServices";
import { getPasswordValidations } from "@features/authentication/shared/validations/password.validations";
import type { TFormResetPassword } from "@features/authentication/types/form-reset-password.types";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleError = useHandlerError();

  const { resetPasswordService } = useResetPasswordActionsServices();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<TFormResetPassword>({ mode: "onChange" });

  const password = watch("newPassword")?.trim() ?? "";
  const resetPasswordValidations = getPasswordValidations(password);

  const onSubmit = async (form: TFormResetPassword) => {
    try {
      dispatch(activeGlobalLoading({ message: "Guardando cambios..." }));
      await resetPasswordService(form);
      navigate(ROUTES.LOGIN);
    } catch (error) {
      handleError(error);
    } finally {
      dispatch(disableGlobalLoading());
    }
  };

  return (
    <MotionContainer className="grid py-6 px-4 max-w-[426px] mx-auto">
      <img
        src="/logos/fantasy-logotipo-white.svg"
        alt="FFantasy Logo"
        className="h-6 w-[114px] mx-auto mb-10"
      />

      <h3 className="text-center mb-2.5">
        Establece una nueva Contraseña
      </h3>

      <p className="font-body-normal-regular text-center text-neutral-200 mb-10">
        Crea una nueva contraseña y recupera tu acceso
        <br />
        para seguir compitiendo
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        <AuthPasswordInput
          label="Contraseña"
          placeholder="Contraseña"
          autoComplete="new-password"
          error={errors.newPassword}
          register={register("newPassword", resetPasswordValidations.password)}
        />
        <AuthPasswordInput
          label="Confirmar Contraseña"
          placeholder="Confirmar Nueva Contraseña"
          error={errors.confirmPassword}
          register={register("confirmPassword", resetPasswordValidations.confirmPassword)}
        />

        <FantasyButton
          type="submit"
          variant="primary"
          size="lg"
          className="h-auto w-full px-2.5!">
          Guardar cambios
        </FantasyButton>
      </form>
    </MotionContainer>
  )
}

export default ResetPasswordPage