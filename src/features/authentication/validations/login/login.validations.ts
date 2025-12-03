import { validateTrimmed } from "@features/authentication/shared/utils/validate-trimmed";

export const validationsLogin = {
    identifier: {
        required: "Ingrese su nombre de usuario o correo electrónico",
        minLength: {
            value: 3,
            message: "Al menos 3 caracteres",
        },
        maxLength: {
            value: 40,
            message: "No debe superar 40 caracteres",
        },
        validate: (value: string | undefined) => {
            return validateTrimmed(value, "su nombre de usuario o correo electrónico");
        },
    },
    password: {
        required: "Ingrese su contraseña",
        minLength: {
            value: 5,
            message: "Al menos 5 caracteres",
        },
        maxLength: {
            value: 15,
            message: "No debe superar 15 caracteres",
        },
        validate: (value: string | undefined) => {
            return validateTrimmed(value, "su contraseña");
        },
    },
}