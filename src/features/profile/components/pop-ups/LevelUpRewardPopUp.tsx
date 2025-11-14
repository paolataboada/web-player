import { UserLevelBadge } from "@features/profile/elements/UserLevelBadge";
import LevelAwardCard from "../cards/LevelAwardCard";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Confetti from "@global/assets/icons/main/Confetti.svg";

export const LevelUpRewardPopUp = () => {
  return (
    <div className="fixed inset-0 bg-linear-to-br from-primary-500/20 to-secondary-900/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* Contenedor de tamaño fijo para desktop */}
      <div className="relative w-full h-full max-w-[348px] max-h-[700px] sm:max-w-[500px] sm:max-h-[900px] md:max-w-[800px] md:max-h-[1000px] lg:max-w-[1140px] lg:max-h-[1247px] flex items-center justify-center">
        {/* Confeti como fondo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src={Confetti} className="w-full h-full object-cover opacity-60 sm:opacity-70 md:opacity-80" alt="confetti" />
        </div>
        
        {/* Contenido centrado */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[611px] h-auto lg:h-[823px] gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-6 sm:py-8 lg:py-0">
          {/* Sección superior con títulos y badge */}
          <div className="w-full h-auto lg:h-[358px] flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3">
            <h1 className="text-neutral-50 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center">
              ¡Felicitaciones!
            </h1>
            <h3 className="text-neutral-50 text-lg sm:text-xl md:text-xl lg:text-2xl text-center">
              Subiste de nivel
            </h3>
            <div className="mt-2 sm:mt-3 md:mt-4">
              <UserLevelBadge level="20" />
            </div>
          </div>
          
          <div className="w-full h-auto lg:h-10 px-2 sm:px-4 lg:px-0">
            <p className="font-body-normal-regular sm:font-body-large-regular text-center text-neutral-50 leading-relaxed">
              ¡Tu pasión por el futbol te lleva más alto!
              <br />
              Sigue acumulando experiencia y demuestra que eres una leyenda
            </p>
          </div>
          <div className="w-full flex justify-center">
            <LevelAwardCard showTitle={true} showDivider={true} fullSize={true} />
          </div>

          {/* Botón */}
          <div className="w-full">
            <FantasyButton
              type="submit"
              variant="primary"
              size="md"
              className="w-full flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              Obtener recompensa
            </FantasyButton>
          </div>
        </div>
      </div>
    </div>
  );
};