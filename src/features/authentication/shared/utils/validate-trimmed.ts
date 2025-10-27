export const validateTrimmed = (value: string | undefined, label: string) => {
    if (!value) return `Ingrese ${label}`;

    const trimmed = value.trim();
    if (trimmed === "") return "El campo no puede tener solo espacios";
    if (value !== trimmed) return "El campo no debe tener espacios al inicio ni al final";

    return true;
};