import UserIcon from "@global/assets/icons/shared/user.svg";

interface Prop {
  level?: number;
}

export const UserProfileAvatar = ({ level }: Prop) => {
  return (
    <div className="relative">
      <button className="rounded-full border border-primary-200 bg-radial-[at_75%_25%] from-primary-500 to-primary-900 to-85% w-[132px] h-[132px] flex items-center justify-center">
        <span className="text-lg">
          <img className="w-[100px] h-[100px]" src={UserIcon} alt="User" />
        </span>
      </button>
      {level && (
        <div className="absolute -bottom-2 -right-2 rounded-full p-px bg-linear-to-r from-primary-500 to-primary-700 w-[37px] h-[39px] flex items-center justify-center">
          <div className="rounded-full bg-primary-900 w-full h-full flex items-center justify-center">
            <span className="text-white font-body-large-medium">{level}</span>
          </div>
        </div>
      )}
    </div>
  );
};
