import Padlock from "@global/assets/icons/shared/padlock.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import TrashIcon from "@global/assets/icons/shared/trash.svg";
import { UserDataProfileCard } from "../components/cards/UserDataProfileCard";

const PlayerPrivacyDetailsPage = () => {
  return (
    <div className="w-full mx-auto p-10 flex flex-col justify-between">
      <div className="flex flex-col items-center gap-8">
        <h3>Información de inicio de sesión</h3>
        <UserDataProfileCard icon={Padlock} name="Cambiar contraseña" value="*****" className="w-full max-w-[517px] h-[74px]" />
      </div>

      <div className="flex justify-center">
        <FantasyButton
          variant="red"
          size="lg"
          className="flex items-center justify-center"
        >
          <img src={TrashIcon} alt="Trash" className="w-6 h-6" />
          <span>Eliminar cuenta</span>
        </FantasyButton>
      </div>
    </div>
  );
};

export default PlayerPrivacyDetailsPage;
