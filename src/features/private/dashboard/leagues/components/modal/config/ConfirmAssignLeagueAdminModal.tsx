import FantasyButton from "@global/components/buttons/FantasyButton";
import { ModalBaseLeagues } from "../league/ModalBaseLeagues";
import IconAssign from "@global/assets/icons/modals/IconAssign.svg";

interface ConfirmAssignLeagueAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmAssignLeagueAdminModal = ({
  isOpen,
  onClose,
}: ConfirmAssignLeagueAdminModalProps) => {
  return (
    <ModalBaseLeagues
      isOpen={isOpen}
      title={"Confirmar cambio de Admin"}
      icon={IconAssign}
      onClose={onClose}>
      <div className="flex flex-col items-center text-center gap-3">
        <p className="font-body-normal-regular">
          ¿Seguro que quieres que Gomez0222 sea el nuevo administrador de la
          liga?
        </p>
        <p className="font-body-normal-regular">
          Una vez realizado el cambio, él pasará a liderar tu equipo y gestionar
          la liga.
        </p>
        <p className="font-body-normal-regular">
          Ten en cuenta que, una vez asignes al nuevo administrador, dejarás de
          tener acceso a todas las configuraciones y decisiones principales. El
          nuevo administrador tomará el control absoluto de la liga.
        </p>
        <div className="flex flex-row gap-3 w-full mt-6">
          <FantasyButton
            type="button"
            variant="secondary"
            size="lg"
            className="flex-1"
            onClick={onClose}>
            Volver
          </FantasyButton>
          <FantasyButton
            type="submit"
            variant="primary"
            size="lg"
            className="flex-1">
            Si, Confirmar
          </FantasyButton>
        </div>
      </div>
    </ModalBaseLeagues>
  );
};

export default ConfirmAssignLeagueAdminModal;
