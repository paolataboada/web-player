import XmarkIcon from "@global/assets/icons/modals/x.svg";
import PatternBg from "@global/assets/icons/modals/pattern.svg";

interface ModalBaseLeaguesProps {
  isOpen: boolean;
  title: string;
  icon?: string;
  children: React.ReactNode;
  onClose: () => void;
  iconSize?: string;
}

export const ModalBaseLeagues = ({
  isOpen,
  title,
  icon,
  children,
  onClose,
  iconSize = "w-16 h-16",
}: ModalBaseLeaguesProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div 
        className="absolute inset-0 bg-neutral-900 opacity-50"
        onClick={handleBackdropClick}
      />
      
      <div className="relative w-full max-w-[550px]">
        <div className="relative bg-neutral-900 rounded-4xl p-10 border border-neutral-500 max-h-[85dvh] overflow-y-auto">
          <img 
            src={PatternBg} 
            alt="pattern background" 
            className="absolute inset-0 w-full h-full object-cover rounded-4xl opacity-80"
          />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity z-10"
          >
            <img src={XmarkIcon} alt="close" className="w-6 h-6" />
          </button>

          <div className="relative z-10 flex flex-col items-center gap-2">
            {icon && <img className={iconSize} src={icon} alt="Icon" />}
            <h4 className="text-neutral-50 text-lg sm:text-xl font-bold text-center sm:hidden">{title}</h4>
            <h3 className="text-neutral-50 text-xl font-bold text-center hidden sm:block">{title}</h3>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-6 mt-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};