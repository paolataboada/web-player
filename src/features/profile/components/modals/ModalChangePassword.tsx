import { BaseModal } from "./ModalBase";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Password from "@global/assets/icons/modals/password.svg";

interface ModalChangePasswordProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalChangePassword = ({ isOpen, onClose }: ModalChangePasswordProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      title="Cambiar contraseña"
      icon={Password}
      showCloseButton={false}
      onClose={onClose}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <p className="font-body-normal-regular text-neutral-50">
            Para eliminar tu cuenta, ingresa tu nombre de usuario y documento de
            identidad.
          </p>
        </div>

        <form className="space-y-5">
          {/* <div className="grid gap-4">
            <AuthPasswordInput
              label="Contraseña"
              placeholder="Contraseña"
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
            label="Confirmar Nueva Contraseña"
            placeholder="Confirmar Nueva Contraseña"
            error={errors.confirmPassword?.message}
            register={register(
              "confirmPassword",
              resetPasswordValidations.confirmPassword
            )}
          /> */}
          <div className="grid grid-cols-2 gap-6">
            <FantasyButton
              type="button"
              variant="secondary"
              size="lg"
              className=""
              onClick={onClose}
            >
              Volver
            </FantasyButton>
            <FantasyButton
              type="submit"
              variant="red"
              size="lg"
              className="flex items-center justify-center gap-2"
            >
              <span>Eliminar cuenta</span>
            </FantasyButton>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};
