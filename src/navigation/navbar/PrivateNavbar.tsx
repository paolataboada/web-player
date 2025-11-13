import { Fragment } from "react";
import IconGolines from "@global/assets/icons/main/golines.svg?react";
import IconMission from "@global/assets/icons/main/mission.svg?react";
import IconBell from "@global/assets/icons/main/notification.svg?react";
import GradientButton from "@global/components/buttons/GradientButton";
import LogoFFantasy from "@public/logos/isotipo-white.svg?react";
import { Link } from "react-router-dom";
const PrivateNavbar = () => {
  return (
    <Fragment>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="bg-linear-300 from-secondary-900 via-secondary-600 to-primary-500 opacity-10 w-full h-full absolute top-0 left-0 backdrop-blur-md"></div>
        <div className="w-full h-px absolute bottom-0 left-0 bg-linear-300 from-secondary-900 via-secondary-600 to-primary-500"></div>
        <div className="grid gap-2 relative z-10 px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 sm:gap-4">
              <Link to="/" className="flex flex-col items-center">
                <LogoFFantasy className="h-[35.63px] w-[38px]" />
                <p className="font-body-extrasmall-regular">
                  Powered by FFantasy
                </p>
              </Link>
              <GradientButton className="px-3 sm:py-2!">
                <IconGolines className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="font-body-small-medium text-center min-w-10 sm:text-base!">
                  600
                </span>
              </GradientButton>
            </div>
            <div className="flex gap-1 sm:gap-4">
              <GradientButton>
                <IconMission className="h-6 w-6" />
                <span className="hidden font-body-normal-medium text-center min-w-10 sm:flex">
                  Retos
                </span>
              </GradientButton>
              <GradientButton>
                <IconBell className="h-6 w-6" />
                <span className="hidden font-body-normal-medium text-center min-w-10 sm:flex">
                  Notificaciones
                </span>
              </GradientButton>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default PrivateNavbar;
