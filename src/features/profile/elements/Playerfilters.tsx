import Personfill from "@global/assets/icons/card/person-fill.svg";
import IconPlus from "@global/assets/icons/shared/plus.svg";
import IconXmark from "@global/assets/icons/card/IconXmark.svg";
import IconLeft from "@global/assets/icons/card/chevron-left.svg";
import IconRight from "@global/assets/icons/card/chevron-right.svg";
import Users from "@global/assets/icons/card/Users.svg";
import Person from "@global/assets/icons/card/person.svg";
import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import IconSearch from "@global/assets/icons/card/search.svg?react";
import FantasyButton from "@global/components/buttons/FantasyButton";

const Playerfilters = () => {
  return (
    <div className="w-full max-w-[348px] lg:max-w-none h-auto min-h-[500px] lg:min-h-[580px] xl:h-[640px] border border-neutral-400 bg-neutral-900 rounded-xl lg:rounded-2xl xl:rounded-3xl p-4 sm:p-5 lg:p-6 flex flex-col gap-4 lg:gap-5 xl:gap-6">
      <div className="w-full flex items-center justify-between shrink-0">
        <h4 className="text-neutral-50 text-base sm:text-lg font-medium">
          Participantes
        </h4>
        <div className="flex items-center gap-2">
          <div className="h-6 min-w-[52px] bg-neutral-800 rounded-full flex items-center justify-center gap-1 px-3">
            <img className="w-3 h-3" src={Users} alt="users" />
            <p className="font-body-small-medium text-neutral-50 text-sm">24</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:gap-4 shrink-0">
        <div className="relative w-full h-14 sm:h-16 rounded-lg">
          <div
            className="absolute inset-0 rounded-lg p-px z-10 bg-linear-120 from-orange-200 to-secondary-500"
            style={{
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          ></div>
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-orange-200/20 to-secondary-500/20 z-0"></div>

          <div className="relative z-20 w-full h-full px-3 sm:px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-linear-to-r from-orange-200 to-secondary-500 flex items-center justify-center shrink-0">
                <img className="w-4 h-4" src={Person} alt="Person" />
              </div>
              <p className="font-body-normal-regular text-neutral-50 text-sm sm:text-base truncate">
                Tú
              </p>
            </div>
            <div className="relative shrink-0">
              <div
                className="absolute inset-0 rounded-lg p-px bg-linear-120 from-orange-200 to-secondary-500"
                style={{
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              ></div>
              <div className="relative px-2 py-1 sm:px-3">
                <p className="font-body-normal-regular bg-linear-120 from-orange-200 to-secondary-500 bg-clip-text text-transparent text-xs whitespace-nowrap">
                  Creador de Liga
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className="w-full">
          <AuthInput
            placeholder="Ingrese nombre de usuario"
            icon={<IconSearch className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />}
            className="pl-10 sm:pl-11 w-full text-sm sm:text-base"
          />
        </form>
        <div className="w-full flex gap-2">
          <FantasyButton
            variant="secondary"
            size="sm"
            className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3"
          >
            <img src={Personfill} alt="Personfill" className="w-4 h-4" />
          </FantasyButton>
          <FantasyButton
            variant="primary"
            size="sm"
            className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3"
          >
            <img src={IconPlus} alt="IconPlus" className="w-3 h-3" />
          </FantasyButton>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:gap-4 flex-1 overflow-y-auto min-h-[200px]">
        <div className="relative w-full h-14 sm:h-16 rounded-lg shrink-0">
          <div
            className="absolute inset-0 rounded-lg p-px z-10 bg-linear-120 from-primary-500 to-secondary-500"
            style={{
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          ></div>
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-primary-500/20 to-neutral-900/20 z-0"></div>

          <div className="relative z-20 w-full h-full px-3 sm:px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-500 flex items-center justify-center shrink-0">
                <img className="w-4 h-4 sm:w-5 sm:h-5" src={Person} alt="Person" />
              </div>
              <p className="font-body-normal-regular text-neutral-50 text-sm sm:text-base truncate">
                joselopez1995
              </p>
            </div>
            <img
              src={IconXmark}
              alt="IconXmark"
              className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80 shrink-0 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Paginación */}
      <div className="mt-auto pt-2 flex items-center justify-center shrink-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={IconLeft}
            alt="Left"
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-80 transition-opacity"
          />
          
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="font-body-extrasmall-regular text-primary-600 hover:text-primary-500 text-xs sm:text-sm transition-colors">
              01
            </button>
            
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-primary-600">
              <p className="font-body-extrasmall-regular text-neutral-50 text-xs sm:text-sm">
                02
              </p>
            </div>
            
            <button className="font-body-extrasmall-regular text-primary-600 hover:text-primary-500 text-xs sm:text-sm transition-colors">
              03
            </button>
          </div>
          
          <img
            src={IconRight}
            alt="Right"
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default Playerfilters;