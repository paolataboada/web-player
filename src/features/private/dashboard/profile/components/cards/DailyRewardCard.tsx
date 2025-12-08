import IconGolines from "@global/assets/icons/main/golines.svg?react";
import Checkmark from "@global/assets/icons/main/Checkmark.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";

export const DailyRewardCard = () => {
  return (
    <div
      className="w-full xl:w-[432px] h-[152px] xl:h-[163px] opacity-100 p-px rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-l-lg
            bg-linear-to-r from-primary-600 via-neutral-500 to-secondary-600"
    >
      <div
        className="w-full h-full rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-l-lg pt-4 xl:pt-4 pr-2 pb-4 xl:pb-4 pl-2
            flex flex-col justify-center items-center bg-linear-to-r from-primary-700 via-neutral-900 to-secondary-900 gap-6 xl:gap-3"
      >
        <div className="flex flex-row gap-4 items-center w-full xl:w-[416px] h-12 xl:h-11 p-2 xl:p-0">
  <IconGolines className="h-10 w-10 xl:h-11 xl:w-11" />
  <h4 className="flex-1">Recompensas Diarias</h4>

  <FantasyButton
    disabled
    variant="primary"
    size="sm"
  >
    Reclamar
  </FantasyButton>
</div>

        <div className="flex flex-row gap-2 items-center w-full xl:w-[416px] h-[75px]">
          {/* activo */}
          <div className="w-12 xl:w-[53.35px] h-[68px] xl:h-[75.78px] p-px rounded-tl-[15px] rounded-tr-md rounded-br-[15px] rounded-bl-md bg-linear-180 from-primary-600 to-secondary-600">
            <button className="w-full h-full rounded-tl-[14.22px] rounded-tr-[5.22px] rounded-br-[14.22px] rounded-bl-[5.22px] bg-linear-to-br from-primary-500 to-secondary-700 relative flex items-center justify-center cursor-pointer">
              <img
                className="w-3 h-3 xl:w-4 xl:h-4 absolute -top-1 -right-1"
                src={Checkmark}
                alt="Check"
              />
              <IconGolines className="h-8 w-8 xl:h-[50px] xl:w-[50px] absolute opacity-20 mix-blend-luminosity" />
              <div className="flex flex-col gap-0.5 xl:gap-1 z-10">
                <p className="text-neutral-50 font-body-extrasmall-medium text-center">
                  Lun
                </p>
                <p className="text-neutral-50 font-body-large-medium text-center">
                  13
                </p>
                <p className="text-neutral-50 font-body-extrasmall-medium text-center">
                  +10
                </p>
              </div>
            </button>
          </div>

          {/* inactivo */}
          <div className="w-12 xl:w-[53.35px] h-[68px] xl:h-[75.78px] p-px rounded-tl-[15px] rounded-tr-md rounded-br-[15px] rounded-bl-md bg-linear-to-r from-primary-600/30 to-secondary-600/60">
            <button className="w-full h-full rounded-tl-[14.22px] rounded-tr-[5.22px] rounded-br-[14.22px] rounded-bl-[5.22px] bg-linear-to-br from-primary-500/40 via-neutral-900 to-neutral-900 relative flex items-center justify-center">
              <div className="flex flex-col gap-0.5 xl:gap-1 z-10">
                <p className="text-neutral-50 font-body-extrasmall-medium text-center">
                  Lun
                </p>
                <p className="text-neutral-50 font-body-large-medium text-center">
                  13
                </p>
                <p className="text-neutral-50 font-body-extrasmall-medium text-center">
                  +10
                </p>
              </div>
            </button>
          </div>

          {/* Agrega más días según necesites */}
        </div>
      </div>
    </div>
  );
};
