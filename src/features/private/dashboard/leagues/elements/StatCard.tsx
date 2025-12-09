interface StatCardProps {
  value: string;
  label: string;
  fullWidth?: boolean;
  align?: "start" | "center";
  className?: string;
  compact?: boolean;
  maxLines?: number; 
}

const StatCard = ({ 
  value, 
  label, 
  fullWidth = false, 
  align = "start",
  className = "",
  compact = false,
  maxLines = 1 
}: StatCardProps) => {
  const widthClass = fullWidth ? "w-full" : "flex-1 min-w-0";
  
  const heightClass = compact 
    ? "h-[75px] sm:h-[80px] lg:h-[90px]" 
    : "h-[80px] sm:h-[85px] lg:h-[98px]";
  
  const alignClass = align === "center" ? "items-center" : "items-start";
  const textAlignClass = align === "center" ? "text-center" : "text-left";
  
  const lineClampClass = maxLines === 1 
    ? "truncate" 
    : `line-clamp-${maxLines}`;

  return (
    <div className={`relative ${widthClass} ${heightClass} ${className}`}>
      <div className="absolute inset-0 rounded-xl p-px bg-linear-to-br from-primary-500 to-secondary-500">
        <div className={`w-full h-full rounded-xl p-2 bg-linear-to-br from-primary-700 to-secondary-900 flex flex-col ${alignClass} justify-center`}>

          <div className="w-full">
            <h4 className={`text-neutral-50 ${textAlignClass} ${lineClampClass}
              ${compact 
                ? 'text-lg sm:text-xl lg:text-2xl' 
                : 'text-xl sm:text-2xl lg:text-2xl'
              }
              wrap-break-word overflow-hidden
              min-h-[1.5em] leading-tight`}>
              {value}
            </h4>
          </div>
          
          <div className="w-full mt-0.5 sm:mt-1">
            <p className={`text-neutral-50 ${textAlignClass} ${lineClampClass}
              ${compact 
                ? 'font-body-extrasmall-medium sm:font-body-small-regular' 
                : 'font-body-extrasmall-medium sm:font-body-small-regular'
              }
              wrap-break-word overflow-hidden
              leading-tight`}>
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;