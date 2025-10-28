import { EDocumentType } from "@entities/player/types";

export const DOCUMENT_OPTIONS = Object.values(EDocumentType).map((doc) => ({
    value: doc,
    label:
        doc === EDocumentType.PASSPORT ? "Pasaporte" :
            doc === EDocumentType.DNI ? "DNI" :
                doc === EDocumentType.RUC ? "RUC" :
                    "Carné de Extranjería"
}));