import { useLocation } from "react-router-dom";
import { SidebarButton } from "@global/components/buttons/SidebarButton";
import { SIDEBAR_ITEMS } from "./sidebar-options";

const PrivateDesktopSidebar = () => {

   const { pathname } = useLocation();

   return (
      <div
         className={`relative h-full transition-all duration-600`}
      >
         <div
            className="w-full h-full p-0.5 z-10 bg-linear-250 from-secondary-900 via-secondary-600/60 to-primary-500/80 rounded-xl absolute"
            style={{
               WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
               WebkitMaskComposite: "xor",
               maskComposite: "exclude",
            }}
         ></div>
         <div className="bg-linear-to-bl from-secondary-900/20 to-secondary-600 rounded-xl opacity-10 w-full h-full absolute z-10"></div>
         <div className="flex flex-col items-center w-full h-full relative z-20 gap-10 bg-secondary-900/30 rounded-xl py-6 px-4">

            {/* Botones de sidebar */}
            <div className={`grid gap-4`}
            >
               {SIDEBAR_ITEMS.map(item => (
                  <SidebarButton
                     key={item.name}
                     text={item.name}
                     to={item.link}
                     icon={item.icon}
                     isActive={pathname === item.link}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default PrivateDesktopSidebar;