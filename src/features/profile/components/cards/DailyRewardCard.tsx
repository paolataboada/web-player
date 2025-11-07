import IconGolines from "@global/assets/icons/main/golines.svg?react";
import Checkmark from "@global/assets/icons/main/Checkmark.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";

export const DailyRewardCard = () => {
  return (
    <div
      className="w-[432px] h-[163px] opacity-100 p-px gap-3 rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-l-lg
            bg-linear-to-r from-primary-600 via-neutral-500 to-secondary-600"
    >
      <div
        className="w-full h-full rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-l-lg pt-4 pr-2 pb-4 pl-2
            flex flex-col justify-center items-center bg-linear-to-r from-primary-700 via-neutral-900 to-secondary-900"
      >
        {/* titulo */}
        <div className="flex flex-row gap-4 items-center w-[416px] h-11 pb-4">
          <IconGolines className="h-11 w-11" />
          <h4>Recompensas Diarias</h4>

          <FantasyButton
            variant="neutral"
            size="sm"
            className="hidden sm:block"
          >
            Reclamar
          </FantasyButton>
        </div>
        {/* dias Recompensas */}
        <div className="flex flex-row gap-2 items-center w-[416px] h-[75px]">
          {/* activo */}
          <div className="w-[53.35px] h-[75.78px] p-[0.78px] rounded-tl-[15px] rounded-tr-md rounded-br-[15px] rounded-bl-md bg-linear-to-r from-primary-600 to-secondary-600 ">
            <button className="w-full h-full rounded-tl-[14.22px] rounded-tr-[5.22px] rounded-br-[14.22px] rounded-bl-[5.22px] bg-linear-to-br from-primary-500 to-secondary-700 relative flex items-center justify-center cursor-pointer">
              <img
                className="w-4 h-4 absolute -top-1 -right-1"
                src={Checkmark}
                alt="Check"
              />
              <IconGolines className="h-[50px] w-[50px] absolute opacity-20" />
              <div className="flex flex-col gap-1 z-10">
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
          <div className="w-[53.35px] h-[75.78px] p-[0.78px] rounded-tl-[15px] rounded-tr-md rounded-br-[15px] rounded-bl-md bg-linear-to-r from-primary-600 to-secondary-600">
            <button className="w-full h-full rounded-tl-[14.22px] rounded-tr-[5.22px] rounded-br-[14.22px] rounded-bl-[5.22px] bg-linear-to-br from-primary-500/10 to-neutral-900 relative flex items-center justify-center">
              <div className="flex flex-col gap-1 z-10">
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
        </div>
      </div>
    </div>
  );
};
