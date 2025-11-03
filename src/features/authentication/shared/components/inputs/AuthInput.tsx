interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    className?: string;
    wrapperClassName?: string;
    icon?: React.ReactNode;
}

const AuthInput = ({
    label,
    error,
    className,
    wrapperClassName,
    icon,
    ...inputProps
}: Props) => {
    return (
        <div className={`grid gap-1.5 ${wrapperClassName ? wrapperClassName : ""}`}>
            {label &&
                <label htmlFor={inputProps.id} className="font-body-normal-regular text-neutral-50">
                    {label}
                </label>
            }

            <span className="relative">
                {icon && icon}
                <input
                    id={inputProps.id ?? label}
                    type={inputProps.type ?? "text"}
                    {...inputProps}
                    className={`bg-neutral-500 border rounded-xl w-full py-3 px-4 font-body-normal-regular
                    placeholder:font-body-normal-regular placeholder:text-neutral-300 focus:outline-0
                    focus:placeholder:text-neutral-200 disabled:placeholder:text-neutral-400
                    ${error ? "border-red-500" : "border-neutral-500"} ${className ? className : ""}`}
                />
            </span>

            {error?.trim() && <p className="font-body-small-regular text-red-500">{error}</p>}
        </div>
    );
};

export default AuthInput

