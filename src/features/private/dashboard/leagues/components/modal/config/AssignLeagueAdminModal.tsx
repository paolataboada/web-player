import { useState } from "react";
import InputField from "@global/components/forms/InputField";
import { ModalBaseLeagues } from "../league/ModalBaseLeagues";
import IconAssign from "@global/assets/icons/modals/IconAssign.svg";
import IconSearch from "@global/assets/icons/card/search.svg?react";
import Person from "@global/assets/icons/card/person.svg";
import Personfill from "@global/assets/icons/card/person-fill";
import FantasyButton from "@global/components/buttons/FantasyButton";
import ConfirmAssignLeagueAdminModal from "./ConfirmAssignLeagueAdminModal";

interface AssignLeagueAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssignLeagueAdminModal = ({
  isOpen,
  onClose,
}: AssignLeagueAdminModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <>
      <ModalBaseLeagues
        isOpen={isOpen}
        title="Cambiar Administrador"
        icon={IconAssign}
        onClose={onClose}
      >
        <div className="flex flex-col items-center text-center gap-4">
          <p className="font-body-normal-regular">
            Selecciona al usuario que será el nuevo administrador a partir de
            ahora.
          </p>
          <p className="font-body-normal-regular text-sm">
            Al asignar un nuevo administrador, él será quien tome las decisiones
            principales de la liga. Asegúrate de elegir bien a tu próximo líder de
            liga.
          </p>

          <form className="w-full mb-4">
            <InputField
              placeholder="Ingrese nombre de usuario"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 sm:pl-11 w-full h-12 text-sm sm:text-base"
              icon={
                <IconSearch className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
              }
            />
          </form>

          <div className="w-full grid grid-cols-2 gap-3 lg:gap-4 flex-1 overflow-y-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div
                key={item}
                className="relative rounded-lg shrink-0 min-h-14 sm:min-h-16"
              >
                <div
                  className="absolute inset-0 rounded-lg p-px z-10 bg-linear-120 from-primary-500 to-secondary-500"
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                ></div>
                <div className="absolute inset-0 rounded-lg bg-linear-150 from-primary-500/30 to-neutral-900/80 z-0"></div>

                <div className="relative z-20 w-full h-full px-3 sm:px-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-500 flex items-center justify-center shrink-0">
                      <img
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        src={Person}
                        alt="Person"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-body-normal-regular text-neutral-50 text-sm sm:text-base truncate">
                        {item === 1 && "joselopez1995"}
                        {item === 2 && "maria_gomez"}
                        {item === 3 && "carlos_rdz"}
                        {item === 4 && "ana_torres"}
                        {item === 5 && "luis_mendez"}
                        {item === 6 && "joselopez1995"}
                        {item === 7 && "maria_gomez"}
                        {item === 8 && "carlos_rdz"}
                        {item === 9 && "ana_torres"}
                        {item === 10 && "luis_mendez"}
                      </p>
                    </div>
                  </div>
                  <button 
                    className="p-1 hover:opacity-80 transition-opacity shrink-0"
                    onClick={handleOpenConfirmModal}
                  >
                    <Personfill className="text-primary-500 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-3 w-full">
            <FantasyButton
              type="button"
              variant="secondary"
              size="lg"
              className="flex-1"
              onClick={onClose}
            >
              No, Volver
            </FantasyButton>
            <FantasyButton
              type="button"
              variant="red"
              size="lg"
              className="flex-1"
            >
              Si, Eliminar
            </FantasyButton>
          </div>
        </div>
      </ModalBaseLeagues>

      <ConfirmAssignLeagueAdminModal
        isOpen={isConfirmModalOpen}
        onClose={handleCloseConfirmModal}
      />
    </>
  );
};

export default AssignLeagueAdminModal;