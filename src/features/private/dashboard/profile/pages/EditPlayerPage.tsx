import { useNavigate } from "react-router-dom";
import InputField from "@global/components/forms/InputField";
import FantasyButton from "@global/components/buttons/FantasyButton";
import UserIcon from "@global/assets/icons/profile/person-fill-lock2.svg?react";
import { BreadCrumb } from "@global/components/navbars/BreadCrumb";
import { ROUTES } from "@navigation/routes/routes";
import MotionContainer from "@global/containers/MotionContainer"

const EditPlayerPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <MotionContainer className="w-full min-w-screen h-screen -m-4 overflow-x-hidden md:m-0 md:min-w-0 md:h-full flex flex-col">
      <BreadCrumb title="Perfil" to={ROUTES.PROFILE} />

      <div className="p-4 flex-1 flex flex-col">
        <div className="w-full space-y-6 mt-6 flex-1">
          <h4 className="text-neutral-50 mb-6">Editar perfil</h4>
          <form className="w-full space-y-5">
            <InputField
              label="Nombre"
              name="lastName"
              placeholder="Ingresa tu Nombre"
              icon={
                <UserIcon className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
              }
              className="pl-10 sm:pl-11 w-full"
            />

            <InputField
              label="Apellido"
              name="lastName"
              placeholder="Ingresa tu apellido"
              icon={
                <UserIcon className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" />
              }
              className="pl-10 sm:pl-11 w-full"
            />
          </form>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <FantasyButton
            type="button"
            variant="secondary"
            size="lg"
            onClick={handleBack}>
            Volver
          </FantasyButton>
          <FantasyButton type="button" variant="primary" size="lg">
            Guardar cambios
          </FantasyButton>
        </div>
      </div>
    </MotionContainer>
  );
};

export default EditPlayerPage;
