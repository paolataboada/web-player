export const SIGN_UP_VALIDATION = {
    STANDARD: {
        KEYS: ["Create Account", "Custom Account", "Choose Team"],
        FIELDS_PER_STEP: {
            "Create Account": ["firstName", "lastName", "email", "birthDate"],
            "Custom Account": [
                "username",
                "password",
                "confirmPassword",
                "acceptDeclaration",
                "acceptInformation",
                "acceptTerms",
            ],
            "Choose Team": ["teamId"],
        }
    },
    PROVIDER: {
        KEYS: ["Create Account Provider", "Choose Team"],
        FIELDS_PER_STEP: {
            "Create Account Provider": [
                "username",
                "acceptDeclaration",
                "acceptInformation",
                "acceptTerms"
            ],
            "Choose Team": ["teamId"],
        }
    },
} as const;