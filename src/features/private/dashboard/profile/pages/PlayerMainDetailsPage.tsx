import { useState, useEffect } from "react";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { UserProfileAvatar } from "../elements/UserProfileAvatar";
import { UserDataProfileCard } from "../components/cards/UserDataProfileCard";
import UserIcon from "@global/assets/icons/profile/person-fill-lock2.svg";
import DateIcon from "@global/assets/icons/profile/Subtract.svg";
import EmailIcon from "@global/assets/icons/profile/Email.svg";
import DocumentIcon from "@global/assets/icons/profile/document.svg";
import ShirtIcon from "@global/assets/icons/profile/Shirt.svg";
import { ModalEditProfile } from "../components/modals/ModalEditProfile";
import { useNavigate } from "react-router-dom";
import IconArrow from "@global/assets/icons/shared/arrow-left.svg?react";
import { ROUTES } from "@navigation/routes/routes";
import { BreadCrumb } from "@global/components/navbars/BreadCrumb";
import MotionContainer from "@global/containers/MotionContainer"

const PlayerMainDetailsPage = () => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleEditProfile = () => {
    if (isDesktop) {
      setIsEditModalOpen(true);
    } else {
      navigate(`${ROUTES.PROFILE}/edit`);
    }
  };

  const handleBack = () => navigate(-1);

  const Content = (
    <MotionContainer className="flex-1 flex flex-col px-4 sm:px-6 pb-5">
      {isDesktop && (
        <div className="hidden sm:block mb-4">
          <FantasyButton type="button" variant="secondary" size="lg" onClick={handleBack} className="w-auto">
            <IconArrow className="w-5 h-5" />
          </FantasyButton>
        </div>
      )}

      <div className="w-full max-w-[1066px] mx-auto flex-1 flex flex-col">
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <UserProfileAvatar />
          <h3 className="text-center text-base sm:text-xl lg:text-2xl text-neutral-50">
            GuillermoBarriosFC
          </h3>
          <FantasyButton
            variant="primary"
            size="lg"
            className="w-full sm:w-auto sm:max-w-60 h-12 sm:h-14 gap-1 flex items-center justify-center px-6"
            onClick={handleEditProfile}
          >
            <span>Editar perfil</span>
          </FantasyButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 w-full">
          <UserDataProfileCard icon={UserIcon} name="Nombre" value="Guillermo" />
          <UserDataProfileCard icon={UserIcon} name="Apellido" value="Barrios" />
          <UserDataProfileCard icon={UserIcon} name="Usuario" value="GuillermoBarriosFC" />
          <UserDataProfileCard icon={EmailIcon} name="Email" value="guillermobarrios@gmail.com" />
          <UserDataProfileCard icon={DateIcon} name="Cumpleaños" value="10/10/1997" />
          <UserDataProfileCard icon={DocumentIcon} name="DNI" value="71234567" />
          <UserDataProfileCard icon={ShirtIcon} name="Equipo" value="Blanquiazul" />
        </div>
      </div>
    </MotionContainer>
  );

  return (
    <>
      {isDesktop ? (
        <div className="flex flex-col h-auto w-full max-w-[1146px] mx-auto">
          {Content}
          <ModalEditProfile isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
        </div>
      ) : (
        <div className="w-full min-w-screen h-min -m-4 overflow-x-hidden md:m-0 md:min-w-0 md:h-full">
          <BreadCrumb title="Perfil" to={ROUTES.PROFILE} />
          {Content}
        </div>
      )}
    </>
  );
};

export default PlayerMainDetailsPage;
