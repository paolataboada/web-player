import Fondoprimary from "@global/assets/icons/card/Gradient.svg";

interface LeagueCardProps {
  type: string;
  id: string;
  title: string;
  creator: string;
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

const LeagueCard = ({
  type,
  id,
  title,
  creator,
  icon,
  color,
}: LeagueCardProps) => {
  const colorConfig = {
    rosa: {
      gradient: "from-primary-200 via-primary-900 to-primary-200",
      border: "from-primary-700 to-primary-500",
      text: "text-primary-200",
      shadow: "drop-shadow(0px 0px 16px rgba(255, 45, 116, 0.72))",
      button: "from-primary-500 to-secondary-500",
      overlay: "",
    },
    verde: {
      gradient: "from-green-200 via-green-900 to-green-200",
      border: "from-green-900 to-green-500",
      text: "text-green-200",
      shadow: "",
      button: "from-green-500 to-green-900",
      overlay: "from-green-500 to-green-900",
    },
    celeste: {
      gradient: "from-skyblue-200 via-skyblue-900 to-skyblue-200",
      border: "from-skyblue-900 to-skyblue-500",
      text: "text-skyblue-200",
      shadow: "",
      button: "from-skyblue-500 to-skyblue-900",
      overlay: "from-skyblue-500 to-skyblue-900",
    },
    amarillo: {
      gradient: "from-amber-200 via-amber-900 to-amber-200",
      border: "from-amber-900 to-amber-500",
      text: "text-amber-200",
      shadow: "",
      button: "from-amber-500 to-amber-900",
      overlay: "from-amber-500 to-amber-900",
    },
    azul: {
      gradient: "from-blue-200 via-blue-900 to-blue-200",
      border: "from-blue-900 to-blue-500",
      text: "text-blue-200",
      shadow: "",
      button: "from-blue-500 to-blue-900",
      overlay: "from-blue-500 to-blue-900",
    },
    morado: {
      gradient: "from-violet-200 via-violet-900 to-violet-200",
      border: "from-violet-900 to-violet-500",
      text: "text-violet-200",
      shadow: "",
      button: "from-violet-500 to-violet-900",
      overlay: "from-violet-500 to-violet-900",
    },
    rojo: {
      gradient: "from-red-200 via-red-900 to-red-200",
      border: "from-red-900 to-red-500",
      text: "text-red-200",
      shadow: "",
      button: "from-red-500 to-red-900",
      overlay: "from-red-500 to-red-900",
    },
    negro: {
      gradient: "from-neutral-200 via-neutral-900 to-neutral-200",
      border: "from-neutral-900 to-neutral-500",
      text: "text-neutral-200",
      shadow: "",
      button: "from-neutral-500 to-neutral-200",
      overlay: "from-neutral-500 to-neutral-900",
    },
  };

  const currentColor = colorConfig[color];

  return (
    <div className="w-[232px] h-[171px] sm:w-[348px] sm:h-[171px] md:w-[368px] md:h-[198px] relative">
      <div
        className={`w-[232px] h-[155px] sm:w-[348px] sm:h-[155px] md:w-[368px] md:h-[174px]
                   p-px rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg
                   bg-linear-to-br ${currentColor.gradient}`}
        style={
          currentColor.shadow ? { filter: currentColor.shadow } : undefined
        }>
        <div
          className="w-full h-full rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg 
                       pt-4 pr-5 pb-8 pl-5 sm:pt-3 sm:pr-4 sm:pb-6 sm:pl-4 md:pt-3 md:pr-4 md:pb-6 md:pl-4
                       relative overflow-hidden">
          <img
            src={Fondoprimary}
            alt="fondo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div 
            className={`absolute inset-0 w-full h-full bg-linear-to-b ${currentColor.overlay} opacity-70`}
          />

          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.56) 100%)",
            }}
          />

          <div
            className="absolute top-0 left-0 w-full h-[40%]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          />

          <div
            className="absolute bottom-0 left-0 w-full h-[40%]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)",
            }}
          />

          <div className="relative flex flex-col gap-4 sm:gap-3 h-full">
            <div className="w-[200px] sm:w-[308px] md:w-[320px] h-[33px] flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-body-extrasmall-medium text-neutral-50 leading-tight sm:text-xs">
                  {type}
                </p>
                <hr
                  className={`w-full h-[1.5px] border-0 bg-linear-to-r ${currentColor.border}`}
                />
                <p className="font-body-extrasmall-regular text-neutral-50 leading-tight sm:text-xs">
                  ID: {id}
                </p>
              </div>

              {icon && (
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  src={icon}
                  alt="Icon"
                />
              )}
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              <div className="w-full flex items-center justify-center gap-2.5 pt-1 pb-1 sm:pt-2 sm:pb-2 md:pt-3 md:pb-3">
                <h5 className="text-center hidden sm:block">{title}</h5>
                <p className="font-body-normal-medium text-neutral-50 block sm:hidden">
                  {title}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <p className="font-body-small-regular text-neutral-50 sm:text-xs">
                  Creado por
                </p>
                <p
                  className={`font-body-small-medium ${currentColor.text} sm:text-xs`}>
                  {creator}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-33 sm:top-33 md:top-39 left-1/2 transform -translate-x-1/2">
        <button
          className={`w-[140px] sm:w-[150px] md:w-[162px] h-10 rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md 
                     text-neutral-50 cursor-pointer font-action-small text-center 
                     bg-linear-to-r ${currentColor.button}`}>
          Ir a Liga
        </button>
      </div>
    </div>
  );
};

export default LeagueCard;