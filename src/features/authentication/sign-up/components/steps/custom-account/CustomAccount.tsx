import AuthCheckboxInput from "../../../../shared/components/inputs/AuthChekbostInput";
import ColorPalette from "../../forms/ColorPalette";

const CustomAccount = () => {
  return (
    <div>
      <ColorPalette />
      <AuthCheckboxInput
        label="Declaracion"
        linkText=""
        href=""
      />
      <AuthCheckboxInput
        label="Acepto recibir"
        linkText="Informacion y Datos"
        href="#"
      />
      <AuthCheckboxInput
        label="Al hacer clic en siguiente acepta los"
        linkText="Terminos y condiciones"
        href="#"
      />
    </div>
  );
};

export default CustomAccount;
