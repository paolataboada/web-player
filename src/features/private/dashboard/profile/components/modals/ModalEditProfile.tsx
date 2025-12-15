import InputField from "@global/components/forms/InputField";
import { BaseModal } from "./ModalBase";
import EditIcon from "@global/assets/icons/modals/editicon.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import UserIcon from "@global/assets/icons/profile/person-fill-lock2.svg?react";

interface ModalEditProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalEditProfile = ({
  isOpen,
  onClose,
}: ModalEditProfileProps) => {
  return (
    <BaseModal 
      isOpen={isOpen} 
      title="Editar perfil" 
      icon={EditIcon}
      showCloseButton={false}
      onClose={onClose}
    >
        <form className="w-full space-y-5">
         <InputField
            label="Nombre"
            name="lastName"
            placeholder="Ingresa tu Nombre"
            icon={
                <UserIcon className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
              }
              className="pl-10 sm:pl-11 w-full"
          />

          <InputField
            label="Apellido"
            name="lastName"
            placeholder="Ingresa tu apellido"
            icon={
                <UserIcon className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
              }
              className="pl-10 sm:pl-11 w-full"
          />
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
              variant="primary"
              size="lg"
              className=""
            >
              Guardar cambios
            </FantasyButton>
          </div>
        </form>
    </BaseModal>
  );
};