import IconGolines from "@global/assets/icons/main/golines.svg?react";
import Fondogolines from "@global/assets/icons/main/Fondogolines.svg";

export const ReferredFriendCard = () => {
  return (
    <div
      className="w-[432px] h-[107px] rounded-2xl
      bg-linear-to-b from-secondary-600 via-primary-50 to-secondary-600 p-px "
    >
      <div
        className="w-full h-full rounded-2xl flex flex-row justify-between items-center relative overflow-hidden
        bg-linear-[190deg] from-secondary-900 via-secondary-600 to-secondary-600"
      >
        <img
          className="h-full w-full absolute object-cover"
          src={Fondogolines}
          alt="fondo"
        />

        <div className="flex-1 pl-4 z-10">
          <p className="font-body-large-medium text-center text-neutral-50 max-w-[280px]">
            ¡Llévate +50 golines por cada amigo que recomiendes!
          </p>
        </div>

        <IconGolines className="rotate-27 absolute top-10 right-4 w-[70px] h-[70px] mix-blend-luminosity" />
        <IconGolines className="rotate-27 absolute -top-4 right-px w-[70px] h-[70px] mix-blend-luminosity" />
        <IconGolines className="rotate-27 absolute top-0 right-[53.5px] w-[70px] h-[70px] mix-blend-luminosity" />
      </div>
    </div>
  );
};

export default ReferredFriendCard;