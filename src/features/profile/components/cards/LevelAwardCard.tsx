import IconGolines from "@global/assets/icons/main/golines.svg";

interface LevelAwardCardProps {
  showTitle?: boolean;
  title?: string;
  showDivider?: boolean;
}

const LevelAwardCard = ({ 
  showTitle = true, 
  title = "Recompensas", 
  showDivider = true 
}: LevelAwardCardProps) => {
  return (
    <div className="relative w-[611px] h-[257px]">
      {/* Borde con gradiente y máscara */}
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

      <div className="flex flex-col items-center justify-center w-full h-full relative z-20 gap-4">
 
        {showTitle && (
          <div className="flex justify-center items-center">
            <h3>{title}</h3>
          </div>
        )}

        {showDivider && (
          <div className="w-[611px] h-px bg-linear-to-r from-orange-200 to-secondary-500"></div>
        )}
       
        <div className="flex items-center justify-center gap-[100px]">
          <div className="w-[134px] h-[120px] flex flex-col items-center justify-center">
            <img className="w-14 h-14" src={IconGolines} alt="golines" />
            <h4 className="mt-2">+5 Golines</h4>
          </div>

          <div className="w-px h-24 bg-linear-to-b from-orange-200 to-secondary-500"></div>

          <div className="w-[134px] h-[120px] flex flex-col items-center justify-center">
            <img className="w-14 h-14" src={IconGolines} alt="golines" />
            <h4 className="mt-2">+5 Golines</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelAwardCard;