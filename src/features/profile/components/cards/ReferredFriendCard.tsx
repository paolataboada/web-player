import Iconthree from "@global/assets/icons/main/three.svg";
import Fondogolines from "@global/assets/icons/main/Fondogolines.svg";

export const ReferredFriendCard = () => {
  return (
    <div
      className="w-[432px] h-[107px] rounded-3xl
            bg-linear-to-b from-secondary-600 via-primary-50 via-secondary-50 to-secondary-600 p-px "
    >
      <div
        className="w-full h-full rounded-3xl
            flex flex-row justify-between items-center bg-linear-to-b from-secondary-700 via-secondary-600 to-secondary-500 relative overflow-hidden"
      >
        <img
          className="h-full w-full absolute object-cover"
          src={Fondogolines}
          alt="fondo"
        />
      
        <div className="flex-1 pl-4 z-10">
          <p className="text-neutral-50 font-body-large-medium text-center">
            ¡Llévate +50 golines por cada amigo que recomiendes!
          </p>
        </div>

        <div className="z-20 h-full flex items-center">
          <img
            className="h-[107px]" style={{ mixBlendMode: "luminosity"}}
            src={Iconthree}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ReferredFriendCard;