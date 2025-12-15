import { useForm } from "react-hook-form";
import { BaseModal } from "./ModalBase";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Password from "@global/assets/icons/profile/newpassword.svg";
import { PasswordInputField } from "@global/components/forms/PasswordInputField";
import { getPasswordValidations } from "@features/authentication/shared/validations/password.validations";
import type { TFormResetPassword } from "@features/authentication/types/form-reset-password.types";

interface ModalChangePasswordProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalChangePassword = ({
  isOpen,
  onClose,
}: ModalChangePasswordProps) => {
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<TFormResetPassword>({
    mode: "onChange"
  });

  const password = watch("newPassword")?.trim() ?? "";
  // const { rules, getBarColor, getProgressWidth } = usePasswordValidation(password);
  const resetPasswordValidations = getPasswordValidations(password);

  const onSubmit = async (form: TFormResetPassword) => {
    try {
      const payload = {
        newPassword: form.newPassword,
        confirmPassword: form.confirmPassword,
      };
      console.log("Cambiar contraseña:", payload);
      
      onClose(); 
    } catch (error) {
      console.error("Error al cambiar contraseña:", error);
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      title="Establece una Nueva Contraseña"
      icon={Password}
      showCloseButton={false}
      onClose={onClose}
    >
      <div className="flex flex-col gap-6 w-full">
        <p className="font-body-normal-regular text-neutral-50 text-center">
          Crea una nueva contraseña y recupera tu acceso para seguir compitiendo.
        </p>

        <form className="space-y-5 w-full" onSubmit={handleSubmit(onSubmit)}>
            <PasswordInputField
              label="Ingresa tu nueva contraseña actual"
              placeholder="Ingresa tu antigua contraseña"
              autoComplete="new-password"
              error={errors.newPassword}
              register={register(
                "newPassword",
                resetPasswordValidations.password
              )}
            />

          <PasswordInputField
            label="Crea nueva contraseña"
            placeholder="Crea nueva contraseña"
            error={errors.confirmPassword}
            register={register(
              "confirmPassword",
              resetPasswordValidations.confirmPassword
            )}
          />

          <PasswordInputField
            label="Confirmar Nueva Contraseña"
            placeholder="Confirmar Nueva Contaseña"
            error={errors.confirmPassword}
            register={register(
              "confirmPassword",
              resetPasswordValidations.confirmPassword
            )}
          />
          
          <div className="grid grid-cols-2 gap-6">
            <FantasyButton
              type="button"
              variant="secondary"
              size="lg"
              onClick={onClose}
            >
              Volver
            </FantasyButton>
            <FantasyButton
              type="submit"
              variant="primary"
              size="lg"
              disabled={!isValid}
            >
              Guardar cambios
            </FantasyButton>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};