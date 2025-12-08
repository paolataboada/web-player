// PlayerMainDetailsPage.tsx
import { useState } from "react";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { UserProfileAvatar } from "../elements/UserProfileAvatar";
import { UserDataProfileCard } from "../components/cards/UserDataProfileCard";
import UserIcon from "@global/assets/icons/shared/user.svg";
import DateIcon from "@global/assets/icons/shared/date.svg";
import EmailIcon from "@global/assets/icons/shared/email.svg";
import DocumentIcon from "@global/assets/icons/shared/document.svg";
import ShirtIcon from "@global/assets/icons/shared/shirt.svg";
import { ModalEditProfile } from "../components/modals/ModalEditProfile";

const PlayerMainDetailsPage = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="w-full max-w-[1146px] mx-auto p-4 sm:p-6 xl:p-10 gap-2.5">
      <div className="w-full max-w-[1066px] mx-auto pt-3 pb-3 gap-4 sm:gap-5 flex flex-col items-center">
        <UserProfileAvatar />
        <h3 className="text-center sm:text-lg lg:text-xl xl:text-2xl">
          GuillermoBarriosFC
        </h3>
        <FantasyButton
          variant="primary"
          size="lg"
          className="w-full sm:w-auto sm:max-w-60 h-12 sm:h-14 gap-1 flex items-center justify-center px-6"
          onClick={handleOpenEditModal}
        >
          <span>Editar perfil</span>
        </FantasyButton>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 xl:gap-8 w-full mt-4 sm:mt-6 xl:mt-8">
        <UserDataProfileCard icon={UserIcon} name="Nombre" value="Guillermo" />
        <UserDataProfileCard icon={UserIcon} name="Apellido" value="Barrios" />
        <UserDataProfileCard
          icon={UserIcon}
          name="Usuario"
          value="GuillermoBarriosFC"
        />
        <UserDataProfileCard
          icon={EmailIcon}
          name="Email"
          value="guillermobarrios@gmail.com"
        />
        <UserDataProfileCard
          icon={DateIcon}
          name="Cumpleaños"
          value="10/10/1997"
        />
        <UserDataProfileCard icon={DocumentIcon} name="DNI" value="71234567" />
        <UserDataProfileCard
          icon={ShirtIcon}
          name="Equipo"
          value="Blanquiazul"
        />
      </div>

      <ModalEditProfile
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
      />
    </div>
  );
};

export default PlayerMainDetailsPage;