import type { TFormSignUp } from "../types/form-sign-up.types";

export const FIELDS_PER_STEP = {
    "Create Account": ["firstName", "lastName", "email", "birthDate"],
    "Custom Account": [
        "username",
        "documentType",
        "documentNumber",
        "password",
        "confirmPassword",
        "acceptDeclaration",
        "acceptInformation",
        "acceptTerms",
    ],
    "Choose Team": ["teamId"],
} as const satisfies Record<string, Array<keyof TFormSignUp>>;

export const STEP_KEYS = ["Create Account", "Custom Account", "Choose Team"] as const;