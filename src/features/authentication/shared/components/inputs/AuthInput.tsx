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
                <div className="flex items-center gap-2">
                    <label htmlFor={inputProps.id} className="font-AlbertSans font-normal text-white text-base">
                        {label}
                    </label>
                </div>
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

            {error && <p className="text-[#F21F29] text-sm">{error}</p>}
        </div>
    );
};

export default AuthInput

