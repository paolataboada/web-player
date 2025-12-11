import clsx from "clsx";

interface FantasyContainerInputProps {
  children: React.ReactNode;
  error?: string;
  disabled?: boolean;
  className?: string;
}
const FantasyContainerInput = ({
  children,
  error,
  disabled,
  className,
}: FantasyContainerInputProps) => {

  return (
    <div className="w-full text-left">
      <div
        className={clsx(
          "relative flex items-center p-3 rounded-xl border gap-2",
          "text-neutral-300",
          "transition-all border",
          "focus-within:text-neutral-900",
          error
            ? "border-red-500 focus-within:border-red-500"
            : "border-transparent",
          disabled
            ? "bg-neutral-900 cursor-not-allowed  border-neutral-500! focus-within:border-neutral-500"
            : `bg-neutral-500 focus-within:border text-neutral-50 focus-within:border-neutral-500`,
          className
        )}
      >
        {children}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default FantasyContainerInput;
