import { useCallback } from "react";
import type { UseFormSetValue } from "react-hook-form";

type Props = {
    setValue: UseFormSetValue<{ code: string[] }>;
    shouldAutoFocus?: boolean;
    codeLength?: number;
};

export const useCodeInputs = ({ setValue, codeLength = 6 }: Props) => {
    const focusInput = useCallback((index: number) => {
        const input = document.querySelector(`input[name="code.${index}"]`) as HTMLInputElement | null;
        input?.focus();
    }, []);

    const handlePaste = useCallback(
        (e: React.ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault();
            const pasteData = e.clipboardData
                .getData("text")
                .replace(/\s+/g, "")
                .replace(/[^0-9]/g, "")
                .slice(0, codeLength);

            const chars = pasteData.split("");
            chars.forEach((char, i) => setValue(`code.${i}`, char));

            const lastIndex = Math.min(chars.length, codeLength) - 1;
            focusInput(lastIndex);
        },
        [setValue, codeLength, focusInput]
    );

    const handleChange = useCallback(
        (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.replace(/[^0-9]/g, "");
            setValue(`code.${index}`, value);

            if (value && index < codeLength - 1) focusInput(index + 1);
        },
        [setValue, codeLength, focusInput]
    );

    const handleKeyDown = useCallback(
        (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
                focusInput(index - 1);
            }
        },
        [focusInput]
    );

    return { handlePaste, handleChange, handleKeyDown };
};
