import StatCard from "@features/private/dashboard/leagues/elements/StatCard";
import TableRanking from "@features/private/dashboard/leagues/elements/TableRanking";
import RankingCard from "@global/components/cards/RankingCard";
import Arrow from "@global/assets/icons/shared/Arrow.svg";
import Arrowleft from "@global/assets/icons/shared/arrow-left.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import Whistle from "@global/assets/icons/card/whistle.svg";
import Left from "@global/assets/icons/card/Iconleft.svg";
import ArrowRight from "@global/assets/icons/card/ArrowRight";
import Users from "@global/assets/icons/card/Users.svg";
import { useState, useEffect } from "react";
import LeagueMembersCard from "../components/cards/LeagueMembersCard";
import InviteFriendsCards from "../components/cards/InviteFriendsCards";
import { useNavigate } from "react-router-dom";
import { RankingLeagueModal } from "../components/modal/league/RankingLeagueModal";
import LeaveLeagueMemberModal from "../components/modal/config/LeaveLeagueMemberModal";
import LeaveLeagueMemberDrawer from "../components/drawer/LeaveLeagueMemberDrawer";
import LeaveLeagueAdminModal from "../components/modal/config/LeaveLeagueAdminModal";
import LeaveLeagueAdminDrawer from "../components/drawer/LeaveLeagueAdminDrawer";
import TermsConditionsModal from "../components/modal/TermsConditionsModal";
import TermsConditionsDrawer from "../components/drawer/TermsConditionsDrawer";
import { VictoryPopover } from "../components/modal/WinnerPopovers";
import Premio from "@global/assets/icons/popover/toyota.svg";
import Premios from "@global/assets/icons/popover/xp-icon.svg";

