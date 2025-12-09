import FantasyButton from "@global/components/buttons/FantasyButton";
import { ModalBaseLeagues } from "../league/ModalBaseLeagues";
import Delete from "@global/assets/icons/modals/DeleteLeague.svg";

interface DeleteLeagueAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteLeagueAdminModal = ({
  isOpen,
  onClose,
}: DeleteLeagueAdminModalProps) => {
  return (
    <ModalBaseLeagues
      isOpen={isOpen}
      title="Eliminar liga"
      icon={Delete}
      titleColor="text-red-500"
      onClose={onClose}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <p className="font-body-normal-regular">
          Si eliminas la liga sin designar antes a un nuevo administrador, la
          competencia se dará por finalizada.
        </p>
        <p className="font-body-normal-regular">
          Al eliminarla, se borrará todo el historial del torneo: alineaciones,
          resultados y estadísticas. Y participantes. Una vez confirmada la
          acción, no habrá vuelta atrás en el marcador.
        </p>

        <div className="flex flex-col-reverse sm:flex-row gap-3 w-full mt-5">
          <FantasyButton
            type="button"
            variant="red"
            size="lg"
            className="w-full sm:flex-1 order-2 sm:order-2"
          >
            Si, Eliminar
          </FantasyButton>

          <FantasyButton
            type="button"
            variant="secondary"
            size="lg"
            className="w-full sm:flex-1 order-1 sm:order-1"
            onClick={onClose}
          >
            No, Volver
          </FantasyButton>
        </div>
      </div>
    </ModalBaseLeagues>
  );
};

export default DeleteLeagueAdminModal;