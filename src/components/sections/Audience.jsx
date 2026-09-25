import audiencePhoto from "../../assets/photos/audience-table.jpg";
import { Heading } from "../Heading.jsx";
import PhotoSplit from "../PhotoSplit.jsx";
import PillBadge from "../PillBadge.jsx";
import Section from "../Section.jsx";

const PERSONAS = [
  {
    label: "Família",
    text: "Momentos especiais, aniversários, reunião de família, crianças que criaram o hábito da comida japonesa.",
  },
  {
    label: "Casais",
    text: "Jantar romântico, encontros, comemorações de namoro, casamento.",
  },
  {
    label: "Amigos",
    text: "Celebrações, encontros, drinks, saquê.",
  },
  {
    label: "Jovens",
    text: "Filhos que agora são clientes.",
  },
  {
    label: "Business",
    text: "Jantar e almoço de negócios, comemoração de empresas.",
  },
];

export default function Audience() {
  return (
    <Section id="publico" index={7} tone="paper">
      <PhotoSplit image={audiencePhoto} alt="Mesa posta do Gendai Premium" side="left">
        <Heading>Nosso público</Heading>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PERSONAS.map((persona) => (
            <div key={persona.label}>
              <PillBadge>{persona.label}</PillBadge>
              <p className="mt-3 text-sm text-ink/85 md:text-base">{persona.text}</p>
            </div>
          ))}
        </div>
      </PhotoSplit>
    </Section>
  );
}
