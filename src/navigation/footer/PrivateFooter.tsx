import LogoFFantasy from "@public/logos/isotipo-white.svg?react";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Download from "@global/assets/icons/main/download.svg";
import Facebook from "@global/assets/icons/main/facebook.svg";
import Twitter from "@global/assets/icons/main/x-twitter-icon.svg";
import { Link } from "react-router-dom";

const PrivateFooter = () => {
  return (
    <div className="relative p-10 text-neutral-50 bg-neutral-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-110 from-secondary-900 via-secondary-600/50 to-primary-500/10"></div>
      
      <div className="h-[135px] flex items-center justify-between">
        <Link to="/" className="flex flex-col items-center">
          <LogoFFantasy className="h-[35.63px] w-[38px]" />
          <p className="font-body-extrasmall-regular">Powered by FFantasy</p>
        </Link>
        <FantasyButton
          variant="primary"
          size="lg"
          className="flex items-center justify-center gap-3"
        >
          <img src={Download} alt="Download" className="w-6 h-6" />
          <span>Términos y condiciones</span>
        </FantasyButton>
        <div className="flex items-center gap-2">
          <button className="h-12 w-12 rounded-full flex items-center justify-center bg-primary-900 cursor-pointer">
            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
          </button>
          <button className="h-12 w-12 rounded-full flex items-center justify-center bg-primary-900 cursor-pointer">
            <img src={Twitter} alt="Twitter" className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <p className="font-body-small-regular text-primary-500">© 2025 Powered by Trez</p>
      </div>
    </div>
  );
};

export default PrivateFooter;