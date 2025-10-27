import { useState } from "react";
import { Link } from "react-router-dom";

interface AuthCheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  linkText?: string;
  href?: string;
}

const AuthCheckboxInput = ({
  label,
  linkText,
  href = "#",
  ...inputProps
}: AuthCheckboxInputProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center mb-2">
      <input
        id={inputProps.id ?? label}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        {...inputProps}
        className="w-6 h-6 focus:ring-2 cursor-pointer"
      />
      <label
        htmlFor={inputProps.id ?? label}
        className="ms-2 font-body-normal-regular text-neutral-200"
      >
        {label}
        {linkText && (
          <Link
            target="_blank"
            to={href}
            className="text-neutral-50 font-bold hover:underline ml-1"
          >
            {linkText}
          </Link>
        )}
        .
      </label>
    </div>
  );
};

export default AuthCheckboxInput;
