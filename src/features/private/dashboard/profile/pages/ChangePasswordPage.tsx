import { useNavigate } from "react-router-dom";
import Arrow from "@global/assets/icons/shared/arrow-left.svg";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { PasswordInputField } from "@global/components/forms/PasswordInputField";

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[380px] mx-auto">
        <div className="relative w-full h-16 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="p-1 hover:opacity-80 transition-opacity z-10">
            <img src={Arrow} alt="Back" className="w-6 h-6" />
          </button>
          <p className="text-neutral-50 text-lg font-body-large-medium absolute left-1/2 transform -translate-x-1/2">
            Cambiar Contraseña
          </p>
        </div>
        <div className="w-full space-y-6 mt-6">
            <h3 className="text-neutral-50 text-center mb-6">
            Establece una nueva Contraseña
          </h3>
          <p className="font-body-normal-regular text-neutral-50 text-center">
          Crea una nueva contraseña y recupera tu acceso para seguir compitiendo.
        </p>
          <form className="space-y-6 w-full">
              <PasswordInputField
                label="Ingresa tu nueva contraseña actual"
                placeholder="Ingresa tu antigua contraseña"
                autoComplete="new-password"
              />

            <PasswordInputField
              label="Crea nueva contraseña"
              placeholder="Crea nueva contraseña"
            />

            <PasswordInputField
              label="Confirmar Nueva Contraseña"
              placeholder="Confirmar Nueva Contaseña"
            />

              <FantasyButton type="submit" variant="primary" size="lg" className="w-full">
                Guardar cambios
              </FantasyButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
