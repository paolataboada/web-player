import { validateTrimmed } from "@features/authentication/shared/utils/validate-trimmed";
import { isValidDomain } from "@global/utils/is-valid-domain";

export const signUpValidations = {
	username: {
		required: "Ingrese un nombre de usuario",
		minLength: {
			value: 3,
			message: "Al menos 3 caracteres",
		},
		maxLength: {
			value: 15,
			message: "No debe superar 15 caracteres",
		},
		pattern: {
			value: /^[A-Za-z]+$/,
			message: "Solo se permiten letras mayúsculas y minúsculas",
		},
		validate: (value: string | undefined) => {
			return validateTrimmed(value, "su nombre de usuario");
		},
	},
	firstName: {
		required: "Ingrese sus nombres",
		minLength: {
			value: 3,
			message: "Al menos 3 caracteres",
		},
		maxLength: {
			value: 30,
			message: "No debe superar 30 caracteres",
		},
		pattern: {
			value: /^[A-Za-z\s]+$/,
			message: "Solo se permiten letras y espacios",
		},
		validate: (value: string | undefined) => {
			return validateTrimmed(value, "sus nombres");
		},
	},
	lastName: {
		required: "Ingrese sus apellidos",
		minLength: {
			value: 3,
			message: "Al menos 3 caracteres",
		},
		maxLength: {
			value: 40,
			message: "No debe superar 40 caracteres",
		},
		pattern: {
			value: /^[A-Za-z\s]+$/,
			message: "Solo se permiten letras y espacios",
		},
		validate: (value: string | undefined) => {
			return validateTrimmed(value, "sus apellidos");
		},
	},
	email: {
		required: "Ingrese su correo electrónico",
		maxLength: {
			value: 40,
			message: "No debe superar 40 caracteres",
		},
		pattern: {
			value: /^\s*[A-Z0-9._%+-\s]+@[A-Z0-9.-\s]+\.[A-Z]{2,}\s*$/i,
			message: "Correo electrónico no válido",
		},
		validate: {
			isValidDomain: (value: string) =>
				isValidDomain(value) || "El dominio no es válido",
			noPlusSign: (value: string) =>
				!value.includes("+") || "El carácter '+' no está permitido",
			noInternalSpaces: (value: string) =>
				!value.trim().includes(" ") || "No se permiten espacios dentro del correo",
			noSpaces: (value: string) =>
				validateTrimmed(value, "su correo electrónico"),
		},
	},
	birthDate: {
		required: "Ingrese su fecha de nacimiento",
		validate: (date: string) => {
			if (date) {
				if (date.toString() === "Invalid Date") return "La fecha es inválida";

				const minYear = new Date(date).getFullYear();
				if (minYear < 1900) return "La fecha es inválida";

				const today = new Date();
				const maxYear = today.setFullYear(today.getUTCFullYear() - 18);
				const LIMIT = new Date(maxYear).getTime();
				const CURRENT = new Date(date).getTime();
				if (CURRENT > LIMIT) return "Solo mayores de 18 años";

				return true;
			}
			return false;
		},
	},
	acceptDeclaration: {
		required: "Debes aceptar la declaración",
	},
	acceptInformation: {
		required: "Debes aceptar recibir información y datos",
	},
	acceptTerms: {
		required: "Debes aceptar los términos y condiciones",
	},
};
