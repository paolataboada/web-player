import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FantasyButton from "@global/components/buttons/FantasyButton";
import IconSearch from "@global/assets/icons/card/search.svg?react";
import Person from "@global/assets/icons/card/person.svg";
import Personfill from "@global/assets/icons/card/person-fill";
import InputField from "@global/components/forms/InputField";
import ConfirmAssignLeagueAdminDrawer from "../components/drawer/ConfirmAssignLeagueAdminDrawer";

const AssignLeagueAdminPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isConfirmDrawerOpen, setIsConfirmDrawerOpen] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleOpenConfirmDrawer = () => {
    setIsConfirmDrawerOpen(true);
  };

  const handleCloseConfirmDrawer = () => {
    setIsConfirmDrawerOpen(false);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[380px] mx-auto">
        <div className="relative w-full h-16 flex items-center justify-center">
          <p className="text-neutral-50 text-lg font-body-large-medium absolute left-1/2 transform -translate-x-1/2">
            Asignar Administrador
          </p>
        </div>
        <div className="w-full p-3">
          <h4 className="text-neutral-50 mb-2">Cambiar Administrador</h4>
          <div className="flex flex-col gap-4">
            <p className="font-body-normal-regular">
              Si eliminas la liga sin designar antes a un nuevo administrador,
              la competencia se dará por finalizada.
            </p>
            <p className="font-body-normal-regular">
              Al eliminarla, se borrará todo el historial del torneo:
              alineaciones, resultados y estadísticas. Y participantes. Una vez
              confirmada la acción, no habrá vuelta atrás en el marcador.
            </p>

            <form className="w-full py-2">
              <InputField
                placeholder="Ingrese nombre de usuario"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 sm:pl-11 w-full h-12 text-sm sm:text-base"
                icon={
                  <IconSearch className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
                }
              />
            </form>

            <div className="w-full grid grid-cols-1 gap-3 lg:gap-4 flex-1 overflow-y-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div
                  key={item}
                  className="relative rounded-lg shrink-0 min-h-14 sm:min-h-16"
                >
                  <div
                    className="absolute inset-0 rounded-lg p-px z-10 bg-linear-120 from-primary-500 to-secondary-500"
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  ></div>
                  <div className="absolute inset-0 rounded-lg bg-linear-150 from-primary-500/30 to-neutral-900/80 z-0"></div>

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
                        <p className="font-body-normal-regular text-neutral-50 text-sm sm:text-base truncate">
                          {item === 1 && "joselopez1995"}
                          {item === 2 && "maria_gomez"}
                          {item === 3 && "carlos_rdz"}
                          {item === 4 && "ana_torres"}
                          {item === 5 && "luis_mendez"}
                          {item === 6 && "joselopez1995"}
                          {item === 7 && "maria_gomez"}
                          {item === 8 && "carlos_rdz"}
                          {item === 9 && "ana_torres"}
                          {item === 10 && "luis_mendez"}
                        </p>
                      </div>
                    </div>
                    <button 
                      className="p-1 hover:opacity-80 transition-opacity shrink-0"
                      onClick={handleOpenConfirmDrawer}
                    >
                      <Personfill className="text-primary-500 w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <FantasyButton
              type="button"
              variant="secondary"
              size="lg"
              className="w-full sm:flex-1 order-1 sm:order-1"
              onClick={handleBack}
            >
              Volver
            </FantasyButton>
          </div>
        </div>
      </div>

      <ConfirmAssignLeagueAdminDrawer
        isOpen={isConfirmDrawerOpen}
        onClose={handleCloseConfirmDrawer}
      />
    </div>
  );
};

export default AssignLeagueAdminPage;