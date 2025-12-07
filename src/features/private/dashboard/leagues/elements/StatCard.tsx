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
  const widthClass = fullWidth ? "w-full" : "flex-1 min-w-0";
  
  const heightClass = compact 
    ? "h-[75px] sm:h-[80px] lg:h-[90px]" 
    : "h-[80px] sm:h-[85px] lg:h-[98px]";
  
  const alignClass = align === "center" ? "items-center" : "items-start";
  const textAlignClass = align === "center" ? "text-center" : "text-left";
  
  return (
    <div className={`relative ${widthClass} ${heightClass} ${className}`}>
      <div className="absolute inset-0 rounded-xl p-px bg-linear-to-br from-primary-500 to-secondary-500">
        <div className={`w-full h-full rounded-xl p-3 sm:p-3.5 lg:p-4 bg-linear-to-br from-primary-700 to-secondary-900 flex flex-col ${alignClass} justify-center`}>
          <h4 className={`text-neutral-50 ${textAlignClass}
            ${compact 
              ? 'text-lg sm:text-xl lg:text-2xl' 
              : 'text-xl sm:text-2xl lg:text-2xl'
            }`}>
            {value}
          </h4>
          <p className={`text-neutral-50 mt-0.5 sm:mt-1 ${textAlignClass}
            ${compact 
              ? 'font-body-extrasmall-medium sm:font-body-small-regular' 
              : 'font-body-extrasmall-medium sm:font-body-small-regular'
            }`}>
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;