const LeagueDetailsPage = () => {
  const [isLeaveOpen, setIsLeaveOpen] = useState(false);
  const [isLeaveAdminOpen, setIsLeaveAdminOpen] = useState(false);

  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [isLeaveAdminModalOpen, setIsLeaveAdminModalOpen] = useState(false);

  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showInviteFriends, setShowInviteFriends] = useState(false);

  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isTermsDrawerOpen, setIsTermsDrawerOpen] = useState(false);

  const navigate = useNavigate();
  const isAdmin = true;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  //  en movil drawer
  const handleOpenTerms = () => {
    if (isMobile) {
      setIsTermsDrawerOpen(true);
    } else {
      setIsTermsOpen(true);
    }
  };

  const handleCloseTerms = () => {
    setIsTermsOpen(false);
    setIsTermsDrawerOpen(false);
  };

  const handleOpenLeave = () => {
    if (isMobile) {
      if (isAdmin) {
        setIsLeaveAdminOpen(true);
      } else {
        setIsLeaveOpen(true);
      }
    } else {
      if (isAdmin) {
        setIsLeaveAdminModalOpen(true);
      } else {
        setIsLeaveModalOpen(true);
      }
    }
  };

  const handleCloseLeave = () => {
    setIsLeaveOpen(false);
  };

  const handleCloseLeaveAdmin = () => {
    setIsLeaveAdminOpen(false);
  };

  const handleCloseLeaveModal = () => {
    setIsLeaveModalOpen(false);
  };

  const handleCloseLeaveAdminModal = () => {
    setIsLeaveAdminModalOpen(false);
  };

  const handleOpenRanking = () => {
    if (isMobile) {
      navigate("/leagues/ranking");
    } else {
      setIsRankingOpen(true);
    }
  };

  const handleOpenMembers = () => {
    if (isMobile) {
      navigate("/leagues/members");
    }
  };

  const handleCloseRanking = () => {
    setIsRankingOpen(false);
  };

  const handleInviteClick = () => {
    setShowInviteFriends(true);
  };

  const handleBackToMembers = () => {
    setShowInviteFriends(false);
  };

  //  Popover de Victoria
  const [isVictoryOpen, setIsVictoryOpen] = useState(false);

  const handleOpenVictory = () => {
    setIsVictoryOpen(true);
  };

  const handleCloseVictory = () => {
    setIsVictoryOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 p-4 max-w-[1400px] mx-auto sm:gap-6 md:p-8 lg:flex-row">
        <div className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-6">
          <div className="w-full h-[257px] border">ANUNCIOS</div>

          <h4 className="text-neutral-50 text-lg sm:text-xl md:text-2xl font-semibold text-center px-4">
            LOS ÚLTIMOS SIEMPRE
          </h4>
          <FantasyButton
            variant="primary"
            size="lg"
            onClick={handleOpenVictory}>
            Ver resultado
          </FantasyButton>
          <div className="lg:hidden">
            <FantasyButton
              variant="secondary"
              size="sm"
              className="w-full flex items-center justify-between py-3 px-4"
              onClick={handleOpenMembers}>
              <div className="flex items-center gap-2">
                <h4 className="text-neutral-50">Participantes</h4>
                <div className="h-6 min-w-[52px] bg-neutral-800 rounded-full flex items-center justify-center gap-1 px-3">
                  <img className="w-4 h-4" src={Users} alt="users" />
                  <p className="font-body-small-medium text-neutral-50">24</p>
                </div>
              </div>
              <img className="w-4 h-4" src={Arrow} alt="arrow" />
            </FantasyButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
            <div className="w-full flex justify-center">
              <RankingCard
                Title={"RANKING LIGA"}
                Subtitle={"LOS ÚLTIMOS SIEMPRE"}
                Date={"2"}
                fondo="fondo1">
                <TableRanking
                  data={[
                    {
                      position: 1,
                      name: "Nico35",
                      team: "Fútbol FC",
                      points: 1200,
                      trend: "down",
                    },
                    {
                      position: 2,
                      name: "Blanca10",
                      team: "Fútbol FC",
                      points: 1856,
                      trend: "up",
                    },
                    {
                      position: 3,
                      name: "Jesus2000",
                      team: "Fútbol FC",
                      points: 1742,
                      trend: "up",
                    },
                    {
                      position: 4,
                      name: "Mariaigna12",
                      team: "Fútbol FC",
                      points: 1856,
                      trend: "down",
                    },
                    {
                      position: 5,
                      name: "Fanodric04",
                      team: "Fútbol FC",
                      points: 1742,
                      trend: "up",
                    },
                  ]}
                />
                <div className="mt-2 text-center">
                  <div className="w-full flex justify-end">
                    <button
                      className="text-neutral-50 text-sm sm:text-base flex items-center gap-2 cursor-pointer hover:text-primary-300 transition-colors"
                      onClick={handleOpenRanking}>
                      Ver tabla de puntos
                      <img
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        src={Arrow}
                        alt="Arrow"
                      />
                    </button>
                  </div>
                </div>
              </RankingCard>
            </div>

            <div className="w-full flex justify-center">
              <RankingCard
                Title={"RESUMEN DE LA FECHA"}
                Date={"5"}
                fondo="fondo2">
                <div className="w-full flex flex-col gap-3">
                  <div className="flex justify-center gap-4">
                    <StatCard value="12" label="jugadores" />
                    <StatCard value="120" label="Puntos promedio" />
                  </div>
                  <div className="flex justify-center gap-4">
                    <StatCard value="P. Guerrero" label="Más veces capitán" />
                    <StatCard value="E. Flores" label="Jugador más elegido" />
                  </div>
                  <div className="flex justify-center">
                    <StatCard
                      value="125"
                      label="Mejor score semanal"
                      fullWidth
                      align="center"
                    />
                  </div>
                </div>
              </RankingCard>
            </div>
          </div>

          {/* SECCIÓN MÓVIL */}
          <div className="lg:hidden mt-2">
            <div className="relative w-full h-12 sm:h-14 rounded-tl-xl rounded-tr-lg rounded-br-xl rounded-bl-lg mb-3">
              <div
                className="absolute inset-0 rounded-tl-xl rounded-tr-lg rounded-br-xl rounded-bl-lg p-px z-10 bg-linear-120 from-primary-500 to-secondary-500"
                style={{
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}></div>
              <div className="absolute inset-0 rounded-tl-xl rounded-tr-lg rounded-br-xl rounded-bl-lg bg-linear-to-r from-primary-700/70 to-secondary-900/50 z-0"></div>

              <button
                type="button"
                onClick={handleOpenTerms}
                className="relative z-20 w-full h-full px-4 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                    <img className="w-5 h-5" src={Whistle} alt="Person" />
                  </div>
                  <p className="font-body-normal-regular text-neutral-50">
                    Reglas del juego y condiciones
                  </p>
                </div>

                <img
                  src={Left}
                  alt="Left"
                  className="w-8 h-8 pointer-events-none"
                />
              </button>
            </div>

            <FantasyButton
              variant="red"
              size="lg"
              className="flex items-center justify-center gap-2 w-full py-3 sm:py-4 text-sm sm:text-base group"
              onClick={handleOpenLeave}>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-current group-hover:text-white transition-colors" />
              <span className="group-hover:text-white transition-colors">
                Salir Liga
              </span>
            </FantasyButton>
          </div>
        </div>

        {/* SECCIÓN DESKTOP */}
        <div className="hidden lg:flex lg:w-[348px] xl:w-[380px] lg:shrink-0 flex-col gap-6 relative">
          {showInviteFriends && (
            <div className="absolute -top-6 -right-5 z-20">
              <FantasyButton
                variant="secondary"
                size="sm"
                onClick={handleBackToMembers}
                className="flex items-center justify-center p-2 border-2 border-neutral-900 w-12 h-12 min-w-12">
                <img src={Arrowleft} alt="Arrowleft" className="w-4 h-4" />
              </FantasyButton>
            </div>
          )}

          <div className="w-full max-w-[348px] lg:max-w-none h-auto min-h-[500px] lg:min-h-[580px] xl:h-[640px] border border-neutral-400 bg-neutral-900 rounded-xl lg:rounded-2xl xl:rounded-3xl p-4 sm:p-5 lg:p-6 flex flex-col gap-4 lg:gap-5 xl:gap-6">
            {showInviteFriends ? (
              <InviteFriendsCards onBack={handleBackToMembers} />
            ) : (
              <LeagueMembersCard onInviteClick={handleInviteClick} />
            )}
          </div>

          <div className="w-full mt-auto">
            <div className="relative w-full h-14 rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg mb-3">
              <div
                className="absolute inset-0 rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg p-px z-10 bg-linear-120 from-primary-500 to-secondary-500"
                style={{
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}></div>
              <div className="absolute inset-0 rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg bg-linear-to-r from-primary-700/70 to-secondary-900/50 z-0"></div>

              <button
                type="button"
                onClick={handleOpenTerms}
                className="relative z-20 w-full h-full px-3 sm:px-4 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-1 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                    <img
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      src={Whistle}
                      alt="Person"
                    />
                  </div>
                  <p className="font-body-normal-regular text-neutral-50 text-xs sm:text-sm md:text-base truncate">
                    Reglas del juego y condiciones
                  </p>
                </div>

                <img
                  src={Left}
                  alt="Left"
                  className="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none"
                />
              </button>
            </div>

            <FantasyButton
              variant="red"
              size="lg"
              className="flex items-center justify-center gap-2 w-full group"
              onClick={handleOpenLeave}>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-current group-hover:text-white transition-colors" />
              <span className="group-hover:text-white transition-colors">
                Salir Liga
              </span>
            </FantasyButton>
          </div>
        </div>
      </div>

      {/* MODALES */}
      <LeaveLeagueMemberModal
        isOpen={isLeaveModalOpen}
        onClose={handleCloseLeaveModal}
      />

      <LeaveLeagueAdminModal
        isOpen={isLeaveAdminModalOpen}
        onClose={handleCloseLeaveAdminModal}
      />

      <RankingLeagueModal isOpen={isRankingOpen} onClose={handleCloseRanking} />

      <TermsConditionsModal isOpen={isTermsOpen} onClose={handleCloseTerms} />

      {/* DRAWERS*/}
      <LeaveLeagueMemberDrawer
        isOpen={isLeaveOpen}
        onClose={handleCloseLeave}
      />

      <LeaveLeagueAdminDrawer
        isOpen={isLeaveAdminOpen}
        onClose={handleCloseLeaveAdmin}
      />

      <TermsConditionsDrawer
        isOpen={isTermsDrawerOpen}
        onClose={handleCloseTerms}
      />

      <VictoryPopover
        isOpen={isVictoryOpen}
        onClose={handleCloseVictory}
        variant="ganador"
        title="¡Felicidades, campeón!"
        descripcionTemporada="Tu puntaje arrasó en esta temporada de"
        puesto="primer lugar."
        premio="TOYOTA FORTUNE 0KM"
        puestoFinal="#1"
        puntosObtenidos="1,245"
        botonPrincipalTexto="Reclamar"
        showFondoLigth={true}
        premioImage={Premio}></VictoryPopover>

      {/* <VictoryPopover
        isOpen={isVictoryOpen}
        onClose={handleCloseVictory}
        variant="sigue-participando"
        title="¡Vamos que se puede!"
        descripcionTemporada="La FECHA 01 terminó y estuviste
a un paso de liderar en la liga"
        puesto="Recibiste +500 XP por tu participación. 🔥"
        puestoFinal="#12"
        puntosObtenidos="945"
        botonPrincipalTexto="Ver mi posicion en la tabla"
        showFondoLigth={true}
        premioImage={Premios}></VictoryPopover> */}
    </div>
  );
};

export default LeagueDetailsPage;
