import AuthInput from "@features/authentication/shared/components/inputs/AuthInput";
import FantasyButton from "../../../../../../global/components/buttons/FantasyButton";
import AuthCheckboxInput from "../../../../shared/components/inputs/AuthCheckboxInput";
import { PasswordStrength } from "@features/authentication/shared/components/passwords/PasswordStrength";
import { useState } from "react";
import { usePasswordValidation } from "@features/authentication/shared/hooks/usePasswordValidation";
import IconOpenEye from "@global/components/icons/IconOpenEye";
import IconCloseEye from "@global/components/icons/IconCloseEye";
import AuthSelect from "@features/authentication/shared/components/inputs/AuthSelect";
import { EDocumentType } from "@entities/player/types";
import MotionContainer from "@global/containers/MotionContainer";

interface Props {
    nextStep: () => void;
    previousStep: () => void;
}

const CustomAccount = ({ nextStep, previousStep }: Props) => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState({ new: false, confirm: false });
    const [identifyType, setIdentifyType] = useState(EDocumentType.DNI);
    const [identifyNumber, setIdentifyNumber] = useState("");

    const togglePassword = (key: "new" | "confirm") => {
        setShowPassword(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const { rules, getBarColor, getProgressWidth } = usePasswordValidation(password);

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
        <MotionContainer key="custom-account">
            <form className="grid gap-6 mt-8">
                <AuthInput
                    label="Username"
                    placeholder="Ingresa tu username"
                />

                <div className="grid grid-cols-2 gap-2">
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

                <div className="grid gap-4">
                    <AuthInput
                        type={showPassword.new ? "text" : "password"}
                        label="Contraseña"
                        placeholder="Contraseña"
                        icon={
                            <div
                                onClick={() => togglePassword("new")}
                                className="absolute bottom-0 right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                                {showPassword.new ? <IconOpenEye color="white" size={24} /> : <IconCloseEye color="white" size={24} />}
                            </div>
                        }
                        className="pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <PasswordStrength
                        rules={rules}
                        getBarColor={getBarColor}
                        getProgressWidth={getProgressWidth}
                    />
                </div>

                <AuthInput
                    type={showPassword.confirm ? "text" : "password"}
                    label="Confirmar Nueva Contraseña"
                    placeholder="Confirmar Nueva Contraseña"
                    icon={
                        <div
                            onClick={() => togglePassword("confirm")}
                            className="absolute bottom-0 right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                            {showPassword.confirm ? <IconOpenEye color="white" size={24} /> : <IconCloseEye color="white" size={24} />}
                        </div>
                    }
                    className="pr-10"
                />

                <div className="grid gap-2 my-3.5">
                    <AuthCheckboxInput
                        label="Declaración"
                    />
                    <AuthCheckboxInput
                        label="Acepto recibir"
                        linkText="Información y Datos"
                    />
                    <AuthCheckboxInput
                        label="Al hacer clic en siguiente acepta los"
                        linkText="Términos y Condiciones"
                    />
                </div>

                <div className="flex gap-2">
                    <FantasyButton variant="secondary" size="lg" className="w-full" onClick={previousStep}>Volver</FantasyButton>
                    <FantasyButton variant="primary" size="lg" className="w-full" onClick={nextStep}>Siguiente</FantasyButton>
                </div>
            </form>
        </MotionContainer>
    )
}

export default CustomAccount;
