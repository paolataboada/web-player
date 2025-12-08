import { useState } from "react";
import LessIcon from "@global/assets/icons/accordion/lessIcon.svg";
import ChevronUp from "@global/assets/icons/accordion/chevron-up.svg";
import ChevronDown from "@global/assets/icons/accordion/chevron-down.svg";
import PlusIcon from "@global/assets/icons/accordion/plusicon.svg";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title: string;
  items: FAQItem[];
}

export const FAQAccordion = ({ title, items }: FAQAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setOpenItems([]);
    }
  };

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div
      className={`w-full xl:w-[1066px] ${
        isOpen ? "h-auto" : "h-14"
      } p-[1.5px] rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg bg-linear-to-r from-primary-500 to-secondary-500 transition-all duration-300`}
    >
      <div
        className={`w-full h-full rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg ${
          isOpen ? "pt-3 pr-4 pb-3 pl-4" : "pt-3 pr-4 pb-3 pl-4"
        } flex flex-col bg-linear-to-r from-primary-900 to-neutral-900`}
      >
        <div className="w-full xl:w-[1034px] h-8 flex flex-row items-center justify-between">
          <h4 className="text-neutral-50 hidden xl:block">{title}</h4>
          <h5 className="text-neutral-50 xl:hidden">{title}</h5>
          <img
            src={isOpen ? LessIcon : PlusIcon}
            alt={isOpen ? "Collapse" : "Expand"}
            className="w-6 h-6 xl:w-8 xl:h-8 cursor-pointer"
            onClick={toggleAccordion}
          />
        </div>

        {isOpen && (
          <motion.div
            className="flex flex-col gap-4 mt-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {items.map((item, index) => (
              <div key={index}>
                <hr className="w-full xl:w-[1034px] h-[1.5px] border-0 bg-linear-to-r from-primary-500 to-secondary-500" />
                <div
                  className={`w-full xl:w-[1043px] ${
                    openItems.includes(index) ? "h-auto" : "h-6"
                  } flex flex-col gap-3 mt-4`}
                >
                  <div className="w-full xl:w-[1034px] h-6 flex flex-row items-center justify-between">
                    <p className="font-body-normal-medium text-neutral-50">
                      {item.question}
                    </p>
                    <img
                      src={openItems.includes(index) ? ChevronUp : ChevronDown}
                      alt={openItems.includes(index) ? "Collapse" : "Expand"}
                      className="w-5 h-5 xl:w-6 xl:h-6 cursor-pointer"
                      onClick={() => toggleItem(index)}
                    />
                  </div>
                  {openItems.includes(index) && (
                    <motion.p
                      className="font-body-normal-regular text-neutral-50"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
