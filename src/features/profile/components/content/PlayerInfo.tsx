import { UserProfileAvatar } from "@features/profile/elements/UserProfileAvatar";

export const PlayerInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <UserProfileAvatar level={20} />
      <h1 className="text-center my-8">GuillermoBarriosFC</h1>
      <div className="flex items-center gap-2">
        <p className="font-body-normal-regular text-neutral-50">Se unió</p>
        <p className="font-body-large-medium text-neutral-50">09/10/2025</p>
      </div>
    </div>
  );
};
