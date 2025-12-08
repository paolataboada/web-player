import FantasyButton from "@global/components/buttons/FantasyButton";
import { BaseModal } from "./ModalBase";
import MedallasIcon from "@global/assets/icons/modals/medalicon.svg";

interface ModalWithoutMedalsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWithoutMedals = ({
  isOpen,
  onClose,
}: ModalWithoutMedalsProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      title="Aún no tienes insignias"
      titleSize="h4"
      icon={MedallasIcon}
      iconSize="w-[100px] h-[100px]"
      onClose={onClose}
      showCloseButton={true}
    >
      <p className="font-body-normal-regular text-center text-neutral-200">Completa retos para ganar tus primeras insignias y mostrarlas en tu perfil.</p>
    <FantasyButton
          type="button"
          variant="primary"
          size="md"
          className="w-full"
        >
          Ir a retos
        </FantasyButton>
    </BaseModal>
  );
};
