import FantasyButton from "@global/components/buttons/FantasyButton";
import { ModalBaseLeagues } from "../league/ModalBaseLeagues";
import Delete from "@global/assets/icons/modals/Delete.svg";

interface DeleteLeagueMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteLeagueMemberModal = ({
  isOpen,
  onClose,
}: DeleteLeagueMemberModalProps) => {
  return (
    <ModalBaseLeagues
     isOpen={isOpen}
     title="Eliminar participante"
     icon={Delete}
     onClose={onClose}>
     <div className="flex flex-col items-center text-center gap-4">
       <p className="font-body-normal-medium">
         ¿Quieres sacar a este jugador del partido?
       </p>
       <p className="font-body-normal-regular">
         Si lo eliminas, quedará fuera de la liga y no seguirá compitiendo. Una
         vez eliminado, no podrá volver a unirse a esta liga a menos que lo
         invites nuevamente.
       </p>
       
       <div className="flex flex-row gap-3 w-full">
         <FantasyButton
           type="button"
           variant="secondary"
           size="lg"
           className="flex-1"
           onClick={onClose}
         >
           Volver
         </FantasyButton>
         <FantasyButton
           type="submit"
           variant="red"
           size="lg"
           className="flex-1"
         >
           Si, Eliminar
         </FantasyButton>
       </div>
     </div>
   </ModalBaseLeagues>
  );
};

export default DeleteLeagueMemberModal;
