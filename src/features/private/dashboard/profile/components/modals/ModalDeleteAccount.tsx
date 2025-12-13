import InputField from "@global/components/forms/InputField";
import { BaseModal } from "./ModalBase";
import TrashIcon from "@global/assets/icons/modals/trash.svg";
import WarningIcon from "@global/assets/icons/modals/warning.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Trash from "@global/assets/icons/card/Trash";
import UserIcon from "@global/assets/icons/profile/person-fill-lock2.svg?react";
import EmailIcon from "@global/assets/icons/profile/Email.svg?react";

interface ModalDeleteAccountProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVerify: () => void;
}

export const ModalDeleteAccount = ({ isOpen, onClose, onOpenVerify }: ModalDeleteAccountProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose(); 
    onOpenVerify(); 
  };

  return (
    <BaseModal
      isOpen={isOpen}
      title="Eliminar cuenta"
      icon={TrashIcon}
      showCloseButton={false}
      onClose={onClose}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <img src={WarningIcon} alt="WarningIcon" className="w-7 h-7" />
          <p className="font-body-large-medium text-neutral-50">
            Si eliminas tu cuenta, se borrarán:
          </p>
        </div>

        <ul className="list-disc pl-6 space-y-2">
          <li className="font-body-normal-regular text-neutral-50">
            Tu cuenta de FFANTASY.
          </li>
          <li className="font-body-normal-regular text-neutral-50">
            Tu historial de compras.
          </li>
          <li className="font-body-normal-regular text-neutral-50">
            Todas tus ligas de FFANTASY.
          </li>
        </ul>
        <p className="font-body-normal-regular text-neutral-50">
          Para eliminar tu cuenta, ingresa tu nombre de usuario y documento de
          identidad.
        </p>
        <form className="space-y-5" onSubmit={handleSubmit}>
         <InputField
            label="Nombre de usuario"
            name=""
            placeholder="Nombre de usuario"
            icon={
                <UserIcon className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
              }
              className="pl-10 sm:pl-11 w-full"
          />

          <InputField
            label="Email"
            type="email"
            name=""
            placeholder="Email"
            icon={
                <EmailIcon className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
              }
              className="pl-10 sm:pl-11 w-full"
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
              variant="red" 
              size="lg" 
              className="flex items-center justify-center gap-2"
            >
              <Trash className="w-5 h-5" />
              <span>Eliminar cuenta</span>
            </FantasyButton>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};