import { FAQAccordion } from "../components/accordion/FAQAccordion";

export const PlayerFAQPage = () => {
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
    <div className="w-[1146px] h-[907px] flex flex-col gap-8 p-10">
      <h3 className="text-neutral-50 text-center">Preguntas frecuentes</h3>
     {faqData.map((section, index) => (
          <FAQAccordion
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
    </div>
  );
};