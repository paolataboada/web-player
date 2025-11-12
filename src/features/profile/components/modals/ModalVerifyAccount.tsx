import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import { BaseModal } from "./ModalBase";
import EmailIcon from "@global/assets/icons/modals/emailicon.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";

interface ModalVerifyAccountProps {
  isOpen: boolean;
  onClose: () => void;
  subtitle?: React.ReactNode;
}

export const ModalVerifyAccount = ({ isOpen, onClose, subtitle }: ModalVerifyAccountProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      title="Verifica tu cuenta"
      icon={EmailIcon}
      showCloseButton={false}
      onClose={onClose}
    >
      {subtitle && (
        <div className="text-center flex flex-col gap-3">
          {subtitle}
        </div>
      )}
      
      <form className="space-y-5 w-full">
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
            type="submit"
            variant="primary"
            size="md"
            className="w-full"
          >
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
    </BaseModal>
  );
};