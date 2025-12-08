import Users from "@global/assets/icons/card/Users.svg";
import IconLeft from "@global/assets/icons/card/chevron-left.svg";
import IconRight from "@global/assets/icons/card/chevron-right.svg";
import InviteFriendsSearch from "../../elements/InviteFriendsSearch";

interface InviteFriendsCardsProps {
  onBack?: () => void;
}

const InviteFriendsCards = ({ onBack }: InviteFriendsCardsProps) => {
 
  return (
    <div className="w-full h-full flex flex-col gap-4 lg:gap-5 xl:gap-6">
      <div className="w-full items-center justify-between hidden lg:flex">
        <h4 className="text-neutral-50 text-base sm:text-lg font-medium">
          Invitar a Liga
        </h4>
        <div className="flex items-center gap-2">
          <div className="h-6 min-w-[52px] bg-neutral-800 rounded-full flex items-center justify-center gap-1 px-3">
            <img className="w-3 h-3" src={Users} alt="users" />
            <p className="font-body-small-medium text-neutral-50 text-sm">24</p>
          </div>
        </div>
      </div>

      <InviteFriendsSearch />

      <div className="mt-auto pt-2 flex items-center justify-center shrink-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="p-1 hover:opacity-80 transition-opacity">
            <img src={IconLeft} alt="Left" className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="font-body-extrasmall-regular text-primary-600 hover:text-primary-500 text-xs sm:text-sm transition-colors px-2 py-1">
              01
            </button>

            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-primary-600">
              <p className="font-body-extrasmall-regular text-neutral-50 text-xs sm:text-sm">
                02
              </p>
            </div>

            <button className="font-body-extrasmall-regular text-primary-600 hover:text-primary-500 text-xs sm:text-sm transition-colors px-2 py-1">
              03
            </button>
          </div>

          <button className="p-1 hover:opacity-80 transition-opacity">
            <img
              src={IconRight}
              alt="Right"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteFriendsCards;
