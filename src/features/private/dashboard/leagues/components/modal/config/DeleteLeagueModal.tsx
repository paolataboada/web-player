import FantasyButton from "@global/components/buttons/FantasyButton";
import { ModalBaseLeagues } from "../league/ModalBaseLeagues";
import Delete from "@global/assets/icons/modals/DeleteLeague.svg";

interface DeleteLeagueModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const DeleteLeagueModal = ({ isOpen, onClose }: DeleteLeagueModalProps) => {
  return (
    <ModalBaseLeagues
      isOpen={isOpen}
      title="Eliminar liga"
      titleColor="text-red-500"
      icon={Delete}
      onClose={onClose}>
      <div className="flex flex-col items-center text-center gap-4">
        <p className="font-body-normal-regular">
          Si eliminas la liga sin designar antes a un nuevo administrador, la
          competencia se dará por finalizada.
        </p>
        <p className="font-body-normal-regular">
          Al eliminarla, se borrará todo el historial del torneo: alineaciones,
          resultados y estadísticas. Y participantes. Una vez confirmada la
          acción, <strong>no habrá vuelta atrás en el marcador.</strong>
        </p>

        <div className="flex flex-col-reverse sm:flex-row gap-3 w-full">
          <FantasyButton
            type="button"
            variant="secondary"
            size="lg"
            className="w-full sm:flex-1"
            onClick={onClose}>
            Volver
          </FantasyButton>
          <FantasyButton
            type="submit"
            variant="red"
            size="lg"
            className="w-full sm:flex-1">
            Si, Eliminar
          </FantasyButton>
        </div>
      </div>
    </ModalBaseLeagues>
  );
};

export default DeleteLeagueModal;
