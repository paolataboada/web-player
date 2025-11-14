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
import IconGolines from "@global/assets/icons/main/golines.svg?react";
import { PlayerInfo } from "../components/content/PlayerInfo";
import { ROUTES } from "@navigation/routes/routes";
import { useNavigate } from "react-router-dom";
import FavoriteMedalsCard from "../components/cards/FavoriteMedalsCard";

const ProfilePage = () => {
  const navigate = useNavigate();

  const userLinks = [
    {
      icon: UserIcon,
      title: "Información del usuario",
      link: `${ROUTES.PROFILE}/main-details`,
    },
    {
      icon: PadlockIcon,
      title: "Cuenta y seguridad",
      link: `${ROUTES.PROFILE}/privacy-details`,
    },
    {
      icon: Questions,
      title: "Preguntas frecuentes",
      link: `${ROUTES.PROFILE}/player-faq`,
    },
    { icon: Group, title: "Soporte", link: "#" },
  ];

  return (
    <MotionContainer className="flex flex-col xl:flex-row items-start gap-6 xl:gap-12 w-full max-w-[1200px] mx-auto px-4 xl:px-0 pt-5 xl:pt-0">
      <div
        className="w-full xl:w-[618px] h-[411px] xl:h-[907px] rounded-3xl border border-primary-50
  p-6 flex flex-col justify-center gap-3 xl:gap-12 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${FondoProf})` }}
      >
        <div className="absolute top-4 right-4">
          <button className="bg-linear-to-r from-primary-500/60 via-neutral-500 to-secondary-600 rounded-full p-px">
            <div className="flex items-center gap-1 bg-linear-to-br from-primary-500/10 to-neutral-900 rounded-full py-1 px-2 xl:px-2">
              <IconGolines className="h-5 w-5 xl:h-6 xl:w-6" />
              <span>600</span>
            </div>
          </button>
        </div>

        <div className="flex flex-col gap-3 xl:gap-8 w-full">
          <PlayerInfo />
          <div
            className="border border-primary-50 rounded-xl w-full h-12 xl:h-14 p-3 xl:p-4 flex items-center"
            style={{ backgroundColor: "#2121218F" }}
          >
            <div className="flex items-center gap-3 w-full">
              <ExperienciaBar
                currentXP="463,804"
                maxXP="660,000"
                progressPercentage={20}
                size="extrasmall"
              />
              <div className="h-6 xl:h-8 w-px bg-white shrink-0" />
              <img
                className="h-4 w-4 xl:h-6 xl:w-6 cursor-pointer shrink-0"
                src={Arrow}
                alt="Progress icon"
                onClick={() => navigate(`${ROUTES.PROFILE}/player-level`)}
              />
            </div>
          </div>

          <FavoriteMedalsCard />
        </div>
      </div>
      <div className="w-full xl:w-[480px] h-auto xl:h-[907px] flex flex-col justify-between">
        <div
          className="flex flex-col gap-8 xl:gap-6 w-full h-[714px] rounded-3xl border border-neutral-400 bg-neutral-900
    p-6"
        >
          <DailyRewardCard />
          <ReferredFriendCard />
          <div className="flex flex-col gap-4 xl:gap-5">
            {userLinks.map((item, index) => (
              <UserDetailLink
                key={index}
                icon={item.icon}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <FantasyButton
          variant="primary"
          size="lg"
          className="w-full flex items-center justify-center gap-3 py-3 xl:py-4 mt-6 xl:mt-0"
        >
          <img src={Logout} alt="Logout" className="w-5 h-5 xl:w-6 xl:h-6" />
          <span>Cerrar sesión</span>
        </FantasyButton>
      </div>
    </MotionContainer>
  );
};

export default ProfilePage;
