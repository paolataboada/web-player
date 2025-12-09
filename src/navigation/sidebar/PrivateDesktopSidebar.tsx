import { useLocation } from "react-router-dom";
import { SidebarButton } from "@global/components/buttons/SidebarButton";
import { SIDEBAR_ITEMS } from "./sidebar-options";

const PrivateDesktopSidebar = () => {

   const { pathname } = useLocation();

   return (
      <div className={`relative h-full transition-all duration-600`}>

         {/* BORDER */}
         <div
            className="w-full h-full p-0.5 z-10 bg-linear-250 from-secondary-900 via-secondary-600/60 to-primary-500/80 rounded-xl absolute"
            style={{
               WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
               WebkitMaskComposite: "xor",
               maskComposite: "exclude",
            }}
         />
         <div 
            className="flex flex-col items-center w-full h-full relative z-20 gap-10  rounded-xl py-6 px-4
            bg-linear-to-tr from-secondary-600/26 from-0% to-secondary-900/26 to-100%"
            >

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