interface UserLevelBadgeProps {
  level: string;
  currentXP?: string;
  maxXP?: string;
  showXP?: boolean; 
}

export const UserLevelBadge = ({ level, currentXP, maxXP, showXP = true }: UserLevelBadgeProps) => {
  return (
    <div>
      <div className="w-[250px] h-[250px] rounded-full p-1 bg-linear-to-r from-primary-500/20 to-secondary-900 shadow-[0px_0px_31px_0px_var(--color-primary-500)] mb-2">
        <div className="w-full h-full rounded-full bg-linear-to-r from-primary-500/10 to-secondary-500/15 flex items-center justify-center">
          <h1 className="text-neutral-50 text-[120px]!">{level}</h1>
        </div>
      </div>
      
      {showXP && currentXP && maxXP && (
        <div className="w-full max-w-[922px] h-6 flex justify-center items-center gap-2">
          <h4 className="text-primary-200">{currentXP}</h4>
          <h4 className="text-primary-500">/ {maxXP}</h4>
        </div>
      )}
    </div>
  );
};