import { useNavigate } from "react-router-dom";
import Arrow from "@global/assets/icons/shared/arrow-left.svg";
import { useState } from "react";
import Notifications from "../elements/Notifications";
import MotionContainer from "@global/containers/MotionContainer";

const NotificationsPanelPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"invitations" | "notifications">(
    "invitations"
  );

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <MotionContainer>
      <div className="relative bg-neutral-900 w-full h-16 flex items-center justify-between">
        <button
          onClick={handleBack}
          className="p-1 hover:opacity-80 transition-opacity z-10">
          <img src={Arrow} alt="Back" className="w-6 h-6" />
        </button>
        <p className="text-neutral-50 text-lg font-body-large-medium absolute left-1/2 transform -translate-x-1/2">
          Novedades
        </p>
      </div>
      <div className="w-full mx-auto mb-6">
        <div className="bg-neutral-900 border-b border-neutral-500 w-full h-[42px] flex items-end justify-between">
          <div
            className="relative flex-1 text-center cursor-pointer"
            onClick={() => setActiveTab("invitations")}>
            <p
              className={`font-body-normal-medium pb-2 transition-colors ${
                activeTab === "invitations"
                  ? "text-neutral-50"
                  : "text-neutral-400 hover:text-neutral-300"
              }`}>
              Invitaciones
            </p>
            {activeTab === "invitations" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary-500 to-secondary-500"></div>
            )}
          </div>

          <div
            className="relative flex-1 text-center cursor-pointer"
            onClick={() => setActiveTab("notifications")}>
            <p
              className={`font-body-normal-medium pb-2 transition-colors ${
                activeTab === "notifications"
                  ? "text-neutral-50"
                  : "text-neutral-400 hover:text-neutral-300"
              }`}>
              Notificaciones
            </p>
            {activeTab === "notifications" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary-500 to-secondary-500"></div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-[380px] mx-auto py-3 px-4">
        <h5 className="text-neutral-50 mb-4">Hoy, 3 de Noviembre</h5>

        <div className="flex flex-col gap-5">
          {activeTab === "invitations" ? (
            <>
              <Notifications
                type="invitation"
                status="pending"
                title="Invitación de Martin Sanchez"
                description="Martin Sanchez te ha invitado a unirte a su liga llamada"
                leagueName="Los últimos siempre."
                time="Hace 5 min"
              />
              <Notifications
                type="invitation"
                status="rejected"
                title="Invitación de Valeria Ruiz"
                description="Valeria Ruiz te ha invitado a unirte a su liga llamada"
                leagueName="Literatura Sin Fronteras"
                time="Hace 10 min"
              />
              <Notifications
                type="invitation"
                status="accepted"
                title="Invitación de Carlos Mendoza"
                description="Carlos Mendoza te ha invitado a unirte a su liga llamada"
                leagueName="Los campeones"
                time="Hace 1 hora"
              />
            </>
          ) : (
            <>
              <Notifications
                type="notification"
                status="pending"
                title="Actualización de sistema disponible"
                description="Descarga la última versión para acceder a nuevas funciones"
                time="Hace 2 horas"
              />
              <Notifications
                type="notification"
                status="pending"
                title="Nuevo mensaje en el chat"
                description="Tienes un nuevo mensaje en la liga 'Fantasy Premier'"
                time="Hace 3 horas"
              />
              <Notifications
                type="notification"
                status="pending"
                title="Puntuación actualizada"
                description="Tu puntuación en la liga 'Campeones' ha sido actualizada"
                time="Hace 1 día"
              />
            </>
          )}
        </div>
      </div>
    </MotionContainer>
  );
};

export default NotificationsPanelPage;
