import { useState } from "react";
import FantasyButton from "@global/components/buttons/FantasyButton";
import InputField from "@global/components/forms/InputField";
import IconEmail from "@global/assets/icons/modals/ShareOnSocial/Correo.svg?react";
import ExclamationIcon from "@global/assets/icons/modals/ExclamationIcon.svg";
import AccountVerificationDrawer from "../components/drawer/AccountVerificationDrawer";

const IdentityVerificationPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleVerifyClick = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="max-w-[380px] mx-auto w-full px-4 pt-4">
          <div className="relative w-full h-12 flex items-center justify-center mb-2">
            <p className="text-neutral-50 font-body-large-medium">
              Reclamar premio
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-24">
          <div className="max-w-[380px] mx-auto w-full space-y-6">
            <h4 className="text-neutral-50 text-center text-xl font-semibold mb-2">
              Verificación de identidad
            </h4>

            <div className="flex flex-col gap-5">
              <p className="font-body-normal-regular text-neutral-50">
                Para continuar con el proceso de reclamo del premio, necesitamos
                confirmar tu identidad.
              </p>

              <div className="flex items-center gap-2">
                <img
                  src={ExclamationIcon}
                  className="w-6 h-6"
                  alt="Exclamation"
                />
                <p className="font-body-normal-regular text-neutral-50">
                  Completa los campos solicitados:
                </p>
              </div>

              <ul className="font-body-normal-regular list-disc pl-5 text-neutral-50">
                <li>DNI</li>
                <li>Correo</li>
              </ul>

              <p className="font-body-normal-regular text-neutral-50">
                Esta validación es obligatoria para garantizar la entrega segura
                del premio al usuario correspondiente.
              </p>

              <form className="w-full flex flex-col gap-3">
                <InputField label="Documento de identidad" placeholder="DNI" />
                <InputField
                  label="Email"
                  placeholder="Email"
                  type="email"
                  icon={
                    <IconEmail className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                  }
                  className="pl-10 sm:pl-11 w-full text-sm sm:text-base h-11"
                />
                <div className="flex flex-row mt-3">
                  <FantasyButton
                    type="button"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={handleVerifyClick}
                  >
                    Verificar
                  </FantasyButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <AccountVerificationDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </>
  );
};

export default IdentityVerificationPage;