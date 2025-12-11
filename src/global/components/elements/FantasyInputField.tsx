import { useEffect } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface FantasyInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
}

const FantasyInputField: React.FC<FantasyInputFieldProps> = ({
  register,
  disabled,
  className,
  ...props
}) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      input.input-no-autofill:-webkit-autofill {
        background-color: transparent !important;
        box-shadow: 0 0 0 1000px transparent inset !important;
        -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
        -webkit-text-fill-color: var(--color-neutral-50) !important;
        caret-color: var(--color-neutral-50) !important;
        transition: background-color 9999s ease-in-out 0s;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handlers automáticos SOLO para type="number"
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.type === "number") {
      if (["e", "E"].includes(e.key)) e.preventDefault();
    }
    props.onKeyDown?.(e);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (props.type === "number") {
      const paste = e.clipboardData.getData("text").trim();
      const numberRegex = /^-?\d*\.?\d+$/;

      if (!numberRegex.test(paste)) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      const target = e.target as HTMLInputElement;
      target.value = paste;
      target.dispatchEvent(new Event("input", { bubbles: true }));
      return;
    }
    props.onPaste?.(e);
  };

  return (
    <input
      {...register}
      {...props}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      className={`input-no-autofill w-full bg-transparent font-body-normal-regular
        placeholder:text-neutral-300 placeholder:font-body-normal-regular
        focus:outline-none ${className}
        ${disabled
          ? "cursor-not-allowed text-neutral-300 placeholder:text-neutral-300 select-none"
          : "cursor-auto text-neutral-50"}`}
    />
  );
};

export default FantasyInputField;
