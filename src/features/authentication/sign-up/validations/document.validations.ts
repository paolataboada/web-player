import { EDocumentType } from "@entities/player/types";

export const getDocumentValidations = (documentType?: EDocumentType) => ({
    documentType: {
        required: "Selecciona un tipo",
    },
    documentNumber: {
        required: "Ingresa el número",
        validate: (value: string) => {
            if (!documentType) return true;

            switch (documentType) {
                case EDocumentType.DNI:
                    return /^\d{8}$/.test(value) || "El DNI debe tener 8 dígitos";
                case EDocumentType.RUC:
                    return /^\d{11}$/.test(value) || "El RUC debe tener 11 dígitos";
                case EDocumentType.PASSPORT:
                    if (value.length < 6) return "Al menos 6 caracteres";
                    if (value.length > 15) return "Máximo 15 caracteres";
                    return true;
                case EDocumentType.FOREIGN_ID_CARD:
                    if (value.length < 6) return "Al menos 6 caracteres";
                    if (value.length > 12) return "Máximo 12 caracteres";
                    return true;
                default:
                    return true;
            }
        },
    },
})