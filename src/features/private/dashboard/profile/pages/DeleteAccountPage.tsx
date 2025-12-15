import { useState } from "react";
import FantasyButton from "@global/components/buttons/FantasyButton";
import WarningIcon from "@global/assets/icons/modals/warning.svg";
import Trash from "@global/assets/icons/card/Trash";
import UserIcon from "@global/assets/icons/profile/person-fill-lock2.svg?react";
import EmailIcon from "@global/assets/icons/profile/Email.svg?react";
import InputField from "@global/components/forms/InputField";
import AccountVerificationDrawer from "../../leagues/components/drawer/AccountVerificationDrawer";
import { BreadCrumb } from "@global/components/navbars/BreadCrumb";
import { ROUTES } from "@navigation/routes/routes";
import MotionContainer from "@global/containers/MotionContainer"

const DeleteAccountPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  return (
    <MotionContainer className="w-full min-w-screen h-screen -m-4 overflow-x-hidden md:m-0 md:min-w-0 md:h-full flex flex-col">
      <BreadCrumb title="Perfil" to={ROUTES.PROFILE} />
      <div className="max-w-[380px] mx-auto flex-1 flex flex-col">
        <div className="flex flex-col flex-1 space-y-6 mt-6">
          <h4 className="text-neutral-50 text-center text-xl sm:text-2xl">
            Eliminar cuenta
          </h4>
          <div className="flex items-center gap-2">
            <img src={WarningIcon} alt="Warning" className="w-7 h-7" />
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

          <form className="flex flex-col space-y-5">
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
          </form>

          <div className="grid grid-cols-1 gap-6 mt-auto pb-2">
            <FantasyButton
              type="button"
              variant="red"
              size="lg"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleOpenDrawer}>
              <Trash className="w-5 h-5" />
              Eliminar cuenta
            </FantasyButton>
          </div>
        </div>
      </div>

      <AccountVerificationDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        title="Verifica tu cuenta"
        instructionText="Para poder confirmar la eliminación de la cuenta de"
        InfoText="Escribe el código de 6 dígitos que llegó a tu correo"
        emailText="(guillermobarrios@example.com)"
        submitButtonText="Verificar"
      />
    </MotionContainer>
  );
};

export default DeleteAccountPage;
