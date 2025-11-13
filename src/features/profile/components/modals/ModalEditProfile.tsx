import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import { BaseModal } from "./ModalBase";
import EditIcon from "@global/assets/icons/modals/editicon.svg";
import AuthDatePickerInput from "@features/authentication/shared/components/inputs/AuthDatePickerInput";
import FantasyButton from "@global/components/buttons/FantasyButton";

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
        <form className="space-y-5">
          <AuthInput
            label="Nombre"
            name="firstName"
            defaultValue="Guillermo"
            placeholder="Ingresa tu nombre"
          />

          <AuthInput
            label="Apellido"
            name="lastName"
            defaultValue="Barrios"
            placeholder="Ingresa tu apellido"
          />
          <AuthDatePickerInput
            label="Fecha de Nacimiento"
            value="1997-10-10"
            onChange={() => {}}
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