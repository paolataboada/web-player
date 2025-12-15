import { FAQAccordion } from "../components/accordion/FAQAccordion";
import { useNavigate } from "react-router-dom";
import IconArrow from "@global/assets/icons/shared/arrow-left.svg?react";
import FantasyButton from "@global/components/buttons/FantasyButton";
import { BreadCrumb } from "@global/components/navbars/BreadCrumb";
import { ROUTES } from "@navigation/routes/routes";
import MotionContainer from "@global/containers/MotionContainer"

export const PlayerFAQPage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

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
          question: "¿Cómo invito a mis amigos?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
      ],
    },
    {
      title: "Ligas y competencias",
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
          question: "¿Cómo invito a mis amigos?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
      ],
    },
    {
      title: "Pagos y Recompensas",
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
          question: "¿Cómo invito a mis amigos?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
      ],
    },
    {
      title: "Creación y Gestión de Equipos",
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
          question: "¿Cómo invito a mis amigos?",
          answer:
            "Es un juego en el que creas un equipo de fútbol con jugadores reales y compites según su rendimiento en partidos.",
        },
      ],
    },
  ];

  const Content = (
    <>
      <h3 className="text-neutral-50 text-center mb-4">Preguntas frecuentes</h3>
      {faqData.map((section, index) => (
        <FAQAccordion key={index} title={section.title} items={section.items} />
      ))}
    </>
  );

  return (
    <>
      <MotionContainer className="w-full max-w-[1066px] mx-auto flex-col pb-6 hidden md:flex">
        <div>
          <FantasyButton type="button" variant="secondary" size="lg" onClick={handleBack}>
            <IconArrow className="w-5 h-5" />
          </FantasyButton>
        </div>
        <div className="w-full p-4 flex flex-col gap-6">
        {Content}</div>
      </MotionContainer>

      <MotionContainer className="w-full min-w-screen h-min -m-4 overflow-x-hidden md:m-0 md:min-w-0 md:h-full flex flex-col md:hidden">
        <BreadCrumb title="Perfil" to={ROUTES.HOME} />
        <div className="w-full p-4 flex flex-col gap-6">
          {Content}
        </div>
      </MotionContainer>
    </>
  );
};
