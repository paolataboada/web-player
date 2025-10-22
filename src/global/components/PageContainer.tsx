import { motion } from "framer-motion";
import type React from "react";

const PageContainerPublic = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=""
    >
      {children}
    </motion.div>
  );
};

export default PageContainerPublic;
