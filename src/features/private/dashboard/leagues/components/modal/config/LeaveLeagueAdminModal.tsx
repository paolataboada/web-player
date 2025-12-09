import { useState } from "react";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { ModalBaseLeagues } from "../league/ModalBaseLeagues";
import DeleteLeague from "@global/assets/icons/modals/LeaveMember.svg";
import DeleteLeagueAdminModal from "./DeleteLeagueAdminModal";

interface LeaveLeagueAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeaveLeagueAdminModal = ({
  isOpen,
  onClose,
}: LeaveLeagueAdminModalProps) => {
  const [isDeleteLeagueAdminOpen, setIsDeleteLeagueAdminOpen] = useState(false);

  const handleOpenDeleteLeagueAdmin = () => {
    setIsDeleteLeagueAdminOpen(true);
  };

  const handleCloseDeleteLeagueAdmin = () => {
    setIsDeleteLeagueAdminOpen(false);
  };

  return (
    <>
      <ModalBaseLeagues
        isOpen={isOpen}
        title="Salir de la liga"
        icon={DeleteLeague}
        onClose={onClose}>
        <div className="flex flex-col items-center text-center gap-6">
          <p className="font-body-normal-regular">
            ¿Estás pensando en dejar tu liga?
          </p>
          <p className="font-body-normal-regular">
            Capitán, si abandonas el equipo ahora tendrás que elegir a alguien
            que tome tu lugar… o decidir si la liga llega a su final. ¿Cómo
            quieres jugar esta jugada?
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
              type="button"
              variant="primary"
              size="lg"
              className="flex-1"
              onClick={handleOpenDeleteLeagueAdmin}>
              Cambiar administrador
            </FantasyButton>
          </div>
        </div>
      </ModalBaseLeagues>

      <DeleteLeagueAdminModal
        isOpen={isDeleteLeagueAdminOpen}
        onClose={handleCloseDeleteLeagueAdmin}
      />
    </>
  );
};

export default LeaveLeagueAdminModal;
