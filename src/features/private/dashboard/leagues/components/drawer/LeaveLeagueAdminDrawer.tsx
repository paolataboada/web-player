import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import FantasyButton from "@global/components/buttons/FantasyButton";
import DeleteLeague from "@global/assets/icons/modals/LeaveMember.svg";
import PatternBg from "@global/assets/icons/modals/pattern.svg";
import DeleteLeagueAdminModal from "../modal/config/DeleteLeagueAdminModal";

interface LeaveLeagueAdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeaveLeagueAdminDrawer = ({
  isOpen,
  onClose,
}: LeaveLeagueAdminDrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  
  const [isDeleteLeagueAdminOpen, setIsDeleteLeagueAdminOpen] = useState(false);

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

  const handleOpenDeleteLeagueAdmin = () => {
    setIsDeleteLeagueAdminOpen(true);
  };

  const handleCloseDeleteLeagueAdmin = () => {
    setIsDeleteLeagueAdminOpen(false);
  };

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
    <>
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
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-4xl border border-b-0 border-neutral-500 overflow-hidden max-h-[90vh]"
            >
              <div className="absolute inset-0 bg-neutral-900" />
              <div className="absolute inset-0">
                <img
                  src={PatternBg}
                  alt="pattern background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-900/50" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div
                  className="flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing touch-pan-y select-none"
                  onClick={handleBarClick}
                >
                  <div className="w-12 h-1.5 rounded-full bg-neutral-300/80 hover:bg-neutral-200 transition-colors"></div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="flex flex-col items-center gap-6 px-6 pb-8 pt-2">
                    <div className="mt-2">
                      <img
                        src={DeleteLeague}
                        alt="Leave League"
                        className="w-14 h-14"
                      />
                    </div>

                    <div className="text-center">
                      <h4 className="text-neutral-50 text-lg font-bold mb-1">
                        Salir de la liga
                      </h4>
                    </div>

                    <p className="font-body-normal-regular text-neutral-50 text-center">
                      ¿Estás pensando en dejar tu liga?
                    </p>
                    <p className="font-body-normal-regular text-neutral-50  text-center">
                      Capitán, si abandonas el equipo ahora tendrás que elegir a
                      alguien que tome tu lugar… o decidir si la liga llega a su
                      final. ¿Cómo quieres jugar esta jugada?
                    </p>

                    <div className="flex flex-row gap-4 w-full mt-6">
                      <FantasyButton
                        type="button"
                        variant="secondary"
                        size="lg"
                        className="flex-1"
                        onClick={onClose}
                      >
                        No, Volver
                      </FantasyButton>
                      <FantasyButton
                        type="button"
                        variant="primary"
                        size="lg"
                        className="flex-1"
                        onClick={handleOpenDeleteLeagueAdmin}
                      >
                        Cambiar administrador
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

      <DeleteLeagueAdminModal
        isOpen={isDeleteLeagueAdminOpen}
        onClose={handleCloseDeleteLeagueAdmin}
      />
    </>
  );
};

export default LeaveLeagueAdminDrawer;