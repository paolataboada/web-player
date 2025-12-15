import { useNavigate } from "react-router-dom";
import Arrow from "@global/assets/icons/shared/arrow-left.svg";
import InputField from "@global/components/forms/InputField";
import FantasyButton from "@global/components/buttons/FantasyButton";
import UserIcon from "@global/assets/icons/profile/person-fill-lock2.svg?react";

const EditPlayerPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full mb-5">
      <div className="max-w-[380px] mx-auto">
        <div className="relative w-full h-16 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="p-1 hover:opacity-80 transition-opacity z-10">
            <img src={Arrow} alt="Back" className="w-6 h-6" />
          </button>
          <p className="text-neutral-50 text-lg font-body-large-medium absolute left-1/2 transform -translate-x-1/2">
            Perfil
          </p>
        </div>
        <div className="w-full space-y-6 mt-6">
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
            <div className="grid grid-cols-2 gap-6">
              <FantasyButton
                type="button"
                variant="secondary"
                size="lg"
                onClick={handleBack}>
                Volver
              </FantasyButton>
              <FantasyButton
                type="button"
                variant="primary"
                size="lg"
                className="">
                Guardar cambios
              </FantasyButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPlayerPage;
