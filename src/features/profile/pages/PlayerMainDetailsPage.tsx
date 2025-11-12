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
    <div className="w-full max-w-[1146px] mx-auto p-10 gap-2.5">
      <div className="w-full max-w-[1066px] mx-auto pt-3 pb-3 gap-5 flex flex-col items-center">
        <UserProfileAvatar />
        <h3 className="text-center text-lg sm:text-xl lg:text-2xl">GuillermoBarriosFC</h3>
        <FantasyButton
          variant="primary"
          size="lg"
          className="w-full max-w-60 h-14 gap-1 flex items-center justify-center"
          onClick={handleOpenEditModal}
        >
          <span>Editar perfil</span>
        </FantasyButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 w-full mt-6 sm:mt-8 ">
        <UserDataProfileCard
          icon={UserIcon}
          name="Nombre"
          value="Guillermo"
        />
        <UserDataProfileCard
          icon={UserIcon}
          name="Apellido"
          value="Barrios"
        />
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
        <UserDataProfileCard
          icon={DocumentIcon}
          name="DNI"
          value="71234567"
        />
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