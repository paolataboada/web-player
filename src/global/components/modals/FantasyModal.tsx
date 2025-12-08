import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import FantasyButton from "../buttons/FantasyButton";
import XIcon from "@global/assets/icons/shared/XIcon";
import AlertIcon from "@global/assets/icons/modals/AlertIcon";
import DeleteIcon from "@global/assets/icons/modals/DeleteIcon";
import ReportIcon from "@global/assets/icons/modals/ReportIcon";
import EquisModalIcon from "@global/assets/icons/modals/EquisIcon";
import CheckIcon from "@global/assets/icons/modals/CheckIcon";
import { EModalType } from "@global/enums/modal.type.enum";
import bgModal from "@global/assets/backgrounds/bg-modals.png"
import CreateIcon from "@global/assets/icons/modals/CreateIcon";


type BaseButtonVariant = "primary" | "secondary" | "red";

type FantasyModalProps = {
   isOpen: boolean;
   onClose: () => void;
   onConfirm?: () => void;
   children: React.ReactNode;
   type?: EModalType;
   disabledAccept?: boolean;
   textButtonAccept?: string;
   textButtonReject?: string;
   variantToButtonAccept?: BaseButtonVariant;
   className?: string;
};

const backdropVariants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1 },
   exit: { opacity: 0 },
};

const modalVariants = {
   hidden: { opacity: 0, scale: 0.95, y: "-50%", x: "-50%" },
   visible: { opacity: 1, scale: 1, y: "-50%", x: "-50%" },
   exit: { opacity: 0, scale: 0.95, y: "-50%", x: "-50%" },
};

const FantasyModal: React.FC<FantasyModalProps> = ({
   isOpen,
   onClose,
   onConfirm,
   children,
   variantToButtonAccept = "red",
   disabledAccept,
   textButtonAccept,
   textButtonReject,
   className,
   type
}) => {
   const modalRef = useRef<HTMLDivElement>(null);

   // Close on outside click or Escape
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
         ) {
            onClose();
         }
      };

      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === "Escape") {
            onClose();
         }
      };

      if (isOpen) {
         document.addEventListener("mousedown", handleClickOutside);
         document.addEventListener("keydown", handleKeyDown);
         document.body.style.overflow = "hidden";
      }

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
         document.removeEventListener("keydown", handleKeyDown);
         document.body.style.overflow = "auto";
      };
   }, [isOpen, onClose]);

   return ReactDOM.createPortal(
      <AnimatePresence>
         {isOpen && (
            <motion.div
               className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-50/32"
               variants={backdropVariants}
               initial="hidden"
               animate="visible"
               exit="exit"
            >
               <motion.div
                  ref={modalRef}
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="absolute top-1/2 left-1/2 rounded-4xl shadow-xl md:max-w-[500px] w-full max-w-[348px]
             bg-neutral-900 bg-cover bg-center"
                  style={{
                     backgroundImage: `
              url(${bgModal}),
              linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8))
            `
                  }}
               >
                  <div className={`relative w-full p-10 space-y-6 ${className}`}>
                     <div className="absolute top-3.5 right-[18px] w-full flex justify-end text-end">
                        <FantasyButton
                           size="sm"
                           variant="secondary"
                           onClick={onClose}
                           className="w-10! min-w-10! h-10 p-2!"
                        >
                           <XIcon />
                        </FantasyButton>
                     </div>
                     {/* ICONS */}
                     {type === EModalType.ALERT && (<AlertIcon />)}
                     {type === EModalType.CREATE && (<CreateIcon />)}
                     {type === EModalType.DELETE && (
                        <div className="w-full flex justify-center mt-8 mb-3">
                           <span className="p-3 rounded-2xl bg-red-900">
                              <DeleteIcon className="text-red-50" />
                           </span>
                        </div>
                     )}
                     {type === EModalType.REPORT && (
                        <div className="w-full flex justify-center mt-8 mb-3">
                           <span className="p-3 rounded-2xl bg-orange-50">
                              <ReportIcon size={40} className="text-orange-500" />
                           </span>
                        </div>
                     )}
                     {type === EModalType.CANCEL &&
                        <div
                           className="flex items-center justify-center
                    rounded-2xl w-16 h-16 mb-4 mt-8 mx-auto
                    bg-red-50 text-red-500">
                           <EquisModalIcon size={40} />
                        </div>
                     }
                     {type === EModalType.APPROVE &&
                        <div
                           className="flex items-center justify-center
                    rounded-2xl w-16 h-16 mb-4 mt-8 mx-auto
                    bg-green-50 text-green-500">
                           <CheckIcon size={40} />
                        </div>
                     }
                     {children}
                     {(textButtonAccept || textButtonReject) && (
                        <div className="px-4 pt-4 grid grid-cols-2 gap-4 pb-4 rounded-b-4xl border-t border-neutral-500">
                           {textButtonReject && (
                              <FantasyButton variant="secondary" size="md" onClick={onClose}>
                                 {textButtonReject}
                              </FantasyButton>
                           )}
                           {textButtonAccept && (
                              <FantasyButton variant={variantToButtonAccept} size="md" onClick={onConfirm} disabled={disabledAccept}>
                                 {textButtonAccept}
                              </FantasyButton>
                           )}
                        </div>
                     )}
                  </div>

               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>,
      document.body
   );
};

export default FantasyModal;
