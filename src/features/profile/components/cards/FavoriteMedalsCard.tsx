import IconEdit from "@global/assets/icons/shared/edit-pencil.svg";
import IconPlus from "@global/assets/icons/shared/plus.svg";
import Arrow from "@global/assets/icons/shared/Arrow.svg";
import { ModalChooseMedals } from "../modals/ModalChooseMedals";
import { ModalWithoutMedals } from "../modals/ModalWithoutMedals"; // Importar el nuevo modal
import { useState } from "react";

const FavoriteMedalsCard = () => {
  const [isMedalsModalOpen, setIsMedalsModalOpen] = useState(false);
  const [isWithoutMedalsModalOpen, setIsWithoutMedalsModalOpen] = useState(false);

  const handleOpenMedalsModal = () => {
    setIsMedalsModalOpen(true);
  };

  const handleCloseMedalsModal = () => {
    setIsMedalsModalOpen(false);
  };

  const handleOpenWithoutMedalsModal = () => {
    setIsWithoutMedalsModalOpen(true);
  };

  const handleCloseWithoutMedalsModal = () => {
    setIsWithoutMedalsModalOpen(false);
  };

  return (
    <>
      <div
        className="border-[0.5px] border-primary-50 rounded-xl w-[538px] h-[136px] pt-3 pr-4 pb-3 pl-4"
        style={{ backgroundColor: "#2121218F" }}
      >
        <div className="flex items-center justify-center pb-2">
          <p className="font-body-small-medium">Medallas Fijadas</p>
          <button 
            className="ml-2 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <img className="w-4 h-4" src={IconEdit} alt="Editar medallas" />
          </button>
        </div>

        <div className="flex flex-row gap-8 justify-center">
          <button
            className="rounded-full border-[0.5px] border-primary-50 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-primary-50/10 transition-colors"
            onClick={handleOpenMedalsModal}
          >
            <img className="w-[17px]" src={IconPlus} alt="Agregar medalla" />
          </button>
          <button 
            className="rounded-full border-[0.5px] border-primary-50 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-primary-50/10 transition-colors"
            onClick={handleOpenWithoutMedalsModal} // Aquí se llama al nuevo modal
          >
            <img className="w-[17px]" src={IconPlus} alt="Agregar medalla" />
          </button>
          <button 
            className="rounded-full border-[0.5px] border-primary-50 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-primary-50/10 transition-colors"
            onClick={handleOpenMedalsModal}
          >
            <img className="w-[17px]" src={IconPlus} alt="Agregar medalla" />
          </button>
        </div>

        <hr className="border border-white mt-3 mb-2" />

        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <p className="font-body-small-medium">Medallas</p>
                <span
                  className="w-9 h-5 rounded-full font-body-extrasmall-regular flex items-center justify-center"
                  style={{ backgroundColor: "#4A4A4A30" }}
                >
                  x24
                </span>
              </div>
            </div>
          </div>
          <div className="h-8 w-px bg-white" />
          <button className="cursor-pointer hover:opacity-70 transition-opacity">
            <img
              className="h-6 w-6"
              src={Arrow}
              alt="Progress icon"
            />
          </button>
        </div>
      </div>

      <ModalChooseMedals
        isOpen={isMedalsModalOpen}
        onClose={handleCloseMedalsModal}
      />

      <ModalWithoutMedals
        isOpen={isWithoutMedalsModalOpen}
        onClose={handleCloseWithoutMedalsModal}
      />
    </>
  );
};

export default FavoriteMedalsCard;