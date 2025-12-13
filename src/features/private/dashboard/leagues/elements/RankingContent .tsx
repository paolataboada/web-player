// components/shared/RankingContent.tsx
import Camiseta from "@global/assets/icons/modals/Team.svg";

export const RankingContent = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-center justify-between mb-1 px-2">
        <p className="font-body-extrasmall-medium sm:font-body-normal-medium text-neutral-50 text-xs sm:text-sm">
          TU RANGO
        </p>
        <p className="font-body-extrasmall-medium sm:font-body-normal-medium text-neutral-50 text-xs sm:text-sm">
          PUNTOS
        </p>
      </div>
      
      <div className="w-full h-[60px] sm:h-[72px] mb-1 special-rounded p-px bg-linear-to-r from-primary-600 via-neutral-500 to-secondary-600">
        <div className="w-full h-full special-rounded bg-linear-to-r from-primary-700 via-neutral-900 to-secondary-900 flex items-center gap-2 sm:gap-3 px-3 sm:px-4">
          <div className="w-6 h-8 sm:w-7 sm:h-10 rounded-[88px] bg-neutral-50/12 flex items-center justify-center shrink-0">
            <p className="text-neutral-50 font-body-extrasmall-medium sm:font-body-small-medium text-xs sm:text-sm">
              16
            </p>
          </div>
          <img src={Camiseta} className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" alt="Camiseta" />
          <div className="flex flex-col justify-center flex-1 min-w-0">
            <p className="font-body-small-medium sm:font-body-large-medium bg-linear-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight truncate">
              Pedrito24
            </p>
            <p className="text-neutral-200 font-body-extrasmall-regular sm:font-body-small-regular text-xs sm:text-sm">
              Liga FANTASY
            </p>
          </div>
          <div className="flex flex-col items-end shrink-0">
            <h4 className="font-bold text-xl sm:text-2xl bg-linear-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight">
              32
            </h4>
            <p className="font-body-extrasmall-regular text-neutral-200 text-[10px] sm:text-xs">
              Goles
            </p>
          </div>
        </div>
      </div>

      <div className="h-px bg-linear-to-r from-primary-700 to-secondary-900 mb-1" />

      <div className="w-full special-rounded p-px bg-linear-to-r from-primary-600 via-neutral-500 to-secondary-600">
        <div className="w-full h-full special-rounded bg-linear-to-r from-primary-700 via-neutral-900 to-secondary-900 flex flex-col gap-0 p-3 sm:p-4">
          
          <div className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-primary-700 after:to-secondary-900">
            <div className="w-6 h-8 sm:w-7 sm:h-10 rounded-[88px] bg-neutral-50 flex items-center justify-center shrink-0">
              <p className="bg-linear-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight font-body-extrasmall-medium sm:font-body-small-medium text-xs sm:text-sm">
                1
              </p>
            </div>
            <img
              src={Camiseta}
              className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
              alt="Camiseta"
            />
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <p className="font-body-small-medium sm:font-body-large-medium bg-linear-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight truncate">
                Nico35
              </p>
              <p className="text-neutral-200 font-body-extrasmall-regular sm:font-body-small-regular text-xs sm:text-sm">
                Liga FANTASY
              </p>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <h4 className="font-bold text-xl sm:text-2xl bg-linear-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight">
                32
              </h4>
              <p className="font-body-extrasmall-regular text-neutral-200 text-[10px] sm:text-xs">
                Goles
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-primary-700 after:to-secondary-900">
            <div className="w-6 h-8 sm:w-7 sm:h-10 rounded-[88px] bg-neutral-50/12 flex items-center justify-center shrink-0">
              <p className="text-neutral-50 font-body-extrasmall-medium sm:font-body-small-medium text-xs sm:text-sm">
                2
              </p>
            </div>
            <img
              src={Camiseta}
              className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
              alt="Camiseta"
            />
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <p className="font-body-small-medium sm:font-body-large-medium text-neutral-50 truncate">
                Bianca10
              </p>
              <p className="text-neutral-200 font-body-extrasmall-regular sm:font-body-small-regular text-xs sm:text-sm">
                Liga FANTASY
              </p>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <h4 className="font-bold text-xl sm:text-2xl text-neutral-50">30</h4>
              <p className="font-body-extrasmall-regular text-neutral-200 text-[10px] sm:text-xs">
                Goles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};