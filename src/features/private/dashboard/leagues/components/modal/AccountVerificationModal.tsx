import FantasyButton from "@global/components/buttons/FantasyButton";
import { ModalBaseLeagues } from "./league/ModalBaseLeagues";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import AccountEmail from "@global/assets/icons/modals/AccountEmail.svg";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";

interface AccountVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountVerificationModal = ({
  isOpen,
  onClose,
}: AccountVerificationModalProps) => {
  return (
    <ModalBaseLeagues
      isOpen={isOpen}
      title="Verifica tu cuenta"
      icon={AccountEmail}
      onClose={onClose}>
      <div className="flex flex-col gap-1 text-center">
        <p className="font-body-normal-regular">Escribe el código de 6 dígitos que llegó a tu correo </p>
        <p className="font-body-normal-medium">(guillermobarrios@example.com)</p>
        <p className="font-body-normal-regular">Una vez confirmado, te notificaremos la fecha, la hora y el lugar donde podrás recoger tu premio.</p>
        
        <form className="space-y-5 w-full mt-3">
          <div className="grid gap-1.5">
            <div className="flex items-center font-body-normal-regular">
              Código de verificación
            </div>
            <div className="grid grid-cols-6 gap-2 w-full">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <AuthInput
                  key={i}
                  id={`code-${i}`}
                  type="text"
                  maxLength={1}
                  placeholder="0"
                  className="text-center"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <FantasyButton
              type="button"
              variant="primary"
              size="md"
              className="w-full">
              Verificar
            </FantasyButton>
            <AuthLinkText
              text="¿No recibiste el código?"
              linkText="Reenviar código"
              onClick={() => {}}
              className="py-[18px] px-4 w-full text-center"
            />
          </div>
        </form>
      </div>
    </ModalBaseLeagues>
  );
};

export default AccountVerificationModal;
