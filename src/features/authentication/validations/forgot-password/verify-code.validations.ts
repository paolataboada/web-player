export const verifyCodeValidations = {
    code: {
        required: "Ingrese el código de verificación",
        validate: (_: string, formValues: { code: string[] }) => {
            const joined = formValues.code.join("");
            return joined.length === 6 || "Complete el código de verificación";
        },
    }
}