import IconGolines from "@global/assets/icons/main/golines.svg";

interface LevelAwardCardProps {
  showTitle?: boolean;
  title?: string;
  showDivider?: boolean;
  fullSize?: boolean;
}

const LevelAwardCard = ({ 
  showTitle = true, 
  title = "Recompensas", 
  showDivider = true 
}: LevelAwardCardProps) => {
  return (
    <div className="relative w-[348px] h-[126px] md:w-[669px] md:h-40">
      <div
        className="w-full h-full p-0.5 z-10 bg-linear-to-r from-orange-200 to-secondary-500 rounded-[20px] absolute"
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      ></div>

      <div className="bg-linear-110 from-orange-200 to-secondary-500 rounded-[20px] opacity-10 w-full h-full absolute z-10"></div>

      <div className="flex flex-col items-center justify-center w-full h-full relative z-20 gap-2 md:gap-4">
 
        {showTitle && (
          <div className="flex justify-center items-center">
            <h3 className="text-sm md:text-base">{title}</h3>
          </div>
        )}

        {showDivider && (
          <div className="w-full h-px bg-linear-to-r from-orange-200 to-secondary-500"></div>
        )}
       
        <div className="flex items-center justify-center gap-8 md:gap-[100px]">
          <div className="w-[100px] h-[60px] md:w-[134px] md:h-20 flex flex-col items-center justify-center">
            <img className="w-10 h-10 md:w-14 md:h-14" src={IconGolines} alt="golines" />
            <p className="font-body-normal-regular mt-1 md:hidden">+5 Golines</p>
            <h4 className="hidden md:block mt-2">+5 Golines</h4>
          </div>

          <div className="w-px h-[102px] md:h-[120px] bg-linear-to-b from-orange-200 to-secondary-500"></div>

          <div className="w-[100px] h-[60px] md:w-[134px] md:h-20 flex flex-col items-center justify-center">
             <img className="w-10 h-10 md:w-14 md:h-14" src={IconGolines} alt="golines" />
            <p className="font-body-normal-regular mt-1 md:hidden">+5 Golines</p>
            <h4 className="hidden md:block mt-2">+5 Golines</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelAwardCard;