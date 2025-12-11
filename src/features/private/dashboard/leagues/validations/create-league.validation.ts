export const validationCreateLeague = {
	name: {
		required: "Ingrese un nombre",
		minLength: {
			value: 3,
			message: "Al menos 3 caracteres.",
		},
		maxLength: {
			value: 30,
			message: "No debe superar 30 caracteres.",
		},
		validate: {
			noSpaces: (value?: string) =>
				value && value.trim() === value
					? true
					: "El campo no debe tener espacios al inicio ni al final",
			onlyLetters: (value?: string) =>
				value && /^[A-Za-zÀ-ÿ\s]+$/.test(value)
					? true
					: "Solo se permiten letras y espacios",
		},
	},
	players: {
		required: "Ingrese el número de jugadores"
	}

};
