interface StatCardProps {
  value: string;
  label: string;
  fullWidth?: boolean;
  align?: "start" | "center";
  className?: string;
  compact?: boolean; 
}

const StatCard = ({ 
  value, 
  label, 
  fullWidth = false, 
  align = "start",
  className = "",
  compact = false
}: StatCardProps) => {
  const widthClass = fullWidth 
    ? "w-full" 
    : compact 
      ? "w-full xs:w-[140px] sm:w-[150px] md:w-[157.5px]" 
      : "w-full xs:w-[160px] sm:w-[170px] md:w-[157.5px] lg:w-[170px]";
  
  const heightClass = compact 
    ? "h-[75px] xs:h-[80px] sm:h-[85px] md:h-[90px]" 
    : "h-[80px] xs:h-[85px] sm:h-[90px] md:h-[98.33px]";
  
  const alignClass = align === "center" ? "items-center" : "items-start";
  const textAlignClass = align === "center" ? "text-center" : "text-left";
  
  return (
    <div className={`relative ${widthClass} ${heightClass} ${className}`}>
      <div className="absolute inset-0 rounded-xl p-px bg-linear-to-br from-primary-500 to-secondary-500">
        <div className={`w-full h-full rounded-xl p-3 xs:p-3.5 bg-linear-to-br from-primary-700 to-secondary-900 flex flex-col ${alignClass} justify-center`}>
          <h4 className={`text-neutral-50 font-bold 
            ${compact 
              ? 'text-lg xs:text-xl sm:text-2xl' 
              : 'text-xl xs:text-2xl sm:text-2xl md:text-2xl'
            } ${textAlignClass}`}>
            {value}
          </h4>
          <p className={`font-body-small-regular text-neutral-50 mt-1 
            ${compact 
              ? 'text-xs xs:text-sm' 
              : 'text-sm xs:text-sm'
            } ${textAlignClass}`}>
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;