import Lottie from "react-lottie";
import { UserLevelBadge } from "@features/private/dashboard/profile/elements/UserLevelBadge";
import LevelAwardCard from "../cards/LevelAwardCard";
import FantasyButton from "@global/components/buttons/FantasyButton";
import confettiAnimation from "@global/assets/lotties/confetti-asset-animation.json";
import IconXmark from "@global/assets/icons/modals/xmark.svg?react";
interface LevelUpRewardPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LevelUpRewardPopUp = ({
  isOpen,
  onClose,
}: LevelUpRewardPopUpProps) => {
  if (!isOpen) return null;

  const confettiOptions = {
    loop: true,
    autoplay: true,
    animationData: confettiAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="fixed inset-0 z-50 bg-linear-to-br from-primary-500/20 to-secondary-900/20 backdrop-blur-sm">
      <div
        className="relative w-full h-full overflow-y-auto flex justify-center"
        onClick={onClose}>
        <div className="absolute inset-0 pointer-events-none z-0">
          <Lottie
            options={confettiOptions}
            height="100%"
            width="100%"
            isClickToPauseDisabled
          />
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 border border-neutral-50 bg-primary-700 
             rounded-tl-[10px] rounded-tr-sm 
             rounded-br-[10px] rounded-bl-sm 
             self-end absolute top-4 right-4 z-20 
             flex items-center justify-center">
          <IconXmark className="w-4" />
        </button>
        <div
          className="
            relative z-10
            w-full
            max-w-[332px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[611px]
            flex flex-col items-center justify-center gap-4
            pt-10 sm:pt-12 lg:pt-0
            pb-6
            lg:justify-center lg:min-h-full
          "
          onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <h1 className="text-neutral-50 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
              ¡Felicitaciones!
            </h1>

            <h3 className="text-neutral-50 text-lg sm:text-xl lg:text-2xl text-center">
              Subiste de nivel
            </h3>

            <div className="mt-3">
              <UserLevelBadge
                level="20"
                size={197}
                textClassName="text-neutral-50"
              />
            </div>
          </div>

          <p className="font-body-normal-regular sm:font-body-large-regular text-center text-neutral-50 leading-relaxed px-2">
            ¡Tu pasión por el futbol te lleva más alto!
            <br />
            Sigue acumulando experiencia y demuestra que eres una leyenda
          </p>

          <div className="w-full flex justify-center">
            <LevelAwardCard showTitle showDivider />
          </div>

          <FantasyButton
            type="button"
            variant="primary"
            size="md"
            className="w-full flex items-center justify-center gap-2 text-sm sm:text-base">
            Obtener recompensa
          </FantasyButton>
        </div>
      </div>
    </div>
  );
};
