import ChevronDown from "@global/assets/icons/card/ChevronDownred.svg";
import ChevronUp from "@global/assets/icons/card/chevron-upgreen.svg";

interface PlayerRow {
  position: number;
  name: string;
  team: string;
  points: number;
  trend: "up" | "down"; 
}

interface TableRankingProps {
  className?: string;
  data?: PlayerRow[]; 
}

const TableRanking = ({ 
  className = "", 
  data = [] 
}: TableRankingProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-12 gap-2 px-4 sm:px-6 mb-2">
        <div className="col-span-6">
          <span className="text-neutral-50 font-body-extrasmall-regular sm:font-body-small-regular">Jugador</span>
        </div>
        <div className="col-span-3 text-center">
          <span className="text-neutral-50 font-body-extrasmall-regular sm:font-body-small-regular">Equipo</span>
        </div>
        <div className="col-span-3 text-right">
          <span className="text-neutral-50 font-body-extrasmall-regular sm:font-body-small-regular">Puntos</span>
        </div>
      </div>

      <div className="relative w-full">
        <div className="rounded-xl p-px bg-linear-to-br from-primary-500 to-secondary-500">
          <div className="rounded-xl p-2 sm:p-3 bg-linear-to-br from-primary-700 to-secondary-900">
            
            <div className="space-y-2">
              {data.length > 0 ? (
                data.map((player, index) => (
                  <div 
                    key={`${player.position}`}
                    className={`grid grid-cols-12 gap-2 items-center pb-2 px-1 sm:px-2 ${
                      index < data.length - 1 ? "border-b border-secondary-700" : ""
                    }`}
                  >
                    <div className="col-span-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-1">
                          <span className="text-neutral-50 font-body-extrasmall-regular sm:font-body-small-regular">
                            {player.position}
                          </span>
                          <img
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            src={player.trend === "up" ? ChevronUp : ChevronDown}
                            alt={player.trend === "up" ? "Subiendo" : "Bajando"}
                          />
                        </div>
                        <span className="text-neutral-50 font-body-extrasmall-regular sm:font-body-small-regular truncate">
                          {player.name}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-3 text-center">
                      <span className="text-neutral-50 font-body-extrasmall-regular sm:font-body-small-regular">
                        {player.team}
                      </span>
                    </div>
                    <div className="col-span-3 text-right">
                      <span className="text-neutral-50 font-body-extrasmall-regular sm:font-body-small-regular">
                        {player.points}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-6 sm:py-8 flex items-center justify-center">
                  <p className="text-neutral-50 font-body-extrasmall-regular sm:font-body-small-regular text-center">
                    No hay datos disponibles
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TableRanking;