import Clock from "@global/assets/icons/modals/clock-fill.svg";
import { ModalBaseLeagues } from "./league/ModalBaseLeagues";

interface TermsConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsConditionsModal = ({
  isOpen,
  onClose,
}: TermsConditionsModalProps) => {
  return (
    <ModalBaseLeagues
      isOpen={isOpen}
      title={"Términos y Condiciones del Premio"}
      onClose={onClose}>
      <div className="flex flex-col gap-5">
        <p className="font-body-normal-regular text-neutral-300 flex items-center gap-1">
          <img src={Clock} alt="clock" />
          Última actualización: Noviembre 13, 2025
        </p>

        <p className="font-body-normal-regular">
          Al participar en esta liga fantasy y optar por el premio final,
          aceptas los siguientes términos y condiciones:
        </p>

        <div className="font-body-normal-regular">
          <strong>a. Elegibilidad del premio</strong>
          <p className="font-body-normal-regular">
            El premio será otorgado únicamente al usuario que haya acumulado la
            mayor puntuación al finalizar la temporada oficial de la liga. Para
            ser elegible, el ganador deberá haber completado su registro con
            datos válidos y mantener una cuenta activa durante toda la
            competencia.
          </p>
        </div>

        <div className="font-body-normal-regular">
          <strong>b. Criterios de desempate</strong>
          <p className="font-body-normal-regular">
            En caso de empate en la puntuación final, se aplicarán los
            siguientes criterios de desempate, en este orden:
          </p>
          <p className="font-body-normal-regular">
            (a) mayor número de puntos obtenidos en la última fecha,
            <br />
            (b) mayor número de puntos obtenidos en una fecha individual,
            <br />
            (c) orden de registro en la liga.
          </p>

          <div className="ml-6 mt-2">
            <p className="font-body-normal-regular">a. Entrega del premio</p>
            <p className="font-body-normal-regular">
              El premio será entregado dentro de los 10 días hábiles posteriores
              a la validación final del ganador. La organización podrá solicitar
              información adicional para verificar la identidad del ganador.
            </p>
          </div>

          <div className="ml-6 mt-2">
            <p className="font-body-normal-regular">
              b. Modificaciones del premio...
            </p>
          </div>
        </div>
      </div>
    </ModalBaseLeagues>
  );
};

export default TermsConditionsModal;
