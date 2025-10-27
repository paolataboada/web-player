import { useMemo } from "react";

export const usePasswordValidation = (password: string) => {
    const validations = useMemo(() => ({
        length: password.length >= 8,
        number: /\d/.test(password),
        lowercase: /[a-z]/.test(password),
        uppercase: /[A-Z]/.test(password),
        special: /[!@#$%^&*]/.test(password),
    }), [password]);

    const rules = [
        { key: "length", text: "Al menos 8 caracteres", valid: validations.length },
        { key: "number", text: "Al menos 1 número", valid: validations.number },
        { key: "lowercase", text: "Al menos 1 letra minúscula", valid: validations.lowercase },
        { key: "uppercase", text: "Al menos 1 letra mayúscula", valid: validations.uppercase },
        { key: "special", text: "Al menos 1 símbolo (!@#$%^&*)", valid: validations.special },
    ];

    const fulfilled = Object.values(validations).filter(Boolean).length;
    const total = Object.keys(validations).length;

    const getBarColor = () => {
        if (fulfilled <= 1) return "var(--color-red-500)";
        if (fulfilled <= 3) return "var(--color-orange-500)";
        return "var(--color-green-500)";
    };

    const getProgressWidth = () => `${(fulfilled / total) * 100}%`;

    return { validations, rules, getBarColor, getProgressWidth, fulfilled, total };
};