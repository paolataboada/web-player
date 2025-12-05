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
    <div className="w-full max-w-[348px] h-auto min-h-[500px] md:h-[640px] border border-neutral-400 bg-neutral-900 rounded-xl md:rounded-3xl p-4 md:p-6 flex flex-col gap-4 md:gap-6">
      <div className="w-full flex items-center justify-between">
        <h4 className="text-neutral-50 text-base md:text-lg font-medium">Participantes</h4>
        <div className="flex items-center gap-2">
          <div className="h-6 bg-neutral-800 rounded-full flex items-center justify-center gap-1 px-2 md:px-3">
            <img className="w-3 h-3 md:w-4 md:h-4" src={Users} alt="users" />
            <p className="font-body-small-medium text-neutral-50 text-sm md:text-base">24</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:gap-4">
        <div className="relative w-full h-14 md:h-16 rounded-lg">
          <div
            className="absolute inset-0 rounded-lg p-px z-10 bg-linear-120 from-orange-200 to-secondary-500"
            style={{
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          ></div>
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-orange-200/20 to-secondary-500/20 z-0"></div>

          <div className="relative z-20 w-full h-full px-3 md:px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-linear-to-r from-orange-200 to-secondary-500 flex items-center justify-center">
                <img className="w-4 h-4 md:w-5 md:h-5" src={Person} alt="Person" />
              </div>
              <p className="font-body-normal-regular text-neutral-50 text-sm md:text-base">Tú</p>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-lg p-px bg-linear-120 from-orange-200 to-secondary-500"
                style={{
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              ></div>
              <div className="relative px-2 py-1 md:px-3 md:py-1">
                <p className="font-body-normal-regular bg-linear-120 from-orange-200 to-secondary-500 bg-clip-text text-transparent text-xs md:text-sm">
                  Creador de Liga
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className="w-full">
          <AuthInput
            placeholder="Ingrese nombre de usuario"
            icon={<IconSearch className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5" />}
            className="pl-10 md:pl-11 w-full text-sm md:text-base"
          />
        </form>
        <div className="w-full flex gap-2">
          <FantasyButton
            variant="secondary"
            size="sm"
            className="flex-1 flex items-center justify-center gap-1 md:gap-2 py-2 md:py-3"
          >
            <img src={Personfill} alt="Personfill" className="w-4 h-4" />
          </FantasyButton>
          <FantasyButton
            variant="primary"
            size="sm"
            className="flex-1 flex items-center justify-center gap-1 md:gap-2 py-2 md:py-3"
          >
            <img src={IconPlus} alt="IconPlus" className="w-3 h-3" />
          </FantasyButton>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-4 flex-1 overflow-y-auto">
        <div className="relative w-full h-14 md:h-16 rounded-lg">
          <div
            className="absolute inset-0 rounded-lg p-px z-10 bg-linear-120 from-primary-500 to-secondary-500"
            style={{
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          ></div>
          <div className="absolute inset-0 rounded-lg bg-linear-to-r from-primary-500/20 to-neutral-900/20 z-0"></div>

          <div className="relative z-20 w-full h-full px-3 md:px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-violet-500 flex items-center justify-center">
                <img className="w-4 h-4 md:w-5 md:h-5" src={Person} alt="Person" />
              </div>
              <p className="font-body-normal-regular text-neutral-50 text-sm md:text-base truncate">
                joselopez1995
              </p>
            </div>
            <img
              src={IconXmark}
              alt="IconXmark"
              className="w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Paginación */}
      <div className="mt-4 md:mt-auto flex items-center justify-center">
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src={IconLeft}
            alt="Left"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-80"
          />
          
          <div className="flex items-center gap-3 md:gap-4">
            <button className="font-body-extrasmall-regular text-primary-600 hover:text-primary-500 text-xs md:text-sm">
              01
            </button>
            
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-primary-600">
              <p className="font-body-extrasmall-regular text-neutral-50 text-xs md:text-sm">02</p>
            </div>
            
            <button className="font-body-extrasmall-regular text-primary-600 hover:text-primary-500 text-xs md:text-sm">
              03
            </button>
          </div>
          
          <img
            src={IconRight}
            alt="Right"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Playerfilters;