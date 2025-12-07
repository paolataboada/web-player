import { useNavigate } from "react-router-dom";
import Arrow from "@global/assets/icons/shared/arrow-left.svg";
import Whistle from "@global/assets/icons/card/whistle.svg";
import Left from "@global/assets/icons/card/Iconleft.svg";
import { RankingContent } from "../elements/RankingContent ";

const LeagueRankingPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[380px] mx-auto">
        <div className="relative w-full h-16 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="p-1 hover:opacity-80 transition-opacity z-10">
            <img src={Arrow} alt="Back" className="w-6 h-6" />
          </button>
          <p className="text-neutral-50 text-lg font-body-large-medium absolute left-1/2 transform -translate-x-1/2">
            Liga Privada
          </p>
        </div>
        <div className="w-full h-[178px] border">ANUNCIO</div>
        <div className="w-full space-y-6 mt-6">
          <h4 className="text-neutral-50 text-center text-xl font-semibold mb-6">
            LOS MEJORES DE LA LIGA FFANTASY
          </h4>

          <RankingContent />

          <div className="relative w-full h-12 sm:h-14 rounded-tl-xl rounded-tr-lg rounded-br-xl rounded-bl-lg mb-3">
            <div
              className="absolute inset-0 rounded-tl-xl rounded-tr-lg rounded-br-xl rounded-bl-lg p-px z-10 bg-linear-120 from-primary-500 to-secondary-500"
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}></div>
            <div className="absolute inset-0 rounded-tl-xl rounded-tr-lg rounded-br-xl rounded-bl-lg bg-linear-to-r from-primary-700/70 to-secondary-900/50 z-0"></div>

            <div className="relative z-20 w-full h-full px-3 sm:px-4 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-1 min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                  <img
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    src={Whistle}
                    alt="Person"
                  />
                </div>
                <p className="font-body-normal-regular text-neutral-50 text-xs sm:text-sm md:text-base truncate">
                  Reglas y condiciones
                </p>
              </div>
              <img
                src={Left}
                alt="Left"
                className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80 shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueRankingPage;
