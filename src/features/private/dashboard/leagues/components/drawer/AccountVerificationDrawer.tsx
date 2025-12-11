import { useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import FantasyButton from "@global/components/buttons/FantasyButton";
import AccountEmail from "@global/assets/icons/modals/AccountEmail.svg";
import PatternBg from "@global/assets/icons/modals/pattern.svg";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import { AuthLinkText } from "@features/authentication/shared/components/texts/AuthLinkText";

interface AccountVerificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountVerificationDrawer = ({
  isOpen,
  onClose,
}: AccountVerificationDrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleBarClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onClose();
    },
    [onClose]
  );

  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.y > 100) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/56 z-40"
            onClick={onClose}
          />

          <motion.div
            key="drawer"
            ref={drawerRef}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={handleDragEnd}
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-4xl border border-b-0 border-neutral-500 overflow-hidden max-h-[90vh]">
            <div className="absolute inset-0 bg-neutral-900" />
            <div className="absolute inset-0">
              <img
                src={PatternBg}
                alt="pattern background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div
                className="flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing touch-pan-y select-none"
                onClick={handleBarClick}>
                <div className="w-12 h-1.5 rounded-full bg-neutral-300/80 hover:bg-neutral-200 transition-colors"></div>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col items-center gap-6 px-6 pb-2 pt-2">
                  <div className="mt-2">
                    <img
                      src={AccountEmail}
                      alt="Leave League"
                      className="w-14 h-14"
                    />
                  </div>

                  <div className="text-center">
                    <h4 className="text-neutral-50 text-lg font-bold">
                      Verifica tu cuenta
                    </h4>
                  </div>

                  <div className="flex flex-col gap-1 text-center">
                    <p className="font-body-small-regular">
                      Escribe el código de 6 dígitos que llegó a tu correo{" "}
                    </p>
                    <p className="font-body-small-medium">
                      (guillermobarrios@example.com)
                    </p>
                    <p className="font-body-small-regular">
                      Una vez confirmado, te notificaremos la fecha, la hora y
                      el lugar donde podrás recoger tu premio.
                    </p>

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
                        <AuthLinkText
                          text="¿No recibiste el código?"
                          linkText="Reenviar código"
                          onClick={() => {}}
                          className="py-[18px] px-4 w-full text-center"
                        />
                        <FantasyButton
                          type="submit"
                          variant="primary"
                          size="md"
                          className="w-full">
                          Verificar
                        </FantasyButton>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="h-4 safe-area-bottom" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AccountVerificationDrawer;
