import { validateTrimmed } from "@features/authentication/shared/utils/validate-trimmed";

export const step2SignUpValidations = {
	username: {
		required: "Ingrese un nombre de usuario",
		minLength: {
			value: 3,
			message: "Al menos 3 caracteres",
		},
		maxLength: {
			value: 20,
			message: "No debe superar 20 caracteres",
		},
		pattern: {
			value: /^[A-Za-z]+$/,
			message: "Solo se permiten letras mayúsculas y minúsculas",
		},
		validate: (value: string | undefined) => {
			return validateTrimmed(value, "su nombre de usuario");
		},
	},
	birthDate: {
		required: "Ingrese su fecha de nacimiento",
		validate: (value: string) => {
			const date = new Date(value);
			if (isNaN(date.getTime())) return "La fecha es inválida";

			const year = date.getFullYear();
			if (year < 1900 || year > new Date().getFullYear()) return "La fecha es inválida";

			const today = new Date();
			const limitDate = new Date(
				today.getFullYear() - 18,
				today.getMonth(),
				today.getDate()
			);

			if (date > limitDate) return "Solo mayores de 18 años";

			return true;
		},
	},
	password: {
		required: "Ingrese su contraseña",
		minLength: {
			value: 6,
			message: "Al menos 6 caracteres",
		},
		maxLength: {
			value: 15,
			message: "No debe superar 15 caracteres",
		},
		pattern: {
			value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
			message: "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial",
		},
		validate: (value: string) => {
			return validateTrimmed(value, "su contraseña");
		},
	},
	confirmPassword: {
		required: "Confirme su contraseña",
		validate: (value: string, allValues: any) => {
			return value === allValues.password || "Las contraseñas no coinciden";
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
	}
};
