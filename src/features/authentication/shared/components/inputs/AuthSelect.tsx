import React from "react";

interface Option {
    value: string | number;
    label: string;
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    placeholder?: string;
    className?: string;
    wrapperClassName?: string;
    icon?: React.ReactNode;
    options: Option[];
}

const AuthSelect = ({
    label,
    error,
    className,
    wrapperClassName,
    icon,
    options,
    placeholder = "Seleccionar tipo",
    ...selectProps
}: Props) => {
    return (
        <div className={`grid gap-1.5 ${wrapperClassName ?? ""}`}>
            {label &&
                <label htmlFor={selectProps.id} className="font-body-normal-regular text-neutral-50">
                    {label}
                </label>
            }

            <span className="relative">
                {icon && icon}
                <select
                    defaultValue={selectProps.defaultValue ?? ""}
                    id={selectProps.id ?? label}
                    {...selectProps}
                    className={`bg-neutral-500 border rounded-xl w-full py-3 px-4 font-body-normal-regular
                    placeholder:font-body-normal-regular focus:outline-0
                    disabled:text-neutral-400 appearance-none cursor-pointer
                    ${error ? "border-red-500" : "border-neutral-500"} ${className ? className : ""}`}>
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </span>

            {error && <p className="text-[#F21F29] text-sm">{error}</p>}
        </div>
    );
};

export default AuthSelect;
