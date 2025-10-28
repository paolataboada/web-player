export const getPasswordValidations = (watchPassword: string) => ({
    password: {
        required: "La contraseña es obligatoria",
        minLength: {
            value: 8,
            message: "Debe tener al menos 8 caracteres",
        },
        validate: {
            noSpaces: (value: string) =>
                !/\s/.test(value) || "No puede contener espacios",
            number: (value: string) =>
                /\d/.test(value) || "Debe contener al menos un número",
            lowercase: (value: string) =>
                /[a-z]/.test(value) || "Debe contener al menos una letra minúscula",
            uppercase: (value: string) =>
                /[A-Z]/.test(value) || "Debe contener al menos una letra mayúscula",
            specialChar: (value: string) =>
                /[!@#$%^&*.]/.test(value) || "Debe contener al menos un carácter especial",
        },
    },
    confirmPassword: {
        required: "Confirma tu contraseña",
        validate: (value: string) => {
            return value === watchPassword || "Las contraseñas no coinciden";
        }
    }
});