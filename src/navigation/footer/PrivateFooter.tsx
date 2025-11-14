import LogoFFantasy from "@public/logos/isotipo-white.svg?react";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Download from "@global/assets/icons/main/download.svg";
import Facebook from "@global/assets/icons/main/facebook.svg";
import Twitter from "@global/assets/icons/main/x-twitter-icon.svg";
import { Link } from "react-router-dom";

const PrivateFooter = () => {
  return (
    <div className="relative p-6 xl:p-10 text-neutral-50 bg-neutral-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-110 from-secondary-900 via-secondary-600/50 to-primary-500/10"></div>
      
      <div className="h-auto xl:h-[135px] flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-4">
        <Link to="/" className="flex flex-col items-center">
          <LogoFFantasy className="h-8 w-8 xl:h-[35.63px] xl:w-[38px]" />
          <p className="font-body-extrasmall-regular text-xs xl:text-sm">Powered by FFantasy</p>
        </Link>
        
        <FantasyButton
          variant="primary"
          size="lg"
          className="flex items-center justify-center gap-2 xl:gap-3 w-full xl:w-auto"
        >
          <img src={Download} alt="Download" className="w-5 h-5 xl:w-6 xl:h-6" />
          <span className="text-sm xl:text-base">Términos y condiciones</span>
        </FantasyButton>
        
        <div className="flex items-center gap-2">
          <button className="h-10 w-10 xl:h-12 xl:w-12 rounded-full flex items-center justify-center bg-primary-900 cursor-pointer">
            <img src={Facebook} alt="Facebook" className="w-5 h-5 xl:w-6 xl:h-6" />
          </button>
          <button className="h-10 w-10 xl:h-12 xl:w-12 rounded-full flex items-center justify-center bg-primary-900 cursor-pointer">
            <img src={Twitter} alt="Twitter" className="w-5 h-5 xl:w-6 xl:h-6" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 xl:mt-0">
        <p className="font-body-small-regular text-primary-600 text-xs xl:text-sm">© 2025 Powered by Trez</p>
      </div>
    </div>
  );
};

export default PrivateFooter;