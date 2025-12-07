import React from "react";
import Fondo from "@global/assets/icons/card/fondo3.svg";

interface LeaguesPlayerCardProps {
  title: string;
  icon: string;
  color:
    | "rosa"
    | "verde"
    | "celeste"
    | "amarillo"
    | "azul"
    | "morado"
    | "rojo"
    | "negro";
}

const LeaguesPlayerCard = ({ title, icon, color }: LeaguesPlayerCardProps) => {
  const colorConfig = {
    rosa: {
      gradient: "from-pink-200 via-pink-900 to-pink-200",
      overlay: "from-pink-500 to-pink-900",
      banner: "bg-pink-500",
    },
    verde: {
      gradient: "from-green-200 via-green-900 to-green-200",
      overlay: "from-green-500 to-green-900",
      banner: "bg-green-500",
    },
    celeste: {
      gradient: "from-sky-200 via-sky-900 to-sky-200",
      overlay: "from-sky-500 to-sky-900",
      banner: "bg-sky-500",
    },
    amarillo: {
      gradient: "from-amber-200 via-amber-900 to-amber-200",
      overlay: "from-amber-500 to-amber-900",
      banner: "bg-amber-500",
    },
    azul: {
      gradient: "from-blue-200 via-blue-900 to-blue-200",
      overlay: "from-blue-500 to-blue-900",
      banner: "bg-blue-500",
    },
    morado: {
      gradient: "from-violet-200 via-violet-900 to-violet-200",
      overlay: "from-violet-500 to-violet-900",
      banner: "bg-violet-500",
    },
    rojo: {
      gradient: "from-red-200 via-red-900 to-red-200",
      overlay: "from-red-500 to-red-900",
      banner: "bg-red-500",
    },
    negro: {
      gradient: "from-neutral-200 via-neutral-900 to-neutral-200",
      overlay: "from-neutral-500 to-neutral-900",
      banner: "bg-neutral-500",
    },
  };

  const currentColor = colorConfig[color];

  return (
    <div
      className={`w-full h-[84px] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg
                   p-px bg-linear-to-br ${currentColor.gradient}`}>
      <div className="w-full h-full rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg overflow-hidden relative">
        <img
          src={Fondo}
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className={`absolute inset-0 w-full h-full bg-linear-to-b ${currentColor.overlay} opacity-70`}
        />

        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    w-[316px] h-9 ${currentColor.banner} skew-x-[-30deg] rounded`}>
          <div
            className="relative flex flex-row items-center justify-between px-4 h-full 
                      -skew-x-[-30deg] transform">
            <img className="w-6 h-6" src={icon} alt="icon" />
            <p className="font-body-extrasmall-medium text-neutral-900 absolute left-1/2 transform -translate-x-1/2">
              {title}
            </p>
            <img className="w-6 h-6" src={icon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaguesPlayerCard;
