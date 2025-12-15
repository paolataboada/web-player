import IconGolines from "@global/assets/icons/main/golines.svg";

interface LevelAwardCardProps {
  showTitle?: boolean;
  title?: string;
  showDivider?: boolean;
}

const LevelAwardCard = ({
  showTitle = true,
  title = "Recompensas",
  showDivider = true,
}: LevelAwardCardProps) => {
  return (
    <div className="relative w-full h-auto isolate rounded-[20px] overflow-hidden mx-auto">
      <div
        className="absolute inset-0 p-0.5 z-10 rounded-[20px] bg-linear-to-r from-orange-200 to-secondary-500"
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="absolute inset-0 z-10 rounded-[20px] bg-linear-110 from-orange-200 to-secondary-500 opacity-10" />

      <div className="relative z-20 flex flex-col items-center w-full h-full gap-3 py-4">
        {showTitle && (
          <>
            <h6 className="md:hidden text-sm font-semibold z-30">{title}</h6>
            <h3 className="hidden md:block text-base md:text-lg font-semibold z-30">
              {title}
            </h3>
          </>
        )}

        {showDivider && (
          <div className="relative z-30 w-full h-3">
            <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-linear-to-r from-orange-200 to-secondary-500" />
          </div>
        )}

        <div className="flex flex-row flex-1 items-center justify-center gap-12 md:gap-[100px] w-full">
          <div className="flex flex-col items-center">
            <img className="w-10 h-10 md:w-14 md:h-14" src={IconGolines} />
            <p className="mt-2 md:hidden text-sm">+5 Golines</p>
            <h4 className="hidden md:block mt-2 text-base">+5 Golines</h4>
          </div>

          <div className="w-px h-16 md:h-[100px] bg-linear-to-b from-orange-200 to-secondary-500" />
          <div className="flex flex-col items-center">
            <img className="w-10 h-10 md:w-14 md:h-14" src={IconGolines} />
            <p className="mt-2 md:hidden text-sm">+5 Golines</p>
            <h4 className="hidden md:block mt-2 text-base">+5 Golines</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelAwardCard;
