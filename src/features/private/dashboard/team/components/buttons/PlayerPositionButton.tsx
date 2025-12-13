import shirtPlusIcon from "@global/assets/icons/card/shirtPlus.svg";
import type { EPosition } from "../../enums/players.position.enum";

interface Props {
  position: EPosition;
  shirt?: string
}

export const PlayerPositionButton = ({ position, shirt }: Props) => {
  return (
    <button
      className="w-[66.4px] h-[97px] bg-neutral-50/20 rounded-xl cursor-pointer
      grid items-center justify-center place-content-center gap-1">
      <img src={shirt ? shirt : shirtPlusIcon} alt="Agregar jugador" />
      <p className="font-body-normal-medium">{position}</p>
    </button>
  );
};
