import { UserLevelBadge } from "@features/profile/elements/UserLevelBadge"

export const LevelUpRewardPopUp = () => {
  return (
    <div>confeti
      <div className="fixed inset-0 bg-linear-to-br from-primary-500/20 to-secondary-900/20 backdrop-blur-sm flex items-center justify-center z-20">
        <div className="flex flex-col items-center w-[611px] h-[823px] border gap-10">
          <div className="w-[611px] h-[358px] border flex flex-col items-center gap-3">
            <h1 className="text-neutral-50">¡Felicitaciones!</h1>
            <h3 className="text-neutral-50">Subiste de nivel</h3>
            <UserLevelBadge level="20" />
          </div>
          <div className="w-[611px] h-10 border">
            <p className="font-body-large-regular text-center">
              ¡Tu pasión por el futbol te lleva más alto!<br/>
              Sigue acumulando experiencia y demuestra que eres una leyenda
            </p>
          </div>
          
        </div>
      </div></div>
  )
}
