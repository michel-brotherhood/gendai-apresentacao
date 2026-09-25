import { Heading } from "../Heading.jsx";
import Section from "../Section.jsx";

const STEPS = [
  "Conhecer todo o espaço da loja Piratininga",
  "Reunião de briefing para definir parcerias para o Podcast",
  "Agendar primeira captação",
  "Iniciar as primeiras postagens a partir de 01 de outubro",
];

export default function NextSteps() {
  return (
    <Section id="proximos-passos" index={13} tone="paper">
      <div className="mx-auto max-w-2xl px-6 py-16 md:px-16 md:py-24">
        <Heading>Próximos passos</Heading>
        <ol className="mt-10 space-y-5">
          {STEPS.map((step, i) => (
            <li key={step} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent font-display text-sm text-accent">
                {i + 1}
              </span>
              <span className="pt-1 text-ink/90 md:text-lg">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
