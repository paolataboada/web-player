import { UserProfileAvatar } from "@features/private/dashboard/profile/elements/UserProfileAvatar";

export const PlayerInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto gap-2">
      <UserProfileAvatar level={20} />
      <h4 className="text-center">GuillermoBarriosFC</h4>
      <div className="flex items-center gap-2">
        <p className="font-body-normal-regular text-neutral-50">Se unió</p>
        <p className="font-body-large-medium text-neutral-50">09/10/2025</p>
      </div>
    </div>
  );
};