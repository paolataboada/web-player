interface UserLevelBadgeProps {
  level: string;
  currentXP?: string;
  maxXP?: string;
  showXP?: boolean;
  size?: number; 
  textClassName?: string; 
}

export const UserLevelBadge = ({
  level,
  currentXP,
  maxXP,
  showXP = true,
  size = 250,
  textClassName = "bg-linear-to-r from-orange-200 to-secondary-500 bg-clip-text text-transparent",
}: UserLevelBadgeProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <div
          className="
            absolute inset-0 rounded-full
            bg-linear-to-br from-orange-200 to-secondary-500
          "
          style={{
            WebkitMask:
              "radial-gradient(circle, transparent 68%, black 70%)",
            mask:
              "radial-gradient(circle, transparent 68%, black 70%)",
            filter:
              "drop-shadow(0 0 28px rgba(254,215,170,0.25)) drop-shadow(0 0 28px rgba(197,0,255,0.25))",
          }}
        />
        <h1
          className={`relative z-10 leading-none text-[120px]! ${textClassName}`}
        >
          {level}
        </h1>
      </div>

      {showXP && currentXP && maxXP && (
        <div className="mt-2 flex gap-1 text-sm">
          <span className="font-body-normal-medium text-primary-200">
            {currentXP}
          </span>
          <span className="font-body-normal-medium text-primary-500">
            / {maxXP}
          </span>
        </div>
      )}
    </div>
  );
};
