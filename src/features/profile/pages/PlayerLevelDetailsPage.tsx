import LevelAwardCard from "../components/cards/LevelAwardCard";
import { LevelPagination } from "../components/pagination/LevelPagination";
import { ExperienciaBar } from "../elements/ExperienciaBar";
import { UserLevelBadge } from "../elements/UserLevelBadge";

const PlayerLevelDetailsPage = () => {
  return (
    <div className="w-full max-w-[1146px] mx-auto flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
      <div className="w-full max-w-[348px] h-auto md:hidden">
        <LevelPagination />
      </div>

      <div className="w-full max-w-[348px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[970px] h-auto relative">
        <div
          className="w-full h-full p-[0.5px] z-10 bg-linear-110 from-primary-600 via-neutral-500 to-secondary-600 rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl sm:rounded-tl-4xl sm:rounded-tr-2xl sm:rounded-br-4xl sm:rounded-bl-2xl absolute"
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>
        <div className="bg-linear-110 from-primary-600 to-secondary-600 rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl sm:rounded-tl-4xl sm:rounded-tr-2xl sm:rounded-br-4xl sm:rounded-bl-2xl opacity-10 w-full h-full absolute z-10"></div>

        <div className="flex flex-col items-center pt-4 px-3 pb-4 sm:pt-6 sm:px-4 sm:pb-6 md:pt-8 md:px-6 md:pb-8 w-full h-full relative z-20">
          <div className="gap-2 sm:gap-3 md:gap-6 flex items-center justify-center mb-2 sm:mb-3">
            <h2 className="text-neutral-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl">1234.5666</h2>
            <h2 className="text-secondary-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl">XP</h2>
          </div>
          <div className="w-full max-w-[300px] sm:max-w-[450px] md:max-w-[650px] lg:max-w-[922px] h-auto gap-2 flex flex-col items-center">
            <UserLevelBadge level="20" currentXP="463,804" maxXP="660,000" />
          </div>
          <div
            className="border-[0.5px] border-primary-50 rounded-lg sm:rounded-xl w-full max-w-[300px] sm:max-w-[450px] md:max-w-[650px] lg:max-w-[922px] h-auto p-3 sm:p-4 md:p-5 lg:p-6 gap-2 sm:gap-3 flex items-center justify-center mt-3 sm:mt-4"
            style={{ backgroundColor: "#2121218F" }}
          >
            <div className="flex items-center justify-center w-full">
              <ExperienciaBar
                currentXP="463,804"
                maxXP="660,000"
                progressPercentage={20}
                size="normal"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[348px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[970px] h-auto hidden md:block">
        <LevelPagination />
      </div>

      <div className="w-full max-w-[348px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[970px] h-auto gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex flex-col items-center">

        <div className="w-full h-auto flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <div className="flex-1 h-px bg-white opacity-50" />
          <h4 className="text-xs sm:text-sm md:text-base whitespace-nowrap px-2">Recompensas de nivel</h4>
          <div className="flex-1 h-px bg-white opacity-50" />
        </div>
        
        <div className="w-full flex justify-center">
          <LevelAwardCard showTitle={false} showDivider={false} />
        </div>
      </div>
    </div>
  );
};

export default PlayerLevelDetailsPage;