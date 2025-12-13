import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import lottieLoader from "@global/assets/lotties/confetti-asset-animation.json";
import FondoLigth from "@global/assets/icons/popover/Group.svg?react";
import LogoFFantasy from "@global/assets/icons/popover/FFANTASY-LOGO.svg?react";
import { MedallaFill } from "@global/assets/icons/popover/Medalla-fill";
import { FireFill } from "@global/assets/icons/popover/fire-fill";
import FantasyButton from "@global/components/buttons/FantasyButton";
import IdentityVerificationModal from "./IdentityVerificationModal";
import { ShareOnSocialModal } from "./ShareOnSocialModal";
import { Mask } from "@global/assets/icons/popover/Mask";

interface VictoryPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: "ganador" | "sigue-participando";
  title: string;
  descripcionTemporada: string;
  puesto: string;
  premio?: string;
  puestoFinal: string;
  puntosObtenidos: string;
  botonPrincipalTexto: string;
  showFondoLigth?: boolean;
  premioImage?: string; 
  children?: React.ReactNode;
}

export const VictoryPopover = ({ 
  isOpen, 
  onClose, 
  variant = "ganador",
  title,
  descripcionTemporada,
  puesto,
  premio,
  puestoFinal,
  puntosObtenidos,
  botonPrincipalTexto,
  showFondoLigth = true,
  premioImage,
  children
}: VictoryPopoverProps) => {
  const [isIdentityModalOpen, setIsIdentityModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClaimClick = () => {
    if (isMobile) {
      navigate("/leagues/verificacion-identidad");
    } else {
      setIsIdentityModalOpen(true);
    }
  };

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  if (!isOpen) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const isGanador = variant === "ganador";
  
  const backgroundClass = isGanador 
    ? "bg-linear-to-b from-primary-600 to-primary-700" 
    : "bg-linear-to-b from-secondary-900 to-primary-700";

  const panelBackgroundClass = isGanador
    ? "bg-linear-to-r from-primary-700 via-neutral-900 to-primary-700"
    : "bg-linear-to-r from-primary-700 via-neutral-900 to-secondary-900";

  const panelBorderClass = isGanador
    ? "bg-linear-150 from-primary-600 via-neutral-500 to-primary-500"
    : "bg-linear-150 from-primary-800 via-neutral-500 to-secondary-600";

  const dividerClass = isGanador
    ? "bg-primary-600"
    : "bg-linear-to-b from-primary-700 to-secondary-900";

  return (
    <>
      <div
        className={`fixed inset-0 z-40 ${backgroundClass} opacity-92 overflow-y-auto`}
        onClick={onClose}
      />

      <div className="fixed inset-0 z-45 pointer-events-none overflow-hidden">
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
          isClickToPauseDisabled={true}
        />
      </div>

      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[187.5px] pb-8 overflow-y-auto">
        <Mask
          className="absolute top-0 left-0 w-full h-auto"
          variant={isGanador ? "primary" : "secondary"}
        />

        <div
          className="relative w-full max-w-[680px] min-h-[870px] flex flex-col items-center gap-6 px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex flex-col items-center gap-4 sm:gap-6">
            <div className="relative w-full h-[163px] sm:h-[300px] md:h-[400px] flex items-center justify-center">
              {isGanador && showFondoLigth && (
                <FondoLigth className="w-full max-w-[906px] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              )}
              <img
                src={premioImage}
                className="absolute w-[275px] h-[163px] sm:w-[500px] sm:h-[297px] md:w-[674px] md:h-[400px] object-contain"
                alt="Premio"
              />
            </div>

            <div className="flex flex-col items-center gap-2 text-center w-full">
              {isMobile ? (
                <h2 className="text-2xl font-bold text-neutral-100">
                  {title}
                </h2>
              ) : (
                <h1 className="text-3xl font-bold text-neutral-100">
                  {title}
                </h1>
              )}

              <p className="font-body-large-regular text-neutral-100 text-sm sm:text-base">
                {descripcionTemporada}
              </p>

              <LogoFFantasy className="w-32 sm:w-[147px] h-6 sm:h-8" />

              <p className="font-body-large-regular text-neutral-100 text-sm sm:text-base">
                y te posicionó en el{" "}
                <span className="text-primary-300 font-bold">
                  {puesto}
                </span>
              </p>

              {premio && (
                <p className="font-body-large-regular text-neutral-100 text-sm sm:text-base">
                  Como ganador absoluto, has obtenido{" "}
                  <strong>{premio}</strong>
                </p>
              )}

              {children}
            </div>

            <div className="w-full max-w-[348px] sm:max-w-[680px] h-auto sm:h-[140px] special-rounded p-4 sm:p-6 relative">
              <div className={`absolute inset-0 special-rounded ${panelBackgroundClass}`}></div>
              <div className={`absolute inset-0 special-rounded p-0.5 ${panelBorderClass}`}>
                <div className={`w-full h-full special-rounded ${panelBackgroundClass}`}></div>
              </div>

              <div className="relative z-10 flex flex-col gap-3 sm:gap-4 h-full">
                {isMobile ? (
                  <p className="font-body-large-medium text-neutral-100">
                    Resumen rápido
                  </p>
                ) : (
                  <h4 className="text-neutral-100">
                    Resumen rápido
                  </h4>
                )}

                <div className="flex flex-row items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-4 flex-1">
                    {isGanador ? (
                      <MedallaFill className="w-8 h-8 sm:w-9 sm:h-9" />
                    ) : (
                      <MedallaFill startColor="primary-500" endColor="secondary-500" className="w-8 h-8 sm:w-9 sm:h-9" />
                    )}

                    <div>
                      <p className="font-body-normal-regular text-neutral-200">
                        Puesto Final
                      </p>
                      {isMobile ? (
                        <h4>{puestoFinal}</h4>
                      ) : (
                        <h3>{puestoFinal}</h3>
                      )}
                    </div>
                  </div>

                  <div className={`w-px h-8 sm:h-12 ${dividerClass}`}></div>

                  <div className="flex items-center gap-2 sm:gap-4 flex-1">
                    {isGanador ? (
                      <FireFill className="w-8 h-8 sm:w-9 sm:h-9" />
                    ) : (
                      <FireFill startColor="primary-500" endColor="secondary-500" className="w-8 h-8 sm:w-9 sm:h-9" />
                    )}

                    <div className="text-center sm:text-left">
                      <p className="font-body-normal-regular text-neutral-200 text-xs sm:text-sm">
                        Puntos obtenidos
                      </p>
                      {isMobile ? (
                        <h4>{puntosObtenidos}</h4>
                      ) : (
                        <h3>{puntosObtenidos}</h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <FantasyButton
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleClaimClick}
              >
                {botonPrincipalTexto}
              </FantasyButton>

              <FantasyButton
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={handleShareClick}
              >
                Compartir logro
              </FantasyButton>
            </div>
          </div>
        </div>
      </div>

      <IdentityVerificationModal
        isOpen={isIdentityModalOpen}
        onClose={() => setIsIdentityModalOpen(false)}
      />
      <ShareOnSocialModal
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
      />
    </>
  );
};