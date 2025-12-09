import { useState } from 'react';
import Person from "@global/assets/icons/card/person.svg?react";
import Iconnot from "@global/assets/icons/popover/Iconnot.svg?react";
import Aceptar from "@global/assets/icons/popover/check.svg?react";
import Rechazar from "@global/assets/icons/popover/x.svg?react";

interface NotificationProps {
  type: 'notification' | 'invitation';
  status: 'pending' | 'accepted' | 'rejected';
  title: string;
  description: string;
  leagueName?: string;
  time: string;
  onAccept?: () => void;
  onReject?: () => void;
}

const Notifications = ({
  type,
  status,
  title,
  description,
  leagueName,
  time,
  onAccept,
  onReject
}: NotificationProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [localStatus, setLocalStatus] = useState<'pending' | 'accepted' | 'rejected'>(status);

  const handleNotificationClick = () => {
    if (type === 'invitation' && localStatus === 'pending') {
      setIsExpanded(!isExpanded);
    }
  };

  const handleAccept = () => {
    if (onAccept) onAccept();
    setLocalStatus('accepted');
    setIsExpanded(false);
  };

  const handleReject = () => {
    if (onReject) onReject();
    setLocalStatus('rejected');
    setIsExpanded(false);
  };

  const isClickable = type === 'invitation' && localStatus === 'pending';

  return (
    <div className="flex flex-col gap-3 flex-1 overflow-y-auto lg:gap-4">
      <div className="relative w-full rounded-lg">
        <div
          className="absolute inset-0 rounded-lg p-px z-10 bg-linear-to-r from-primary-500 to-secondary-500"
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>
        <div className="absolute inset-0 rounded-lg bg-linear-to-r from-primary-500/20 to-neutral-900/20 z-0"></div>
        <div className="relative z-20 w-full p-3 gap-3 flex flex-col">
          <div 
            className={`flex items-center gap-3 min-w-0 flex-1 ${isClickable ? 'cursor-pointer' : ''}`}
            onClick={handleNotificationClick}
          >
            {type === 'notification' ? (
              <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                <Iconnot />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center shrink-0">
                <Person />
              </div>
            )}

            <div className="flex flex-col justify-center space-y-2 min-w-0 flex-1">
              <p className="font-body-normal-medium text-neutral-50 truncate">
                {title}
              </p>
              <p className="font-body-small-regular text-neutral-50">
                {description}
                {leagueName && (
                  <strong className="font-semibold"> {leagueName}</strong>
                )}
              </p>
              <p className="font-body-extrasmall-regular text-neutral-50">
                {time}
              </p>
            </div>
            
            {localStatus === 'pending' && (
              <div className="w-2 h-2 rounded-full bg-linear-to-b from-primary-500 to-secondary-500 shrink-0 ml-2"></div>
            )}
          </div>
          {type === 'invitation' && localStatus === 'pending' && isExpanded && (
            <>
              <hr className="h-px border-0 bg-linear-to-r from-primary-500 to-secondary-500" />
              <div className="flex justify-center items-center w-full h-6">
                <div 
                  className="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition-opacity w-full"
                  onClick={handleAccept}
                >
                  <Aceptar className="text-green-500" />
                  <p className="font-body-normal-regular text-green-500">
                    Aceptar
                  </p>
                </div>
                <hr className="w-px h-6 border-0 bg-linear-to-b from-primary-500 to-secondary-500" />
                <div 
                  className="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition-opacity w-full"
                  onClick={handleReject}
                >
                  <Rechazar className="text-red-500" />
                  <p className="font-body-normal-regular text-red-500">
                    Rechazar
                  </p>
                </div>
              </div>
            </>
          )}

          {type === 'invitation' && localStatus === 'accepted' && (
            <>
              <hr className="h-px border-0 bg-linear-to-r from-primary-500 to-secondary-500" />
              <div className="flex justify-center items-center w-full h-6">
                <div className="flex items-center justify-center gap-1 w-full">
                  <Aceptar className="text-green-500" />
                  <p className="font-body-normal-regular text-green-500">
                    Invitación aceptada
                  </p>
                </div>
              </div>
            </>
          )}

          {type === 'invitation' && localStatus === 'rejected' && (
            <>
              <hr className="h-px border-0 bg-linear-to-r from-primary-500 to-secondary-500" />
              <div className="flex justify-center items-center w-full h-6">
                <div className="flex items-center justify-center gap-1 w-full">
                  <Rechazar className="text-red-500" />
                  <p className="font-body-normal-regular text-red-500">
                    Invitación rechazada
                  </p>
                </div>
              </div>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Notifications;