import { UserProfileAvatar } from "@features/profile/elements/UserProfileAvatar";

export const PlayerInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full xl:w-[538px] h-[140px] xl:h-[263px] gap-2 xl:gap-1">
      <UserProfileAvatar level={20} />
      <h1 className="text-center hidden xl:block my-0 xl:my-8">GuillermoBarriosFC</h1>
      <h4 className="text-center xl:hidden my-0">GuillermoBarriosFC</h4>
      <div className="flex items-center gap-2">
        <p className="font-body-normal-regular text-neutral-50">Se unió</p>
        <p className="font-body-large-medium text-neutral-50">09/10/2025</p>
      </div>
    </div>
  );
};