import FantasyButton from "@global/components/buttons/FantasyButton";
import XmarkIcon from "@global/assets/icons/modals/xmark.svg";

interface BaseModalProps {
  isOpen: boolean;
  title: string;
  icon?: string;
  children: React.ReactNode;
  onClose?: () => void;
  showCloseButton?: boolean;
  titleSize?: "h3" | "h4";
  iconSize?: string;
}

export const BaseModal = ({
  isOpen,
  title,
  icon,
  children,
  onClose,
  showCloseButton = false,
  titleSize = "h3",
  iconSize = "w-16 h-16",
}: BaseModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
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
        {showCloseButton && onClose && (
          <div className="absolute -top-4 -right-4 z-10">
            <FantasyButton
              type="button"
              variant="primary"
              size="md"
              className="p-2!"
              onClick={onClose}
            >
              <img src={XmarkIcon} alt="close" className="w-6 h-6" />
            </FantasyButton>
          </div>
        )}

        <div className="bg-neutral-900 rounded-4xl p-10 border border-neutral-500 max-h-[85dvh] overflow-y-auto">
          <div className="flex flex-col items-center gap-2">
            {icon && <img className={iconSize} src={icon} alt="Icon" />}
            {titleSize === "h3" ? (
              <h3 className="text-neutral-50 text-xl font-bold text-center">{title}</h3>
            ) : (
              <h4 className="text-neutral-200 text-xl font-bold text-center">{title}</h4>
            )}
          </div>
          <div className="flex flex-col items-center gap-6 mt-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};