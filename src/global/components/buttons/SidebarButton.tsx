import { type ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface SidebarButtonProps {
	icon: ReactNode;
	label: string;
	to: string,
	isActive: boolean;
}

export const SidebarButton = ({
	icon,
	label,
	isActive,
	to
}: SidebarButtonProps) => {

	return (
		<NavLink
			to={to}
			className={`w-full h-12 flex flex-row items-center gap-2 rounded-xl 
      		transition-colors ease-linear duration-200 cursor-pointer bg-transparent px-8 
			hover:bg-linear-to-r! hover:from-orange-200/30! hover:to-secondary-500/30!
      		${isActive && `bg-linear-to-r from-orange-200/40! to-secondary-500/40!
        	relative after:absolute after:bottom-0 after:h-0.5 after:rounded-full
        	after:bg-linear-to-r after:from-orange-200 after:to-secondary-500
			after:translate-[50%] after:right-[50%] after:w-[72px] font-medium `}`}
		>
			{icon}
			<p className="font-body-normal-regular select-none">{label}</p>
		</NavLink>
	);
};