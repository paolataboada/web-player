import { useState } from "react";
import Padlock from "@global/assets/icons/shared/padlock.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Trash from "@global/assets/icons/card/Trash";
import { UserDataProfileCard } from "../components/cards/UserDataProfileCard";
import { ModalVerifyAccount } from "../components/modals/ModalVerifyAccount";
import { ModalDeleteAccount } from "../components/modals/ModalDeleteAccount";
import { ModalChangePassword } from "../components/modals/ModalChangePassword";

const PlayerPrivacyDetailsPage = () => {
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isEliminateModalOpen, setIsEliminateModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

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

  const handleOpenChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
  };

  const handleCloseChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);
  };

  return (
    <div className="w-full max-w-[1146px] h-[907px] mx-auto p-4 sm:p-6 xl:p-10 flex flex-col justify-between">
      <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
        {/* Título responsive */}
        <h3 className="hidden xl:block">Información de inicio de sesión</h3>
        <p className="xl:hidden font-body-small-medium text-center">
          Información de inicio de sesión
        </p>
        
        <UserDataProfileCard
          icon={Padlock}
          name="Cambiar contraseña"
          value="*****"
          className="w-full max-w-full xl:max-w-[517px] h-[74px]"
          onClick={handleOpenVerifyModal}
        />
      </div>

      <div className="flex justify-center mt-8 sm:mt-0">
        <FantasyButton
          variant="red"
          size="lg"
          className="flex items-center justify-center gap-2 w-full sm:w-auto"
          onClick={handleOpenEliminateModal}
        >
          <Trash className="w-5 h-5" />
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
        onVerify={handleOpenChangePasswordModal}
        subtitle={
          <>
            <p className="font-body-normal-regular">
              Para poder confirmar la eliminación de la cuenta de [Usuario]
              <br/>
            </p>
            <p className="font-body-normal-medium">
              (guillermobarrios@example.com)
            </p>
          </>
        }
      />

      <ModalChangePassword
        isOpen={isChangePasswordModalOpen}
        onClose={handleCloseChangePasswordModal}
      />
    </div>
  );
};

export default PlayerPrivacyDetailsPage;