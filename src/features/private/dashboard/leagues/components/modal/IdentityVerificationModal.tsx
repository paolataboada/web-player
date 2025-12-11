import { useState } from "react";
import FantasyButton from "@global/components/buttons/FantasyButton";
import IconAccount from "@global/assets/icons/modals/AccountUser.svg";
import { ModalBaseLeagues } from "./league/ModalBaseLeagues";
import ExclamationIcon from "@global/assets/icons/modals/ExclamationIcon.svg";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import IconEmail from "@global/assets/icons/modals/ShareOnSocial/Correo.svg?react";
import AccountVerificationModal from "./AccountVerificationModal";

interface IdentityVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IdentityVerificationModal = ({
  isOpen,
  onClose,
}: IdentityVerificationModalProps) => {
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    setIsCodeModalOpen(true);
  };

  const handleCodeModalClose = () => {
    setIsCodeModalOpen(false);
  };

  return (
    <>
      <ModalBaseLeagues
        isOpen={isOpen}
        title="Verificación de identidad"
        icon={IconAccount}
        onClose={onClose}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={ExclamationIcon} className="w-6 h-6" alt="Exclamation" />
            <p className="font-body-normal-regular">
              Completa los campos solicitados:
            </p>
          </div>

          <ul className="font-body-normal-regular list-disc pl-5">
            <li>DNI</li>
            <li>Correo</li>
          </ul>

          <p className="font-body-normal-regular">
            Esta validación es obligatoria para garantizar la entrega segura del
            premio al usuario correspondiente.
          </p>

          <form 
            className="w-full flex flex-col gap-3" 
            onSubmit={handleVerificationSubmit}
          >
            <AuthInput 
              label="Documento de identidad" 
              placeholder="DNI" 
            />

            <AuthInput
              label="Email"
              placeholder="Email"
              type="email"
              icon={
                <IconEmail className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
              }
              className="pl-10 sm:pl-11 w-full text-sm sm:text-base h-11"
            />

            <div className="flex flex-row gap-3 w-full mt-3">
              <FantasyButton
                type="button"
                variant="secondary"
                size="lg"
                className="flex-1"
                onClick={onClose}
              >
                Cancelar
              </FantasyButton>

              <FantasyButton
                type="submit"
                variant="primary"
                size="lg"
                className="flex-1"
              >
                Verificar
              </FantasyButton>
            </div>
          </form>
        </div>
      </ModalBaseLeagues>

      <AccountVerificationModal
        isOpen={isCodeModalOpen}
        onClose={handleCodeModalClose}
      />
    </>
  );
};

export default IdentityVerificationModal;