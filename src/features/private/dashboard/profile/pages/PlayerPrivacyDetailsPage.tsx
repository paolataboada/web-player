import { useState, useEffect } from "react";
import Padlock from "@global/assets/icons/shared/padlock.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Trash from "@global/assets/icons/card/Trash";
import { UserDataProfileCard } from "../components/cards/UserDataProfileCard";
import { ModalVerifyAccount } from "../components/modals/ModalVerifyAccount";
import { ModalDeleteAccount } from "../components/modals/ModalDeleteAccount";
import { ModalChangePassword } from "../components/modals/ModalChangePassword";
import { useNavigate } from "react-router-dom";
import IconArrow from "@global/assets/icons/shared/arrow-left.svg?react";
import { ROUTES } from "@navigation/routes/routes";

const PlayerPrivacyDetailsPage = () => {
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isEliminateModalOpen, setIsEliminateModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleOpenVerifyModal = () => {
    setIsVerifyModalOpen(true);
  };

  const handleCloseVerifyModal = () => {
    setIsVerifyModalOpen(false);
  };

  const handleOpenEliminateModal = () => {
    if (isDesktop) {
      setIsEliminateModalOpen(true);
    } else {
       navigate(`${ROUTES.PROFILE}/deleteaccount`);
    }
  };

  const handleCloseEliminateModal = () => {
    setIsEliminateModalOpen(false);
  };

  const handleOpenChangePasswordModal = () => {
    if (isDesktop) {
      setIsChangePasswordModalOpen(true);
    } else {
       navigate(`${ROUTES.PROFILE}/change`);
    }
  };

  const handleCloseChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col px-4 sm:px-6 pt-4 sm:pt-6 pb-5">
        <div className="w-full max-w-[1146px] mx-auto flex-1 flex flex-col">
          <div className="hidden sm:block mb-4 sm:mb-6">
            <FantasyButton
              type="button"
              variant="secondary"
              size="lg"
              onClick={handleBack}
              className="w-auto"
            >
              <IconArrow className="w-5 h-5" />
            </FantasyButton>
          </div>

          <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
            <h3 className="hidden xl:block text-center text-xl sm:text-2xl">
              Información de inicio de sesión
            </h3>
            <p className="xl:hidden font-body-small-medium">
              Información de inicio de sesión
            </p>

            <div className="w-full max-w-full xl:max-w-[517px]">
              <UserDataProfileCard
                icon={Padlock}
                name="Cambiar contraseña"
                value="*****"
                className="w-full h-[74px]"
                onClick={handleOpenChangePasswordModal}
              />
            </div>
          </div>
          
          <div className="flex-1" />

          <div className="flex justify-center">
            <FantasyButton
              variant="red"
              size="lg"
              className="flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px]"
              onClick={handleOpenEliminateModal}
            >
              <Trash className="w-5 h-5" />
              <span>Eliminar cuenta</span>
            </FantasyButton>
          </div>
        </div>
      </div>

      {isDesktop && (
        <>
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
                <p className="font-body-normal-regular text-sm sm:text-base">
                  Para poder confirmar la eliminación de la cuenta de [Usuario]
                  <br />
                </p>
                <p className="font-body-normal-medium text-sm sm:text-base">
                  (guillermobarrios@example.com)
                </p>
              </>
            }
          />

          <ModalChangePassword
            isOpen={isChangePasswordModalOpen}
            onClose={handleCloseChangePasswordModal}
          />
        </>
      )}
    </div>
  );
};

export default PlayerPrivacyDetailsPage;