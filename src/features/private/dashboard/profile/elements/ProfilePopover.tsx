import XmarkIcon from "@global/assets/icons/modals/xmark.svg?react";
import { ExperienciaBar } from "./ExperienciaBar";
import { PlayerInfo } from "../components/content/PlayerInfo";
import IconGolines from "@global/assets/icons/main/golines.svg?react";
import FondoProf from "@global/assets/icons/main/FondoCancha.svg";
import { ROUTES } from "@navigation/routes/routes";
import { useNavigate } from "react-router-dom";
import Arrow from "@global/assets/icons/shared/Arrow.svg";
import IconHeadset from "@global/assets/icons/profile/headset.svg?react";
import IconLock from "@global/assets/icons/profile/lock.svg?react";
import IconQuestion from "@global/assets/icons/profile/patch-question.svg?react";
import IconPersons from "@global/assets/icons/profile/person-man2.svg?react";
import IconArrow from "@global/assets/icons/profile/arrow.svg?react";
import ArrowRight from "@global/assets/icons/card/ArrowRight";
import FantasyButton from "@global/components/buttons/FantasyButton";

interface ProfilePopoverProps {
  isOpen: boolean;
  onClose?: () => void;
}

const profileItems = [
  {
    id: 1,
    title: "Información del usuario",
    icon: IconPersons,
    link: `${ROUTES.PROFILE}/account`,
  },
  {
    id: 2,
    title: "Cuenta y seguridad",
    icon: IconLock,
    link: `${ROUTES.PROFILE}/privacy`,
  },
  {
    id: 3,
    title: "Preguntas frecuentes",
    icon: IconQuestion,
    link: `${ROUTES.PROFILE}/faq`,
  },
  {
    id: 4,
    title: "Soporte",
    icon: IconHeadset,
    link: "#",
  },
];

const ProfilePopover = ({ isOpen, onClose }: ProfilePopoverProps) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  const handleItemClick = (link: string) => {
    if (link && link !== "#") {
      navigate(link);
    }
  };

  const handleButtonClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation();
    handleItemClick(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full sm:w-[400px] md:w-[450px] h-full bg-primary-900 shadow-2xl flex flex-col overflow-hidden">
        <div className="shrink-0 flex flex-row justify-between items-center p-4 sm:p-6">
          <p className="font-body-small-regular text-neutral-50">Perfil</p>
          <XmarkIcon
            onClick={onClose}
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer text-neutral-50"
          />
        </div>

        <div className="shrink-0 px-4 sm:px-6">
          <div
            className="w-full rounded-2xl sm:rounded-3xl border border-primary-50
                p-3 sm:p-4 md:p-6 flex flex-col justify-center bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${FondoProf})` }}
          >
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
              <button className="bg-linear-to-r from-primary-500/60 via-neutral-500 to-secondary-600 rounded-full p-px">
                <div className="flex items-center gap-1 bg-linear-to-br from-primary-500/10 to-neutral-900 rounded-full py-1 px-2">
                  <IconGolines className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm">600</span>
                </div>
              </button>
            </div>

            <PlayerInfo />
            <div
              className="border border-primary-50 rounded-xl w-full h-10 sm:h-12 p-2 sm:p-3 flex items-center mt-3 sm:mt-4"
              style={{ backgroundColor: "#2121218F" }}
            >
              <div className="flex items-center gap-2 sm:gap-3 w-full">
                <ExperienciaBar
                  currentXP="463,804"
                  maxXP="660,000"
                  progressPercentage={20}
                  size="extrasmall"
                />
                <div className="h-5 sm:h-6 w-px bg-white shrink-0" />
                <img
                  className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer shrink-0"
                  src={Arrow}
                  alt="Progress icon"
                  onClick={() => navigate(`${ROUTES.PROFILE}/level`)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 px-4 sm:px-6 py-3 sm:py-5">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              {profileItems.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <div key={item.id}>
                    <div
                      className="flex items-center justify-between py-2 sm:py-3 hover:bg-primary-800 cursor-pointer px-2 sm:px-4"
                      onClick={() => handleItemClick(item.link)}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <IconComponent className="w-5 h-5 text-neutral-50" />
                        <p className="font-action-large text-neutral-50">
                          {item.title}
                        </p>
                      </div>
                      <FantasyButton
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={(e) => handleButtonClick(e, item.link)}
                      >
                        <IconArrow className="w-4 h-4" />
                      </FantasyButton>
                    </div>
                    {index < profileItems.length - 1 && (
                      <hr className="border-primary-700" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 sm:mt-6">
              <FantasyButton
                variant="red"
                size="lg"
                className="flex items-center justify-center gap-2 w-full group"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-current group-hover:text-white transition-colors" />
                <span className="text-sm sm:text-base group-hover:text-white transition-colors">
                  Cerrar Sesión
                </span>
              </FantasyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopover;