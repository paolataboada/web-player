import { useState, type InputHTMLAttributes } from "react";
import InputField from "./InputField";
import IconCloseEye from "@global/components/icons/IconCloseEye";
import IconOpenEye from "@global/components/icons/IconOpenEye";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
    label: string;
    error?: FieldError | undefined;
    register?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export const PasswordInputField = ({ label, placeholder, error, register, className, ...inputProps }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <InputField
            type={show ? "text" : "password"}
            label={label}
            placeholder={placeholder}
            className={className ? className + " pr-10" : "pr-10"}
            error={error}
            icon={
                <div
                    onClick={() => setShow(!show)}
                    className="absolute bottom-0 right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                    {show ? <IconOpenEye color="white" size={24} /> : <IconCloseEye color="white" size={24} />}
                </div>
            }
            {...register}
            {...inputProps}
        />
    );
};
