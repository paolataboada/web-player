import FantasyButton from "@global/components/buttons/FantasyButton";
import { PasswordInputField } from "@global/components/forms/PasswordInputField";
import { BreadCrumb } from "@global/components/navbars/BreadCrumb";
import { ROUTES } from "@navigation/routes/routes";
import MotionContainer from "@global/containers/MotionContainer"

const ChangePasswordPage = () => {
  return (
    <MotionContainer className="w-full min-w-screen h-screen -m-4 overflow-x-hidden md:m-0 md:min-w-0 md:h-full flex flex-col">
      <BreadCrumb title="Cambiar contraseña" to={ROUTES.PROFILE} />

      <div className="max-w-[380px] mx-auto flex-1 flex flex-col">
        <div className="w-full space-y-6 mt-6 flex-1 flex flex-col">
          <h3 className="text-neutral-50 text-center text-xl sm:text-2xl">
            Establece una nueva Contraseña
          </h3>
          <p className="font-body-normal-regular text-neutral-50 text-left">
            Crea una nueva contraseña y recupera tu acceso para seguir compitiendo.
          </p>

          <form className="flex-1 flex flex-col space-y-6">
            <PasswordInputField
              label="Ingresa tu contraseña actual"
              placeholder="Ingresa tu antigua contraseña"
              autoComplete="new-password"
            />

            <PasswordInputField
              label="Crea nueva contraseña"
              placeholder="Crea nueva contraseña"
            />

            <PasswordInputField
              label="Confirmar Nueva Contraseña"
              placeholder="Confirmar Nueva Contraseña"
            />

            <div className="mt-auto pb-4">
              <FantasyButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Guardar cambios
              </FantasyButton>
            </div>
          </form>
        </div>
      </div>
    </MotionContainer>
  );
};

export default ChangePasswordPage;
