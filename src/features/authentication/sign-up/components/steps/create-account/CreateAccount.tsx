import { useNavigate } from "react-router-dom";
import FantasyButton from "../../../../../../global/components/buttons/FantasyButton";
import { AuthLinkText } from "../../../../shared/components/texts/AuthLinkText";
import { ROUTES } from "../../../../../../navigation/routes/routes";
import AuthInput from "../../../../shared/components/inputs/AuthInput";
import AuthSelect from "@features/authentication/shared/components/inputs/AuthSelect";
import { useState } from "react";
import { EDocumentType } from "@entities/player/types";

interface Props {
    nextStep: () => void;
}

const CreateAccount = ({ nextStep }: Props) => {
    const [identifyType, setIdentifyType] = useState(EDocumentType.DNI);
    const [identifyNumber, setIdentifyNumber] = useState("");

    const navigate = useNavigate();

    const documentOptions = [
        { value: "", label: "Seleccionar tipo" },
        ...Object.values(EDocumentType).map((doc) => ({
            value: doc,
            label:
                doc === EDocumentType.PASSPORT ? "Pasaporte" :
                    doc === EDocumentType.DNI ? "DNI" :
                        doc === EDocumentType.RUC ? "RUC" :
                            "Carné de Extranjería"
        })),
    ];

    return (
        <div>
            <form className="grid gap-6 mt-8">
                <AuthInput
                    label="Nombres"
                    placeholder="Ingresa tus nombres"
                />

                <AuthInput
                    label="Apellidos"
                    placeholder="Ingresa tus apellidos"
                />

                <AuthInput
                    label="Correo electrónico"
                    placeholder="Ingresa tu correo electrónico"
                />

                <div>
                    <label htmlFor="fechaNacimiento" className="block font-form-normal text-neutral-50 mb-1">Fecha de nacimiento</label>
                    <div className="flex space-x-2">
                        <select
                            id="fechaNacimiento-dd"
                            className="flex-1 px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                        >
                            <option>DD</option>
                        </select>
                        <select
                            id="fechaNacimiento-mm"
                            className="flex-1 px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                        >
                            <option>MM</option>
                        </select>
                        <select
                            id="fechaNacimiento-aaa"
                            className="flex-1 px-4 py-3 rounded-lg bg-neutral-400 text-neutral-50 font-form-normal appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary-500"
                        >
                            <option>AAA</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <AuthSelect
                        label="Documento de Identidad"
                        options={documentOptions}
                        value={identifyType}
                        onChange={(e) => setIdentifyType(e.target.value as EDocumentType)}
                    />

                    <AuthInput
                        placeholder="000 000 000 0"
                        value={identifyNumber}
                        onChange={(e) => setIdentifyNumber(e.target.value)}
                        className="mt-7.5"
                    />
                </div>

                <FantasyButton type="button" variant="primary" size="lg" className="mt-4 mb-2" onClick={nextStep}>
                    Siguiente
                </FantasyButton>
            </form>

            <AuthLinkText
                text="¿Ya tienes una cuenta?"
                linkText="Inicia sesión"
                onClick={() => navigate(ROUTES.LOGIN)}
                className="py-[18px] px-4"
            />
        </div>
    )
}

export default CreateAccount