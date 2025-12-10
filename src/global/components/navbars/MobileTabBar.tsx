import { AnimatePresence, motion } from "framer-motion";
import { NAVIGATION_ITEMS_BAR } from "@global/constants/navigation-items-bar";
import { NavLink, useLocation } from "react-router-dom";

const MobileTabBar = () => {
	const { pathname } = useLocation();
	return (
		<nav
			className="fixed z-99 bottom-2 left-1/2 -translate-x-1/2
		 	w-full max-w-[96%] h-[60px] px-3 border border-neutral-500
			flex justify-between items-center gap-1 bg-neutral-900 rounded-full">
			{NAVIGATION_ITEMS_BAR.map((tab) => {
				const isActive = tab.to === pathname;
				const Icon = isActive ? tab.iconFilled : tab.iconOutlined;

				return (
					<NavLink
						to={tab.to}
						className={`${isActive && "bg-linear-to-br from-primary-600 via-neutral-500/30 to-secondary-70/80 p-[1.5px] h-11 rounded-full"}`}>
						<motion.button
							key={tab.id}
							whileTap={{ scale: 0.9 }}
							className={`flex justify-center items-center gap-1 h-full cursor-pointer rounded-full
								${!isActive ? `px-2` :
									`px-4 bg-linear-to-br from-primary-700 via-neutral-900/30 to-secondary-900/80`
								}`
							}>

							<motion.div
								transition={{ type: "spring", stiffness: 200, damping: 20 }}
								className="z-1">
								<Icon />
							</motion.div>

							<AnimatePresence>
								{isActive && (
									<motion.span
										initial={{ opacity: 0, y: 8 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 8 }}
										transition={{ duration: 0.2 }}
										className="z-1 font-body-small-medium text-neutral-50 ms-1">
										{tab.label}
									</motion.span>
								)}
							</AnimatePresence>
						</motion.button>
					</NavLink>
				);
			})}
		</nav>
	);
}

export default MobileTabBar