import IconClock from "@global/assets/icons/modals/IconClock.svg";
import { ModalBaseLeagues } from "./league/ModalBaseLeagues";

interface DateUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DateUpdateModal = ({
  isOpen,
  onClose,
}: DateUpdateModalProps) => {
  return (
        <ModalBaseLeagues
      isOpen={isOpen}
      title={
        <div className="flex flex-col">
          <h3>¡Arranca la nueva fecha!</h3>
          <h3>Fecha 02</h3>
        </div>
      }
      icon={IconClock}
      onClose={onClose}>
      <div className="flex flex-col items-center text-center gap-4">
        <p className="font-body-normal-regular">
          La próxima fecha de la liga comienza el 22/11/2025 a las 12:00. P.M
        </p>
        <p className="font-body-normal-regular">
          La siguiente jornada de la liga esta por llegar. Prepárate para ver
          cómo rinde tu equipo y cómo se mueve la tabla.
        </p>
      </div>
    </ModalBaseLeagues>
  );
};

export default DateUpdateModal;
