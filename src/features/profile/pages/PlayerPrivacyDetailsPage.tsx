import { useState } from "react";
import Padlock from "@global/assets/icons/shared/padlock.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import TrashIcon from "@global/assets/icons/shared/trash.svg";
import { UserDataProfileCard } from "../components/cards/UserDataProfileCard";
import { ModalVerifyAccount } from "../components/modals/ModalVerifyAccount";
import { ModalDeleteAccount } from "../components/modals/ModalDeleteAccount";

const PlayerPrivacyDetailsPage = () => {
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isEliminateModalOpen, setIsEliminateModalOpen] = useState(false);

  const handleOpenVerifyModal = () => {
    setIsVerifyModalOpen(true);
  };

  const handleCloseVerifyModal = () => {
    setIsVerifyModalOpen(false);
  };

  const handleOpenEliminateModal = () => {
    setIsEliminateModalOpen(true);
  };

  const handleCloseEliminateModal = () => {
    setIsEliminateModalOpen(false);
  };

  return (
    <div className="w-full mx-auto p-10 flex flex-col justify-between">
      <div className="flex flex-col items-center gap-8">
        <h3>Información de inicio de sesión</h3>
        <UserDataProfileCard
          icon={Padlock}
          name="Cambiar contraseña"
          value="*****"
          className="w-full max-w-[517px] h-[74px]"
          onClick={handleOpenVerifyModal}
        />
      </div>

      <div className="flex justify-center">
        <FantasyButton
          variant="red"
          size="lg"
          className="flex items-center justify-center gap-2"
          onClick={handleOpenEliminateModal}
        >
          <img src={TrashIcon} alt="Trash" className="w-6 h-6" />
          <span>Eliminar cuenta</span>
        </FantasyButton>
      </div>

      <ModalDeleteAccount
        isOpen={isEliminateModalOpen} 
        onClose={handleCloseEliminateModal}
        onOpenVerify={handleOpenVerifyModal}
      />
      
      <ModalVerifyAccount
        isOpen={isVerifyModalOpen}
        onClose={handleCloseVerifyModal}
        subtitle={
          <>
            <p className="font-body-normal-regular">
              Para poder confirmar la eliminación de la cuenta de [Usuario]
              <br/>
              Escribe el código de 6 dígitos que llegó a tu correo 
            </p>
            <p className="font-body-normal-medium">
              (guillermobarrios@example.com)
            </p>
          </>
        }
      />
    </div>
  );
};

export default PlayerPrivacyDetailsPage;