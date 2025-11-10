import MotionContainer from "@global/containers/MotionContainer";
import { DailyRewardCard } from "../components/cards/DailyRewardCard";
import ReferredFriendCard from "../components/cards/ReferredFriendCard";
import UserDetailLink from "../elements/UserDetailLink";
import FondoProf from "@global/assets/icons/main/FondoCancha.svg";
import Arrow from "@global/assets/icons/shared/Arrow.svg";

// Iconos para UserDetail
import UserIcon from "@global/assets/icons/shared/user.svg";
import PadlockIcon from "@global/assets/icons/shared/padlock.svg";
import Questions from "@global/assets/icons/shared/questions.svg";
import Group from "@global/assets/icons/shared/Group.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Logout from "@global/assets/icons/shared/logout.svg";

import { ExperienciaBar } from "../elements/ExperienciaBar";
import { FavoriteMedalsCard } from "../components/cards/FavoriteMedalsCard";
import GradientButton from "@global/components/buttons/GradientButton";
import IconGolines from "@global/assets/icons/main/golines.svg?react";
import { PlayerInfo } from "../components/content/PlayerInfo";
import { ROUTES } from "@navigation/routes/routes";

const ProfilePage = () => {
  const userLinks = [
    { icon: UserIcon, title: "Información del usuario", link: `${ROUTES.PROFILE}/main-details` },
    { icon: PadlockIcon, title: "Cuenta y seguridad", link: `${ROUTES.PROFILE}/privacy-details` },
    { icon: Questions, title: "Preguntas frecuentes", link: "#" },
    { icon: Group, title: "Soporte", link: "#" },
  ];

  return (
    <MotionContainer className="flex items-start gap-12">
      {/* profile1 */}
      <div
        className="w-full max-w-[618px] h-[907px] rounded-3xl border border-primary-50
    p-10 flex flex-col justify-center gap-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${FondoProf})` }}
      >
        <div className="absolute top-4 right-4">
          <GradientButton className="px-3 h-10">
            <IconGolines className="h-6 w-6" />
            <span className="font-body-small-medium text-center min-w-10 sm:text-base!">
              600
            </span>
          </GradientButton>
        </div>

        <div className="flex flex-col gap-8">
          <PlayerInfo />
          <div
            className="border border-primary-50 rounded-xl w-[538px] h-14 pt-3 pr-4 pb-3 pl-4 flex items-center"
            style={{ backgroundColor: "#2121218F" }}
          >
            <div className="flex items-center gap-3 w-full">
             <ExperienciaBar />
              <div className="h-8 w-px bg-white" />
              <img
                className="h-6 w-6 cursor-pointer"
                src={Arrow}
                alt="Progress icon"
              />
            </div>
          </div>
          
          <FavoriteMedalsCard />
        </div>
      </div>
      {/* fin de profile2 */}

      {/* profile2 */}
      <div className="w-full max-w-[480px] h-[907px]">
        <div
          className="flex flex-col gap-6 w-full max-w-[480px] rounded-3xl border border-neutral-400 bg-neutral-900
    pt-4 pr-6 pb-4 pl-6 mb-34"
        >
          <DailyRewardCard />
          <ReferredFriendCard />
          {userLinks.map((item, index) => (
            <UserDetailLink
              key={index}
              icon={item.icon}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
        <FantasyButton
          variant="primary"
          size="lg"
          className="w-full flex items-center justify-center gap-3"
        >
          <img src={Logout} alt="Logout" className="w-6 h-6" />
          <span>Cerrar sesión</span>
        </FantasyButton>
      </div>
    </MotionContainer>
  );
};

export default ProfilePage;
