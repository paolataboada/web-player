// UserDataProfileCard.tsx
interface UserDataProfileCardProps {
  icon: string;
  name: string;
  value: string;
  className?: string;
  onClick?: () => void;
}

export const UserDataProfileCard = ({ 
  icon, 
  name, 
  value, 
  className,
  onClick 
}: UserDataProfileCardProps) => {
  return (
    <div 
      className={`w-full h-[81px] p-px rounded-xl
      bg-linear-to-r from-primary-600 via-neutral-500 to-secondary-600 ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div
        className="w-full h-full rounded-xl p-4 
        flex items-center gap-2 sm:gap-3 bg-primary-900"
      >
        <img className="w-6 h-6" src={icon} alt={name} />
        
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <p className="text-neutral-50 font-body-normal-medium">{name}</p>
          <p className="text-neutral-200 font-body-normal-regular">{value}</p>
        </div>
      </div>
    </div>
  )
}