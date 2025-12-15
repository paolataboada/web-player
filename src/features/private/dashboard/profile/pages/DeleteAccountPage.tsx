import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "@global/assets/icons/shared/arrow-left.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import WarningIcon from "@global/assets/icons/modals/warning.svg";
import Trash from "@global/assets/icons/card/Trash";
import UserIcon from "@global/assets/icons/profile/person-fill-lock2.svg?react";
import EmailIcon from "@global/assets/icons/profile/Email.svg?react";
import InputField from "@global/components/forms/InputField";
import AccountVerificationDrawer from "../../leagues/components/drawer/AccountVerificationDrawer";

const DeleteAccountPage = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-[380px] mx-auto">
          <div className="relative w-full h-16 flex items-center justify-between">
            <button
              onClick={handleBack}
              className="p-1 hover:opacity-80 transition-opacity z-10"
            >
              <img src={Arrow} alt="Back" className="w-6 h-6" />
            </button>
            <p className="text-neutral-50 text-lg font-body-large-medium absolute left-1/2 transform -translate-x-1/2">
              Perfil
            </p>
          </div>
          <div className="w-full space-y-6 mt-6">
            <h4 className="text-neutral-50 text-center mb-6">
              Eliminar cuenta
            </h4>

            <div className="flex items-center gap-2">
              <img src={WarningIcon} alt="WarningIcon" className="w-7 h-7" />
              <p className="font-body-large-medium text-neutral-50">
                Si eliminas tu cuenta, se borrarán:
              </p>
            </div>

            <ul className="list-disc pl-6 space-y-2">
              <li className="font-body-normal-regular text-neutral-50">
                Tu cuenta de FFANTASY.
              </li>
              <li className="font-body-normal-regular text-neutral-50">
                Tu historial de compras.
              </li>
              <li className="font-body-normal-regular text-neutral-50">
                Todas tus ligas de FFANTASY.
              </li>
            </ul>

            <p className="font-body-normal-regular text-neutral-50">
              Para eliminar tu cuenta, ingresa tu nombre de usuario y documento de
              identidad.
            </p>

            <form className="space-y-5">
              <InputField
                label="Nombre de usuario"
                name="username"
                placeholder="Nombre de usuario"
                icon={
                  <UserIcon className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
                }
                className="pl-10 sm:pl-11 w-full"
              />

              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="Email"
                icon={
                  <EmailIcon className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
                }
                className="pl-10 sm:pl-11 w-full"
              />

              <FantasyButton
                type="button"
                variant="red"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
                onClick={handleOpenDrawer}
              >
                <Trash className="w-5 h-5" />
                Eliminar cuenta
              </FantasyButton>
            </form>
          </div>
        </div>
      </div>

      <AccountVerificationDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        title="Verifica tu cuenta"
        instructionText="Para poder confirmar la eliminación de la cuenta de "
        InfoText="Escribe el código de 6 dígitos que llegó a tu correo"
        emailText="(guillermobarrios@example.com)"
        submitButtonText="Verificar"
      />
    </>
  );
};

export default DeleteAccountPage;