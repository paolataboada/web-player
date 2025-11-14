import UserIcon from "@global/assets/icons/shared/user.svg?react";

interface Prop {
  level?: number;
}

export const UserProfileAvatar = ({ level }: Prop) => {
  return (
    <div className="relative">
      <button className="rounded-full border border-primary-200 bg-radial-[at_75%_25%] from-primary-500 to-primary-900 to-85% w-22 h-22 p-4 gap-2.5 xl:w-[132px] xl:h-[132px] flex items-center justify-center">
        <span className="text-lg">
          <UserIcon
            className="w-14 h-14 xl:w-[100px] xl:h-[100px]"
          />
        </span>
      </button>
      {level && (
        <div className="absolute bottom-0 -right-2 rounded-full p-px bg-linear-to-r from-primary-500 to-primary-700 w-7 h-7 xl:w-[37px] xl:h-[39px] flex items-center justify-center">
          <div className="rounded-full bg-primary-900 w-full h-full flex items-center justify-center">
            <span className="text-white font-body-large-medium">{level}</span>
          </div>
        </div>
      )}
    </div>
  );
};
