import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
	tabs: {
		id: string;
		label: string;
		iconOutlined: React.FC<React.SVGProps<SVGSVGElement>>;
		iconFilled: React.FC<React.SVGProps<SVGSVGElement>>;
	}[];
}

const MobileTabBar = ({ tabs }: Props) => {
	const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

	return (
		<nav
			className="fixed bottom-4 left-1/2 -translate-x-1/2 flex justify-between items-center gap-1 
			bg-linear-to-r from-neutral-900 to-neutral-950 rounded-full py-2 px-3 shadow-lg w-full">
			{tabs.map((tab) => {
				const isActive = tab.id === activeTab;
				const Icon = isActive ? tab.iconFilled : tab.iconOutlined;

				return (
					<motion.button
						key={tab.id}
						whileTap={{ scale: 0.9 }}
						onClick={() => setActiveTab(tab.id)}
						className="relative flex justify-center items-center gap-1 py-2.5 px-3 w-[114px] cursor-pointer sm:px-4">
						{isActive && (
							<motion.div
								layoutId="active-bg"
								className="absolute inset-0 rounded-full bg-linear-to-r from-pink-600/30 to-pink-600/10"
								transition={{ type: "spring", stiffness: 200, damping: 25 }}
							/>
						)}

						<motion.div
							animate={{ scale: isActive ? 1.1 : 1 }}
							transition={{ type: "spring", stiffness: 200, damping: 20 }}
							className="z-1">
							<Icon className="w-6 h-6" />
						</motion.div>

						<AnimatePresence>
							{isActive && (
								<motion.span
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 8 }}
									transition={{ duration: 0.2 }}
									className="z-1 font-body-small-medium text-primary-50 ms-1">
									{tab.label}
								</motion.span>
							)}
						</AnimatePresence>
					</motion.button>
				);
			})}
		</nav>
	);
}

export default MobileTabBar