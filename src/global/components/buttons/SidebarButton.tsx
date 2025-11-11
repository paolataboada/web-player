import type { ReactNode } from "react";

interface SidebarButtonProps {
  icon: ReactNode;
  text: string;
  isCollapsed: boolean;
  variant?: "default" | "hover" | "active";
  onClick?: () => void;
}

export const SidebarButton = ({
  icon,
  text,
  isCollapsed,
  variant = "default",
  onClick
}: SidebarButtonProps) => {
  
  const getButtonClasses = () => {
    const baseClasses = `
      ${isCollapsed ? "w-14" : "w-[158px]"} 
      h-12 flex flex-row items-center justify-center gap-2 rounded-xl
      transition-all duration-200 cursor-pointer
      hover:bg-linear-to-br hover:from-orange-200/20 hover:to-secondary-500/20
    `;

    const variantClasses = {
      default: "",
      hover: "bg-linear-to-br from-orange-200/20 to-secondary-500/20",
      active: `
        bg-linear-to-br from-orange-200/70 to-secondary-500/70
        relative
        after:content-[''] after:absolute after:bottom-0 after:h-0.5 
        after:bg-linear-to-r after:from-orange-200 after:to-secondary-500 
        after:rounded-b-xl
        ${isCollapsed ? "after:left-2 after:right-2" : "after:left-10 after:right-10"}
      `
    };

    return `${baseClasses} ${variantClasses[variant]}`;
  };

  return (
    <button
      className={getButtonClasses()}
      onClick={onClick}
    >
      {icon}
      {!isCollapsed && <p className="font-body-normal-regular">{text}</p>}
    </button>
  );
};