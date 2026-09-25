import { Heading } from "../Heading.jsx";
import Section from "../Section.jsx";
import TagCloud from "../TagCloud.jsx";

const WORDS = [
  { text: "Atendimento", weight: 5 },
  { text: "Qualidade", weight: 5 },
  { text: "Ambiente", weight: 5 },
  { text: "Excelente", weight: 4 },
  { text: "Sushi", weight: 4 },
  { text: "Sashimi", weight: 4 },
  { text: "Peixe fresco", weight: 4 },
  { text: "Premium", weight: 3 },
  { text: "Moderno", weight: 3 },
  { text: "Delicioso", weight: 3 },
  { text: "Experiência", weight: 3 },
  { text: "Variedade", weight: 3 },
  { text: "Acolhedor", weight: 3 },
  { text: "Sofisticado", weight: 2 },
  { text: "Impecável", weight: 2 },
  { text: "Temperatura ideal", weight: 2 },
  { text: "Rápido", weight: 2 },
  { text: "Apresentação", weight: 2 },
  { text: "Cortes", weight: 2 },
  { text: "Cardápio", weight: 2 },
  { text: "Combinados", weight: 2 },
  { text: "Romântico", weight: 2 },
  { text: "Comemoração", weight: 2 },
  { text: "Pratos", weight: 1 },
  { text: "Gastronomia", weight: 1 },
  { text: "Sabores", weight: 1 },
  { text: "Jantar", weight: 1 },
  { text: "Serviço", weight: 1 },
  { text: "Atencioso", weight: 1 },
  { text: "Equipe", weight: 1 },
  { text: "Vale a pena", weight: 1 },
  { text: "Niterói", weight: 1 },
  { text: "Festival", weight: 1 },
  { text: "Rodízio", weight: 1 },
  { text: "Caro", weight: 1 },
];

export default function WordCloud() {
  return (
    <Section id="nuvem-de-palavras" index={8} tone="dim">
      <div className="px-6 py-16 text-center md:px-16 md:py-24">
        <Heading>Nuvem de palavras</Heading>
        <div className="mx-auto mt-10 max-w-4xl">
          <TagCloud words={WORDS} />
        </div>
        <p className="mt-10 text-sm text-muted-2">
          Com base nas avaliações do Google Meu Negócio.
        </p>
      </div>
    </Section>
  );
}
