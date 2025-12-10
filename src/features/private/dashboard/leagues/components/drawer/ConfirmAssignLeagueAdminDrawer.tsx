import { useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import FantasyButton from "@global/components/buttons/FantasyButton";
import IconAssign from "@global/assets/icons/modals/IconAssign.svg";
import PatternBg from "@global/assets/icons/modals/pattern.svg";

interface ConfirmAssignLeagueAdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmAssignLeagueAdminDrawer = ({
  isOpen,
  onClose,
}: ConfirmAssignLeagueAdminDrawerProps) => {
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
                <div className="flex flex-col items-center gap-4 px-6 pb-2 pt-2">
                  <div className="mt-2">
                    <img
                      src={IconAssign}
                      alt="Leave League"
                      className="w-14 h-14"
                    />
                  </div>

                  <div className="text-center">
                    <h4 className="text-neutral-50 mb-1">
                      Confirmar cambio de Admin
                    </h4>
                  </div>

                  <p className="font-body-normal-regular text-neutral-50 text-center">
                    ¿Seguro que quieres que Gomez0222 sea el nuevo administrador
                    de la liga?
                  </p>
                  <p className="font-body-normal-regular text-neutral-50 text-center">
                    Una vez realizado el cambio, él pasará a liderar tu equipo y
                    gestionar la liga.
                  </p>
                  <p className="font-body-normal-regular text-neutral-50 text-center">
                    Ten en cuenta que, una vez asignes al nuevo administrador,
                    dejarás de tener acceso a todas las configuraciones y
                    decisiones principales. El nuevo administrador tomará el
                    control absoluto de la liga.
                  </p>

                  <div className="flex flex-row gap-4 w-full mt-3">
                    <FantasyButton
                      type="button"
                      variant="secondary"
                      size="lg"
                      className="flex-1"
                      onClick={onClose}>
                      No, Volver
                    </FantasyButton>
                    <FantasyButton
                      type="button"
                      variant="primary"
                      size="lg"
                      className="flex-1">
                      Si, Confirmar
                    </FantasyButton>
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

export default ConfirmAssignLeagueAdminDrawer;
