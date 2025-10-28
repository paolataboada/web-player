import { isValidDomain } from "@global/utils/is-valid-domain";

export const signUpValidations = {
	username: {
		required: "Username is required",
		minLength: {
			value: 4,
			message: "Four characters are required",
		},
		maxLength: {
			value: 13,
			message: "Username cannot be more than 13 characters",
		},
		pattern: {
			value: /^[A-Za-z]+$/,
			message: "Only a combination of uppercase letters and lowercase letters",
		},
	},
	firstName: {
		required: "First name is required",
		minLength: {
			value: 3,
			message: "Min 3 letters",
		},
		maxLength: {
			value: 30,
			message: "First name cannot be more than 30 characters",
		},
		pattern: {
			value: /^[A-Za-z\s]+$/,
			message: "Only letters and spaces are allowed",
		},
	},
	lastName: {
		required: "Last Name is required",
		minLength: {
			value: 3,
			message: "Min 3 letters",
		},
		maxLength: {
			value: 40,
			message: "Last name cannot be more than 40 characters",
		},
		pattern: {
			value: /^[A-Za-z\s]+$/,
			message: "Only letters and spaces are allowed",
		},
	},
	email: {
		required: "Email is required",
		pattern: {
			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			message: "Invalid email address",
		},
		validate: {
			isValidDomain: (value: string) =>
				isValidDomain(value) || "The domain is not valid",
			noPlusSign: (value: string) =>
				!value.includes("+") ||
				"The '+' character is not allowed in email addresses",
		},
		maxLength: {
			value: 40,
			message: "Email cannot be more than 40 characters",
		},
	},
	birthday: {
		required: "Enter your date of birth",
		validate: (date: Date) => {
			if (date) {
				if (date.toString() === "Invalid Date") return "The date is invalid";

				const minYear = new Date(date).getFullYear();
				if (minYear < 1900) return "The date is invalid";

				const today = new Date();
				const maxYear = today.setFullYear(today.getUTCFullYear() - 18);
				const LIMIT = new Date(maxYear).getTime();
				const CURRENT = new Date(date).getTime();
				if (CURRENT > LIMIT) return "Only over 18 years old";

				return true;
			}
			return false;
		},
	},
};
