import LevelAwardCard from "../components/cards/LevelAwardCard";
import { LevelPagination } from "../components/pagination/LevelPagination";
import { LevelUpRewardPopUp } from "../components/pop-ups/LevelUpRewardPopUp";
import { ExperienciaBar } from "../elements/ExperienciaBar";
import { UserLevelBadge } from "../elements/UserLevelBadge";

const PlayerLevelDetailsPage = () => {
  return (
    <div className="w-full max-w-[1146px] h-[920px] mx-auto p-10 gap-8 flex flex-col items-center">
      {/* card1 */}
      <div className="w-full max-w-[970px] h-[532px] relative">
        <div
          className="w-full h-full p-[0.5px] bg-linear-110 from-primary-600 via-neutral-500 to-secondary-600 rounded-tl-4xl rounded-tr-2xl rounded-br-4xl rounded-bl-2xl absolute"
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>

        <div className="bg-linear-110 from-primary-600/10 via-neutral-500/10 to-secondary-600/10 w-full h-full rounded-tl-4xl rounded-tr-2xl rounded-br-4xl rounded-bl-2xl absolute z-12"></div>

        {/* Contenido */}
        <div className="flex flex-col items-center pt-8 pr-6 pb-8 pl-6 w-full h-full relative z-12">
          <div className="gap-6 flex items-center justify-center mb-3">
            <h2 className="text-neutral-50">1234.5666</h2>
            <h2 className="text-secondary-200">XP</h2>
          </div>

          {/* Círculo experiencia */}
          <div className="w-full max-w-[922px] h-[282px] gap-2 flex flex-col items-center">
            <UserLevelBadge level="20" currentXP="463,804" maxXP="660,000" />
          </div>
          {/* fin circulo */}

          {/* Barra de experiencia */}
          <div
            className="border-[0.5px] border-primary-50 rounded-xl w-[922px] h-[90px] p-6 gap-3 flex items-center justify-center mt-4"
            style={{ backgroundColor: "#2121218F" }}
          >
            <div className="flex items-center justify-center w-full">
              <ExperienciaBar
                currentXP="463,804"
                maxXP="660,000"
                progressPercentage={20}
                size="normal"
                barHeight="h-5"
              />
            </div>
          </div>
          {/* fin Barra de experiencia */}
        </div>
      </div>

      {/* paginacion */}
      <div className="w-[970px] h-12">
        <LevelPagination />
      </div>
      {/* fin paginacion */}

      <div className="w-[970px] h-[232px] gap-12 flex flex-col items-center">
        <div className="w-[970px] h-6 flex items-center justify-center gap-4">
          <div className="w-[342px] h-px bg-white" />
          <h4>Recompensas de nivel</h4>
          <div className="w-[342px] h-px bg-white" />
        </div>
        <LevelAwardCard showTitle={false} showDivider={false} />
      </div>
      {/* <LevelUpRewardPopUp/> */}
    </div>
  );
};

export default PlayerLevelDetailsPage;
