interface ExperienciaBarProps {
  currentXP: string;
  maxXP: string;
  progressPercentage: number;
  size?: 'extrasmall' | 'normal'; 
  barHeight?: 'h-2' | 'h-5';
}

export const ExperienciaBar = ({ 
  currentXP, 
  maxXP, 
  progressPercentage, 
  size = 'extrasmall',
  barHeight = 'h-2'
}: ExperienciaBarProps) => {
  const textClasses = {
    extrasmall: "font-body-extrasmall-medium",
    normal: "font-body-normal-medium"
  };

  return (
    <div className="flex-1">
      <div className={`w-full bg-neutral-900 rounded-full ${barHeight}`}>
        <div
          className={`rounded-full bg-linear-to-r from-primary-500 to-secondary-500 ${barHeight}`}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="flex justify-between pt-2">
        <p className={textClasses[size]}>{currentXP} PX</p>
        <p className={`${textClasses[size]} text-neutral-50`}>
          {maxXP} PX
        </p>
      </div>
    </div>
  );
};