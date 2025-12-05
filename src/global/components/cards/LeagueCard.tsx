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
      gradient: "from-pink-200 via-pink-900 to-pink-200",
      border: "from-pink-700 to-pink-500",
      text: "text-pink-200",
      shadow: "drop-shadow(0px 0px 16px rgba(255, 45, 116, 0.72))",
      button: "from-pink-500 to-rose-500",
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
      gradient: "from-sky-200 via-sky-900 to-sky-200",
      border: "from-sky-900 to-sky-500",
      text: "text-sky-200",
      shadow: "",
      button: "from-sky-500 to-sky-900",
      overlay: "from-sky-500 to-sky-900",
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
      button: "from-neutral-200 to-neutral-500",
      overlay: "from-neutral-500 to-neutral-900",
    },
  };

  const currentColor = colorConfig[color];

  return (
    <div className="w-full max-w-[232px] sm:max-w-[348px] md:max-w-[368px] relative">
      <div
        className={`w-full h-[155px] sm:h-[155px] md:h-[174px]
                   p-px rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg
                   bg-linear-to-br ${currentColor.gradient}`}
        style={
          currentColor.shadow ? { filter: currentColor.shadow } : undefined
        }>
        <div
          className="w-full h-full rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg 
                       p-4 sm:p-4 md:p-4
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

          <div className="relative flex flex-col gap-1 h-full">
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-neutral-50 font-medium leading-tight">
                  {type}
                </p>
                <hr
                  className={`w-full h-[1.5px] border-0 bg-linear-to-r ${currentColor.border}`}
                />
                <p className="text-xs text-neutral-50 leading-tight">
                  ID: {id}
                </p>
              </div>

              {icon && (
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 shrink-0"
                  src={icon}
                  alt="Icon"
                />
              )}
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-full flex items-center justify-center gap-2.5 p-2">
                <h5 className="text-center text-base sm:text-lg md:text-xl font-semibold text-neutral-50 leading-tight">
                  {title}
                </h5>
              </div>

              <div className="flex items-center gap-1 flex-wrap justify-center">
                <p className="text-xs text-neutral-50">
                  Creado por
                </p>
                <p
                  className={`text-xs font-medium ${currentColor.text}`}>
                  {creator}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <button
          className={`w-[140px] sm:w-[150px] md:w-[162px] h-10 rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md 
                     text-neutral-50 cursor-pointer text-sm font-medium text-center 
                     bg-linear-to-l ${currentColor.button} hover:opacity-90 transition-opacity`}>
          Ir a Liga
        </button>
      </div>
    </div>
  );
};

export default LeagueCard;