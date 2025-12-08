import { useState } from "react";
import Insignia from "@global/assets/icons/modals/insignia.svg";
import { BaseModal } from "./ModalBase";
import FantasyButton from "@global/components/buttons/FantasyButton";

interface ModalChooseMedalsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalChooseMedals = ({
  isOpen,
  onClose,
}: ModalChooseMedalsProps) => {
  const [selectedMedal, setSelectedMedal] = useState<string | null>(null);

  const medals = [
    { id: "calentamiento", name: "Calentamiento" },
    { id: "debut", name: "Debut Estelar" },
    { id: "tiempo", name: "Tiempo Extra" },
    { id: "medalla4", name: "Calentamiento" },
    { id: "medalla5", name: "Debut Estelar" },
    { id: "medalla6", name: "Tiempo Extra" },
  ];

  const handleMedalSelect = (medalId: string) => {
    setSelectedMedal(medalId);
  };

  const handleSubmit = () => {
    if (selectedMedal) {
      console.log("Insignia seleccionada:", selectedMedal);
      onClose();
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      title="Selecciona tus insignias"
      showCloseButton={true}
      onClose={onClose}
    >
      <div className="grid grid-cols-3 gap-5 w-full">
        {medals.map((medal) => (
          <button
            key={medal.id}
            onClick={() => handleMedalSelect(medal.id)}
            className={`w-[116px] h-[114px] gap-1 rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg pt-3 pr-2 pb-3 pl-2 flex flex-col items-center ${
              selectedMedal === medal.id
                ? "border border-primary-200 bg-linear-to-r from-primary-500/60 to-secondary-500/70 shadow-[0_0_4px_0_var(--color-primary-50)]"
                : ""
            }`}
          >
            <img src={Insignia} className="w-[60px] h-[60px]" />
            <p className="font-body-normal-regular">{medal.name}</p>
          </button>
        ))}
      </div>
      
      <div className="flex flex-col gap-3 w-full mt-6">
        <FantasyButton
          type="button"
          variant="primary"
          size="md"
          className="w-full"
          onClick={handleSubmit}
          disabled={!selectedMedal}
        >
          Seleccionar
        </FantasyButton>
      </div>
    </BaseModal>
  );
};