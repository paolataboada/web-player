import ArrowLeft from "@global/assets/icons/shared/arrow-left.svg";
import Arrowright from "@global/assets/icons/shared/Arrow.svg";
export const LevelPagination = () => {
  return (
    <div className=" gap-4 flex items-center justify-center">
        <img
          className="h-8 w-8 cursor-pointer filter-primary-500"
          src={ArrowLeft}
          alt="Arrow"
        />
        <div className="rounded-full p-0.5 bg-linear-to-r from-secondary-500 to-primary-500 w-[49px] h-12 flex items-center justify-center">
          <div className="rounded-full bg-primary-900 w-full h-full flex items-center justify-center">
            <h4 className="text-primary-500">18</h4>
          </div>
        </div>

        <div className="rounded-full p-0.5 bg-linear-to-r from-primary-500 to-primary-700 w-[49px] h-12 flex items-center justify-center shadow-[0px_0px_5px_0px_var(--color-primary-50)]">
          <div className="rounded-full bg-primary-600 w-full h-full flex items-center justify-center">
            <h4 className="text-neutral-50">28</h4>
          </div>
        </div>

        <div className="rounded-full border-2 border-primary-700 w-[49px] h-12 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <h4 className="text-neutral-50">21</h4>
          </div>
        </div>
        <img
          className="h-8 w-8 cursor-pointer filter-primary-500"
          src={Arrowright}
          alt="Arrow"
        /></div>
  )
}
