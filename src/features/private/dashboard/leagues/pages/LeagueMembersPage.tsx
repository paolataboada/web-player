import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Arrow from "@global/assets/icons/shared/arrow-left.svg";
import LeagueMembersCard from "../components/cards/LeagueMembersCard";
import InviteFriendsCards from "../components/cards/InviteFriendsCards";
import Fondo from "@global/assets/icons/card/fondo3.svg";
import Icon from "@global/assets/icons/card/Users.svg";
import LeaguesPlayerCard from "../components/cards/LeaguesPlayerCard";

const LeagueMembersPage = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<"members" | "invite">("members");

  const handleBack = () => {
    navigate(-1);
  };

  const handleMembersClick = () => {
    setActiveView("members");
  };

  const handleInviteClick = () => {
    setActiveView("invite");
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[380px] mx-auto">
        <div className="relative w-full h-16 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="p-1 hover:opacity-80 transition-opacity z-10">
            <img src={Arrow} alt="Back" className="w-6 h-6" />
          </button>
          <p className="text-neutral-50 text-lg font-body-large-medium absolute left-1/2 transform -translate-x-1/2">
            Integrantes de liga
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full h-12 flex items-center justify-between mb-6">
          <div
            className="relative flex-1 text-center cursor-pointer"
            onClick={handleMembersClick}>
            <p
              className={`font-body-normal-medium pb-2 transition-colors ${
                activeView === "members"
                  ? "text-neutral-50"
                  : "text-neutral-400 hover:text-neutral-300"
              }`}>
              Integrantes de la liga
            </p>
            {activeView === "members" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-120 from-primary-500 to-secondary-500"></div>
            )}
          </div>

          <div
            className="relative flex-1 text-center cursor-pointer"
            onClick={handleInviteClick}>
            <p
              className={`font-body-normal-medium pb-2 transition-colors ${
                activeView === "invite"
                  ? "text-neutral-50"
                  : "text-neutral-400 hover:text-neutral-300"
              }`}>
              Invitar a la liga
            </p>
            {activeView === "invite" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-120 from-primary-500 to-secondary-500"></div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[380px] mx-auto">
        {activeView === "members" ? (
          <LeagueMembersCard />
        ) : (
          <>
            <div className="flex flex-col items-center gap-3">
              <LeaguesPlayerCard title={"LOS ÚLTIMOS SIEMPRE "} icon={Icon} color={"verde"} />
              <h4 className="text-neutral-50 text-center mb-2">
                Invita a tus amigos!
              </h4>
            </div>

            <InviteFriendsCards />
          </>
        )}
      </div>
    </div>
  );
};

export default LeagueMembersPage;
