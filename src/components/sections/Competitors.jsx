import { Heading } from "../Heading.jsx";
import PillBadge from "../PillBadge.jsx";
import Section from "../Section.jsx";

const COMPETITORS = [
  {
    name: "Yo! Japa",
    social:
      "Comunicação mais promocional e popular, com forte presença de produto, ofertas e delivery.",
    positioning:
      "Custo-benefício e acessibilidade, buscando volume e frequência de consumo.",
    price: "Faixa de consumo em torno de R$120–160/pessoa; a marca mantém rodízio ativo.",
  },
  {
    name: "Sunsaki",
    social:
      "Conteúdo fortemente apoiado em pratos, rodízio, ambiente e experiência presencial.",
    positioning:
      "Japonês tradicional com apelo para rodízio + experiência + localização/vista de São Francisco.",
    price: "Faixa de consumo aproximada de R$130–260/pessoa. Rodízio diversificado.",
  },
  {
    name: "Gurumê",
    social:
      "Identidade visual sofisticada, gastronomia muito valorizada e boa construção de marca.",
    positioning:
      "Japonês contemporâneo/premium, com pratos autorais, ingredientes brasileiros e experiência.",
    price:
      "Não concentra sua proposta em rodízio. Atua fortemente no à la carte; consumo pode ultrapassar R$260/pessoa.",
  },
  {
    name: "Temakeria e Cia",
    social:
      "Comunicação bastante focada em variedade, produto, rodízio e estímulo ao consumo.",
    positioning: "Rodízio com variedade e custo-benefício, ocupando uma faixa intermediária do mercado.",
    price: "Rodízio em aproximadamente R$139–150, variando conforme dia/unidade.",
  },
  {
    name: "Japa da Quitanda",
    social:
      "Comunicação mais moderna, jovem e comercial, com grande valorização visual dos pratos e lançamentos.",
    positioning: "Rodízio premium com linguagem jovem, variedade, criatividade e experiência descontraída.",
    price: "R$169,90, com mais de 78 opções no rodízio atual.",
  },
];

export default function Competitors() {
  return (
    <Section id="concorrentes" index={9} tone="paper">
      <div className="px-6 py-16 md:px-16 md:py-24">
        <Heading>Nossos concorrentes</Heading>

        {/* Desktop table */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-line md:block">
          <div className="grid grid-cols-4 gap-4 border-b border-line bg-paper-dim/60 px-6 py-4">
            {["Concorrentes", "Redes sociais", "Posicionamento", "Faixa de valor"].map((label) => (
              <PillBadge key={label} className="justify-self-start">
                {label}
              </PillBadge>
            ))}
          </div>
          {COMPETITORS.map((c, i) => (
            <div
              key={c.name}
              className={`grid grid-cols-4 gap-4 px-6 py-6 text-sm text-ink/85 ${
                i % 2 === 1 ? "bg-paper-dim/30" : ""
              }`}
            >
              <p className="font-display font-semibold text-ink">{c.name}</p>
              <p>{c.social}</p>
              <p>{c.positioning}</p>
              <p>{c.price}</p>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="mt-10 space-y-6 md:hidden">
          {COMPETITORS.map((c) => (
            <div key={c.name} className="rounded-2xl border border-line p-5">
              <p className="font-display text-lg font-semibold text-ink">{c.name}</p>
              <dl className="mt-3 space-y-3 text-sm text-ink/85">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-2">Redes sociais</dt>
                  <dd>{c.social}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-2">Posicionamento</dt>
                  <dd>{c.positioning}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-2">Faixa de valor</dt>
                  <dd>{c.price}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
