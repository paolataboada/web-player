import { FAQAccordion } from "../components/accordion/FAQAccordion";
import { useNavigate } from "react-router-dom";
import IconArrow from "@global/assets/icons/shared/arrow-left.svg?react";
import FantasyButton from "@global/components/buttons/FantasyButton";

export const PlayerFAQPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const faqData = [
    {
      title: "Puntuación y Reglas del juego",
      items: [
        {
          question: "¿Qué es Fantasy League L1 Max?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
        {
          question: "¿Es gratis jugar?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
        {
          question: "¿Cómo invitos a mis amigos?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
      ],
    },
    {
      title: "Ligas y competencias ",
      items: [
        {
          question: "¿Qué es Fantasy League L1 Max?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
        {
          question: "¿Es gratis jugar?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
        {
          question: "¿Cómo invitos a mis amigos?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
      ],
    },

    {
      title: "Pagos y Recompensas ",
      items: [
        {
          question: "¿Qué es Fantasy League L1 Max?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
        {
          question: "¿Es gratis jugar?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
        {
          question: "¿Cómo invitos a mis amigos?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
      ],
    },
    {
      title: "Puntuación y Reglas del Juego ",
      items: [
        {
          question: "¿Qué es Fantasy League L1 Max?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
        {
          question: "¿Es gratis jugar?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
        {
          question: "¿Cómo invitos a mis amigos?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
      ],
    },
    {
      title: "Creación y Gestion de Equipos ",
      items: [
        {
          question: "¿Qué es Fantasy League L1 Max?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
        {
          question: "¿Es gratis jugar?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
        {
          question: "¿Cómo invitos a mis amigos?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-[1066px] mx-auto flex flex-col gap-6 pb-6">
      <div className="hidden sm:block">
        <FantasyButton
          type="button"
          variant="secondary"
          size="lg"
          onClick={handleBack}>
          <IconArrow className="w-5 h-5" />
        </FantasyButton>
      </div>

      <h3 className="text-neutral-50 text-center">Preguntas frecuentes</h3>
      {faqData.map((section, index) => (
        <FAQAccordion key={index} title={section.title} items={section.items} />
      ))}
    </div>
  );
};
