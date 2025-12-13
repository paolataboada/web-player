import { useState } from 'react';
import Bell from "@global/assets/icons/popover/Bell.svg";
import Notifications from '../../elements/Notifications';

interface NotificationsPanelPopoverProps {
  isOpen: boolean;
  onClose?: () => void;
}

const NotificationsPanelPopover = ({
  isOpen,
  onClose,
}: NotificationsPanelPopoverProps) => {
  const [activeTab, setActiveTab] = useState<'invitations' | 'notifications'>('invitations');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end pt-20 pr-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-[428px] h-[748px] bg-neutral-900 border border-neutral-500 special-rounded shadow-2xl p-6 gap-3 flex flex-col">
        <div className="flex flex-col items-center text-center gap-1 shrink-0">
          <div className="flex items-center gap-2">
            <img src={Bell} alt="Bell" className="w-6 h-6" />
            <h5 className="text-neutral-50">Notificaciones</h5>
          </div>

          <div className="font-body-extrasmall-regular text-neutral-50">
            Tiene{" "}
            <span className="text-primary-500 font-medium">
              3 notificaciones
            </span>{" "}
            nuevas hoy
          </div>
        </div>
        <div className="w-full shrink-0">
          <div className="w-full h-12 flex items-center justify-between">
            <div
              className="relative flex-1 text-center cursor-pointer"
              onClick={() => setActiveTab('invitations')}
            >
              <p
                className={`font-body-normal-medium pb-2 transition-colors ${
                  activeTab === "invitations"
                    ? "text-neutral-50"
                    : "text-neutral-400 hover:text-neutral-300"
                }`}
              >
                Invitaciones
              </p>
              {activeTab === "invitations" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary-500 to-secondary-500"></div>
              )}
            </div>

            <div
              className="relative flex-1 text-center cursor-pointer"
              onClick={() => setActiveTab('notifications')}
            >
              <p
                className={`font-body-normal-medium pb-2 transition-colors ${
                  activeTab === "notifications"
                    ? "text-neutral-50"
                    : "text-neutral-400 hover:text-neutral-300"
                }`}
              >
                Notificaciones
              </p>
              {activeTab === "notifications" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary-500 to-secondary-500"></div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-hidden">
          <h5 className="text-neutral-50 my-3 shrink-0">Hoy, 3 de Noviembre</h5>
          
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'invitations' ? (
              <div className="flex flex-col gap-3">
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
              </div>
            ) : (
              <div className="flex flex-col gap-3">
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
                  title="Actualización de sistema disponible"
                  description="Descarga la última versión para acceder a nuevas funciones"
                  time="Hace 2 horas"
                />
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
                  title="Actualización de sistema disponible"
                  description="Descarga la última versión para acceder a nuevas funciones"
                  time="Hace 2 horas"
                />
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
                  title="Actualización de sistema disponible"
                  description="Descarga la última versión para acceder a nuevas funciones"
                  time="Hace 2 horas"
                />
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
                  title="Actualización de sistema disponible"
                  description="Descarga la última versión para acceder a nuevas funciones"
                  time="Hace 2 horas"
                />
                <Notifications
                  type="notification"
                  status="pending"
                  title="Actualización de sistema disponible"
                  description="Descarga la última versión para acceder a nuevas funciones"
                  time="Hace 2 horas"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPanelPopover;