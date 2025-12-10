import { useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Clock from "@global/assets/icons/modals/clock-fill.svg";
import PatternBg from "@global/assets/icons/modals/pattern.svg";

interface TermsConditionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsConditionsDrawer = ({
  isOpen,
  onClose,
}: TermsConditionsDrawerProps) => {
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
                  <h3 className="text-neutral-100">
                    Términos y Condiciones del Premio
                  </h3>

                  <div className="flex flex-col gap-5">
                    <p className="font-body-normal-regular text-neutral-300 flex items-center gap-1">
                      <img src={Clock} alt="clock" />
                      Última actualización: Noviembre 13, 2025
                    </p>

                    <p className="font-body-normal-regular">
                      Al participar en esta liga fantasy y optar por el premio
                      final, aceptas los siguientes términos y condiciones:
                    </p>

                    <div className="font-body-normal-regular">
                      <strong>a. Elegibilidad del premio</strong>
                      <p className="font-body-normal-regular">
                        El premio será otorgado únicamente al usuario que haya
                        acumulado la mayor puntuación al finalizar la temporada
                        oficial de la liga. Para ser elegible, el ganador deberá
                        haber completado su registro con datos válidos y
                        mantener una cuenta activa durante toda la competencia.
                      </p>
                    </div>

                    <div className="font-body-normal-regular">
                      <strong>b. Criterios de desempate</strong>
                      <p className="font-body-normal-regular">
                        En caso de empate en la puntuación final, se aplicarán
                        los siguientes criterios de desempate, en este orden:
                      </p>
                      <p className="font-body-normal-regular">
                        (a) mayor número de puntos obtenidos en la última fecha,
                        <br />
                        (b) mayor número de puntos obtenidos en una fecha
                        individual,
                        <br />
                        (c) orden de registro en la liga.
                      </p>

                      <div className="ml-6 mt-2">
                        <p className="font-body-normal-regular">
                          a. Entrega del premio
                        </p>
                        <p className="font-body-normal-regular">
                          El premio será entregado dentro de los 10 días hábiles
                          posteriores a la validación final del ganador. La
                          organización podrá solicitar información adicional
                          para verificar la identidad del ganador.
                        </p>
                      </div>

                      <div className="ml-6 mt-2">
                        <p className="font-body-normal-regular">
                          b. Modificaciones del premio...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4 w-full mt-2">
                    <FantasyButton
                      type="button"
                      variant="primary"
                      size="lg"
                      className="flex-1"
                      onClick={onClose}>
                      Cerrar
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

export default TermsConditionsDrawer;
