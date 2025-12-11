import { ModalBaseLeagues } from "./league/ModalBaseLeagues";
import IconWhatsapp from "@global/assets/icons/modals/ShareOnSocial/whatsapp-fill.svg?react";
import IconFacebook from "@global/assets/icons/modals/ShareOnSocial/facebook-fill.svg?react";
import IconTikTok from "@global/assets/icons/modals/ShareOnSocial/tiktok-fill.svg?react";
import IconLinkedin from "@global/assets/icons/modals/ShareOnSocial/linkedin-fill.svg?react";
import IconTwitter from "@global/assets/icons/modals/ShareOnSocial/twitter-fill.svg?react";
import IconEmail from "@global/assets/icons/modals/ShareOnSocial/Correo.svg?react";
import IconLink from "@global/assets/icons/modals/ShareOnSocial/link.svg?react";

interface ShareOnSocialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareOnSocialModal = ({
  isOpen,
  onClose,
}: ShareOnSocialModalProps) => {
  const socialIcons = [
    IconFacebook,
    IconWhatsapp,
    IconTikTok,
    IconLinkedin,
    IconTwitter,
    IconEmail,
    IconLink,
  ];

  return (
    <ModalBaseLeagues
      isOpen={isOpen}
      title="Comparte en tus redes favoritas"
      onClose={onClose}
      width="max-w-[600px]"
    >
      <div className="py-2">
        <div className="flex justify-center items-center gap-6">
          {socialIcons.map((Icon, index) => (
            <button
              key={index}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary-500 p-2 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </ModalBaseLeagues>
  );
};