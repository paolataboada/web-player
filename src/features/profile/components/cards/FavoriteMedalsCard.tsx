import IconEdit from "@global/assets/icons/shared/edit-pencil.svg";
import IconPlus from "@global/assets/icons/shared/plus.svg";
import Arrow from "@global/assets/icons/shared/Arrow.svg";

export const FavoriteMedalsCard = () => {
  return (
    <div className="border-[0.5px] border-primary-50 rounded-xl w-[538px] h-[136px] pt-3 pr-4 pb-3 pl-4" style={{ backgroundColor: '#2121218F' }}>
      <div className="flex items-center justify-center pb-2">
        <p className="font-body-small-medium">
          Medallas Fijadas
        </p>
        <button className="ml-2 cursor-pointer">
          <img className="w-4 h-4" src={IconEdit} alt="Editar medallas" />
        </button>
      </div>

      <div className="flex flex-row gap-8 justify-center">
        <button className="rounded-full border-[0.5px] border-primary-50 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-primary-50/10 transition-colors">
          <img className="w-[17px]" src={IconPlus} alt="Agregar medalla" />
        </button>
      </div>

      
      <hr className="border border-white mt-3 mb-2" />

      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <p className="font-body-small-medium">Medallas</p>
              <span className="w-9 h-5 rounded-full font-body-extrasmall-regular flex items-center justify-center" style={{ backgroundColor: '#4A4A4A30' }}>
                x24
              </span>
            </div>
          </div>
        </div>
        <div className="h-8 w-px bg-white" />
            <img className="h-6 w-6 cursor-pointer" src={Arrow} alt="Progress icon" />
      </div>
    </div>
  )
}