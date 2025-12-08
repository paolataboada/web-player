import React from "react";

type ETag = "Required" | "Successfully" | "Optional";

const tagStyles: Record<ETag, string> = {
   Required: "bg-red-100 text-red-500",
   Successfully: "bg-green-100 text-green-500",
   Optional: "bg-neutral-100 text-neutral-500",
};

interface Props {
   label?: string;
   children: React.ReactNode;
   className?: string;
   tag?: ETag;
   disabled?: boolean;
}

const FantasyLabelInput = ({ label, children, className, tag, disabled }: Props) => {
   return (
      <div className={`${className}`}>
         {label && (
            <div
               className="flex items-center gap-1.5 pb-1">
               <label className={`font-body-normal-regular ${disabled? "text-neutral-400":"text-neutral-50"}`}>
                  {label}
               </label>
               {tag &&
                  <div
                     className={`body-small-medium flex items-center px-2 h-[22px] w-min rounded-full ${tagStyles[tag]}`}>
                     {tag}
                  </div>
               }
            </div>
         )}
         {children}
      </div>
   );
};

export default FantasyLabelInput;