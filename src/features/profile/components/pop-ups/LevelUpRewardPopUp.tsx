import { UserLevelBadge } from "@features/profile/elements/UserLevelBadge";
import LevelAwardCard from "../cards/LevelAwardCard";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Confetti from "@global/assets/icons/main/Confetti.svg";

export const LevelUpRewardPopUp = () => {
  return (
    <div className="fixed inset-0 bg-linear-to-br from-primary-500/20 to-secondary-900/20 backdrop-blur-sm flex items-center justify-center z-20">
      {/* Confeti como fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={Confetti} className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="relative z-10 flex flex-col items-center w-[611px] h-[823px] gap-10">
        <div className="w-[611px] h-[358px] flex flex-col items-center gap-3">
          <h1 className="text-neutral-50 text-4xl font-bold">¡Felicitaciones!</h1>
          <h3 className="text-neutral-50 text-2xl">Subiste de nivel</h3>
          <UserLevelBadge level="20" />
        </div>
        
        <div className="w-[611px] h-10">
          <p className="font-body-large-regular text-center text-neutral-50">
            ¡Tu pasión por el futbol te lleva más alto!
            <br />
            Sigue acumulando experiencia y demuestra que eres una leyenda
          </p>
        </div>
        
        <LevelAwardCard showTitle={true} showDivider={true} />

        <FantasyButton
          type="submit"
          variant="primary"
          size="md"
          className="w-full flex items-center justify-center gap-3"
        >
          Obtener recompensa
        </FantasyButton>
      </div>
    </div>
  );
};