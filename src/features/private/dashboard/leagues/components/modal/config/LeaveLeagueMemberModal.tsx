import FantasyButton from "@global/components/buttons/FantasyButton";
import { ModalBaseLeagues } from "../league/ModalBaseLeagues";
import DeleteLeague from "@global/assets/icons/modals/LeaveMember.svg";

interface LeaveLeagueMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeaveLeagueMemberModal = ({
  isOpen,
  onClose,
}: LeaveLeagueMemberModalProps) => {
  return (
    <ModalBaseLeagues
      isOpen={isOpen}
      title={
        <>
          ¿Desea salir de la liga <br />
          <h3>"LOS ULTIMOS SIEMPRE"?</h3>
        </>
      }
      icon={DeleteLeague}
      onClose={onClose}>
      <div className="flex flex-col items-center text-center gap-6">
        <p className="font-body-normal-regular">
          Solo los administradores recibirán una notificación cuando sales de
          una liga
        </p>
        <div className="flex flex-row gap-3 w-full">
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
            Si, Salir
          </FantasyButton>
        </div>
      </div>
    </ModalBaseLeagues>
  );
};

export default LeaveLeagueMemberModal;
