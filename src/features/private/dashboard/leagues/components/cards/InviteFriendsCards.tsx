import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import Users from "@global/assets/icons/card/Users.svg";
import IconSearch from "@global/assets/icons/card/search.svg?react";
import CopyIcon from "@global/assets/icons/card/CopyIcon.svg";
import Person from "@global/assets/icons/card/person.svg";
import PersonAdd from "@global/assets/icons/card/person-add.svg";
import IconLeft from "@global/assets/icons/card/chevron-left.svg";
import IconRight from "@global/assets/icons/card/chevron-right.svg";
import { useState } from "react";

interface InviteFriendsCardsProps {
  onBack?: () => void;
}

const InviteFriendsCards = ({ onBack }: InviteFriendsCardsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("A123-456");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 lg:gap-5 xl:gap-6">
      <div className="w-full items-center justify-between hidden lg:flex">
        <h4 className="text-neutral-50 text-base sm:text-lg font-medium">
          Invitar a Liga
        </h4>
        <div className="flex items-center gap-2">
          <div className="h-6 min-w-[52px] bg-neutral-800 rounded-full flex items-center justify-center gap-1 px-3">
            <img className="w-3 h-3" src={Users} alt="users" />
            <p className="font-body-small-medium text-neutral-50 text-sm">24</p>
          </div>
        </div>
      </div>

      <div className="relative w-full rounded-3xl">
        <div
          className="absolute inset-0 rounded-3xl p-px z-10 bg-linear-120 from-primary-500 to-secondary-500"
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}></div>
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-primary-500/70 to-neutral-900/50 z-0"></div>

        <div className="relative z-20 w-full p-4 sm:p-6">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <p className="font-body-small-regular text-neutral-50 w-full">
              Código para unirse a la Liga
            </p>

            <div className="w-full h-12 bg-primary-900 rounded-2xl px-4 flex items-center justify-between mx-auto">
              <p className="font-body-large-regular text-neutral-300 text-lg tracking-wider">
                A123-456
              </p>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-2 p-1 hover:opacity-80 transition-opacity ml-2">
                <img src={CopyIcon} alt="Copy" className="w-5 h-5" />
                {copied && (
                  <span className="text-neutral-50 text-xs">¡Copiado!</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <hr className="h-px bg-neutral-200 border-0 flex-1" />
        <span className="px-3 text-neutral-200 text-sm font-body-normal-regular">o</span>
        <hr className="h-px bg-neutral-200 border-0 flex-1" />
      </div>

      <form className="w-full">
        <AuthInput
          placeholder="Ingrese nombre de usuario"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 sm:pl-11 w-full h-12 text-sm sm:text-base"
          icon={
            <IconSearch className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
          }
        />
      </form>

      <div className="flex flex-col gap-3 lg:gap-4 flex-1 overflow-y-auto min-h-[200px]">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="relative w-full h-14 sm:h-16 rounded-lg shrink-0">
            <div
              className="absolute inset-0 rounded-lg p-px z-10 bg-linear-120 from-primary-500 to-secondary-500"
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}></div>
            <div className="absolute inset-0 rounded-lg bg-linear-to-r from-primary-500/20 to-neutral-900/20 z-0"></div>

            <div className="relative z-20 w-full h-full px-3 sm:px-4 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-500 flex items-center justify-center shrink-0">
                  <img
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    src={Person}
                    alt="Person"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-body-normal-regular text-neutral-50 text-sm sm:text-base">
                    {item === 1 && "joselopez1995"}
                    {item === 2 && "maria_gomez"}
                    {item === 3 && "carlos_rdz"}
                    {item === 4 && "ana_torres"}
                    {item === 5 && "luis_mendez"}
                  </p>
                </div>
              </div>
              <button className="p-1 hover:opacity-80 transition-opacity">
                <img
                  src={PersonAdd}
                  alt="PersonAdd"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-2 flex items-center justify-center shrink-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="p-1 hover:opacity-80 transition-opacity">
            <img src={IconLeft} alt="Left" className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="font-body-extrasmall-regular text-primary-600 hover:text-primary-500 text-xs sm:text-sm transition-colors px-2 py-1">
              01
            </button>

            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-primary-600">
              <p className="font-body-extrasmall-regular text-neutral-50 text-xs sm:text-sm">
                02
              </p>
            </div>

            <button className="font-body-extrasmall-regular text-primary-600 hover:text-primary-500 text-xs sm:text-sm transition-colors px-2 py-1">
              03
            </button>
          </div>

          <button className="p-1 hover:opacity-80 transition-opacity">
            <img
              src={IconRight}
              alt="Right"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteFriendsCards;
