import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
	className?: string;
}

const MotionContainer = ({ children, className }: Props) => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={className}>
			{children}
		</motion.div>
	);
};

export default MotionContainer;
