import { useForm } from "react-hook-form";
import { BaseModal } from "./ModalBase";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Password from "@global/assets/icons/modals/password.svg";
import { AuthPasswordInput } from "@features/authentication/shared/components/inputs/AuthPasswordInput";
import { PasswordStrength } from "@features/authentication/shared/components/passwords/PasswordStrength";
import { usePasswordValidation } from "@features/authentication/shared/hooks/usePasswordValidation";
import { getPasswordValidations } from "@features/authentication/shared/validations/password.validations";
import type { TFormResetPassword } from "@features/authentication/reset-password/types/form-reset-password.types";

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
  const { rules, getBarColor, getProgressWidth } = usePasswordValidation(password);
  const resetPasswordValidations = getPasswordValidations(password);

  const onSubmit = async (form: TFormResetPassword) => {
    try {
      const payload = {
        newPassword: form.newPassword,
        confirmPassword: form.confirmPassword,
      };
      // Aquí puedes llamar a tu servicio para cambiar la contraseña
      console.log("Cambiar contraseña:", payload);
      
      onClose(); // Cierra el modal después de enviar
    } catch (error) {
      console.error("Error al cambiar contraseña:", error);
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      title="Cambiar contraseña"
      icon={Password}
      showCloseButton={false}
      onClose={onClose}
    >
      <div className="flex flex-col gap-6 w-full">
        <p className="font-body-normal-regular text-neutral-50">
          Para eliminar tu cuenta, ingresa tu nombre de usuario y documento de identidad.
        </p>

        <form className="space-y-5 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <AuthPasswordInput
              label="Nueva contraseña"
              placeholder="Nueva contraseña"
              autoComplete="new-password"
              error={errors.newPassword?.message}
              register={register(
                "newPassword",
                resetPasswordValidations.password
              )}
            />
            <PasswordStrength
              rules={rules}
              getBarColor={getBarColor}
              getProgressWidth={getProgressWidth}
            />
          </div>

          <AuthPasswordInput
            label="Confirmar nueva contraseña"
            placeholder="Confirmar nueva contraseña"
            error={errors.confirmPassword?.message}
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