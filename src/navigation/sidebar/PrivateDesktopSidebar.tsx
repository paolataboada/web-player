// PrivateDesktopSidebar.tsx
import { useState } from "react";
import { UserProgressAvatar } from "@global/components/avatars/UserProgressAvatar";
import LayoutIcon from "@global/assets/icons/sidebar/layout-sidebar-close.svg";
import FeedIcon from "@global/assets/icons/sidebar/Feed-outline-icon.svg";
import CanchitaIcon from "@global/assets/icons/sidebar/canchita-outline-icon.svg";
import StatsIcon from "@global/assets/icons/sidebar/stats-outline-icon.svg";
import MarketIcon from "@global/assets/icons/sidebar/market-outline-icon.svg";
import ShirtIcon from "@global/assets/icons/sidebar/shirt-fill-icon.svg";
import { SidebarButton } from "@global/components/buttons/SidebarButton";

const PrivateDesktopSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeButton, setActiveButton] = useState("Liga");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const getVariant = (buttonName: string) => {
    if (activeButton === buttonName) return "active";
    return "default";
  };

  return (
    <div
      className={`relative ${
        isCollapsed ? "w-[88px] min-w-[88px]" : "w-[190px] min-w-[190px]"
      } h-full transition-all duration-600`}
    >
      <div
        className="w-full h-full p-0.5 z-10 bg-linear-250 from-secondary-900 via-secondary-600/60 to-primary-500/80 rounded-xl absolute"
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      ></div>
      <div className="bg-linear-to-bl from-secondary-900/20 to-secondary-600 rounded-xl opacity-10 w-full h-full absolute z-10"></div>
      <div className="flex flex-col items-center w-full h-full relative z-20 gap-10 bg-secondary-900/30 rounded-xl py-4">
        <div className="flex flex-col items-center">
          <div
            className={`${
              isCollapsed
                ? "w-14 h-[132px] flex flex-col items-center justify-between py-4"
                : "w-[158px] h-[76px] flex flex-row items-center justify-between gap-5 px-4"
            }`}
          >
            <UserProgressAvatar
              currentLevel={20}
              currentProgress={1220}
              rangeStart={1000}
              rangeEnd={2000}
              size={isCollapsed ? 56 : 56}
            />
            <img
              className="w-6 h-6 cursor-pointer"
              src={LayoutIcon}
              alt="layout"
              onClick={toggleSidebar}
            />
          </div>
          <hr className="w-full bg-neutral-50 transition-all"/>
          {/* <br></br>
          <div
            className={`${isCollapsed ? "w-14" : "w-full"} h-px bg-neutral-50`}
          ></div>  */}
        </div>

        {/* Botones de sidebar */}
        <div
          className={`${
            isCollapsed ? "w-14 h-[304px]" : "w-[158px] h-[304px]"
          } flex flex-col items-center justify-center gap-4`}
        >
          <SidebarButton
            icon={<img className="w-6 h-6" src={ShirtIcon} alt="Liga" />}
            text="Liga"
            isCollapsed={isCollapsed}
            variant={getVariant("Liga")}
            onClick={() => handleButtonClick("Liga")}
          />

          <SidebarButton
            icon={<img className="w-6 h-6" src={CanchitaIcon} alt="Equipo" />}
            text="Equipo"
            isCollapsed={isCollapsed}
            variant={getVariant("Equipo")}
            onClick={() => handleButtonClick("Equipo")}
          />

          <SidebarButton
            icon={<img className="w-6 h-6" src={StatsIcon} alt="Stats" />}
            text="Stats"
            isCollapsed={isCollapsed}
            variant={getVariant("Stats")}
            onClick={() => handleButtonClick("Stats")}
          />

          <SidebarButton
            icon={<img className="w-6 h-6" src={FeedIcon} alt="Feed" />}
            text="Feed"
            isCollapsed={isCollapsed}
            variant={getVariant("Feed")}
            onClick={() => handleButtonClick("Feed")}
          />

          <SidebarButton
            icon={<img className="w-6 h-6" src={MarketIcon} alt="Tienda" />}
            text="Tienda"
            isCollapsed={isCollapsed}
            variant={getVariant("Tienda")}
            onClick={() => handleButtonClick("Tienda")}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivateDesktopSidebar;