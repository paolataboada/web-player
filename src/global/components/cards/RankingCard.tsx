import { useState } from "react";
import Calendar from "@global/assets/icons/card/Calendar.svg";
import ChevronDown from "@global/assets/icons/accordion/chevron-down.svg";
import ChevronUp from "@global/assets/icons/accordion/chevron-up.svg";
import Fondo from "@global/assets/icons/card/CardContainer.svg";
import Fondo2 from "@global/assets/icons/card/CardContainer2.svg";

interface RankingCardProps {
  Title: string;
  Subtitle?: string;
  Date: string;
  children: React.ReactNode;
  fondo?: "fondo1" | "fondo2";
}

const RankingCard = ({
  Title,
  Subtitle,
  Date,
  children,
  fondo = "fondo1",
}: RankingCardProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const fondoSeleccionado = fondo === "fondo1" ? Fondo : Fondo2;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`relative w-full transition-all duration-300 ${
        isOpen ? "h-auto min-h-[380px] sm:min-h-[420px] lg:min-h-[455px]" : "h-[90px] sm:h-[100px] lg:h-[120px]"
      }`}
    >
      <div className="absolute inset-0 rounded-xl lg:rounded-2xl p-px bg-linear-to-br from-primary-500 to-secondary-500">
        <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden">
          <img
            src={fondoSeleccionado}
            alt="fondo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black/30 rounded-xl lg:rounded-2xl" />
          
          <div 
            className={`relative h-full flex flex-col transition-all duration-300 ${
              isOpen ? "p-3 sm:p-4 lg:p-6 gap-2 sm:gap-3 lg:gap-4" : "p-2.5 sm:p-3 lg:p-4 gap-0"
            }`}
          >
            <div 
              className="w-full cursor-pointer shrink-0"
              onClick={toggleAccordion}
            >
              <div className="flex flex-col items-center">
                <div className="w-full flex items-center justify-center relative mb-0.5 sm:mb-1">
                  <p className="font-body-extrasmall-regular sm:font-body-small-regular flex items-center gap-1 text-neutral-50 text-[11px] sm:text-xs lg:text-sm">
                    <img className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" src={Calendar} alt="Icon" />
                    Fecha {Date}
                  </p>
                  
                  <img
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 absolute right-0 cursor-pointer hover:opacity-80 transition-opacity"
                    src={isOpen ? ChevronUp : ChevronDown}
                    alt={isOpen ? "Cerrar" : "Abrir"}
                  />
                </div>
                <div className="text-center px-1 sm:px-2">
                  <h4 className="text-neutral-50 text-xs sm:text-sm lg:text-base font-medium leading-tight">
                    {Title}
                    {Subtitle && <><br/>{Subtitle}</>}
                  </h4>
                </div>
              </div>
            </div>
            
            <div 
              className={`w-full flex-1 overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-100 max-h-[800px]" : "opacity-0 max-h-0"
              }`}
            >
              <div className="w-full h-full flex flex-col gap-1.5 sm:gap-2 lg:gap-3">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingCard;