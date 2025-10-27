import { validateTrimmed } from "@features/authentication/shared/utils/validate-trimmed";

export const validationsLogin = {
    identifier: {
        required: "Ingrese su nombre de usuario o correo electrónico",
        validate: (value: string | undefined) => {
            return validateTrimmed(value, "su nombre de usuario o correo electrónico");
        },
    },
    password: {
        required: "Ingrese su contraseña",
        validate: (value: string | undefined) => {
            const baseValidation = validateTrimmed(value, "su contraseña");
            if (baseValidation !== true) return baseValidation;

            if (value!.trim().length < 4) return "La contraseña parece demasiado corta";
            return true;
        },
    },
}