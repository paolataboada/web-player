import MotionContainer from "@global/containers/MotionContainer";
import { DailyRewardCard } from "../components/cards/DailyRewardCard";
import ReferredFriendCard from "../components/cards/ReferredFriendCard";
import UserDetailLink from "../elements/UserDetailLink";

// Iconos para UserDetail
import UserIcon from "@global/assets/icons/shared/user.svg";
import PadlockIcon from "@global/assets/icons/shared/padlock.svg";
import Questions from "@global/assets/icons/shared/questions.svg";
import Group from "@global/assets/icons/shared/Group.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Logout from "@global/assets/icons/shared/logout.svg";


const ProfilePage = () => {
  const userLinks = [
    { icon: UserIcon, title: "Información del usuario", link: "#" },
    { icon: PadlockIcon, title: "Cuenta y seguridad", link: "#" },
    { icon: Questions, title: "Preguntas frecuentes", link: "#" },
    { icon: Group, title: "Soporte", link: "#" },
  ];

  return (
    <MotionContainer className="flex items-start gap-12">
      <div className="w-full max-w-[618px]">Profile Section 1</div>
      
      {/* profile2 */}
      <div className="w-full max-w-[480px] h-[907px]">
        <div
          className="flex flex-col gap-6 w-full max-w-[480px] rounded-3xl border border-neutral-400 bg-neutral-900
    pt-4 pr-6 pb-4 pl-6 mb-28"
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
