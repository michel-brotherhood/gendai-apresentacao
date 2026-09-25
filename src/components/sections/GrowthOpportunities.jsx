import { Heading, Prose } from "../Heading.jsx";
import Section from "../Section.jsx";

export default function GrowthOpportunities() {
  return (
    <Section id="crescimento" index={6} tone="dim">
      <div className="grid gap-10 px-6 py-16 md:grid-cols-2 md:px-16 md:py-24">
        <Heading className="md:col-span-2">Redes sociais</Heading>
        <Prose className="max-w-none">
          <p>
            Recentemente o perfil apresentou crescimento de 19,04%,
            considerado bom. Nos últimos 14 dias, foram conquistados 77
            seguidores e 4 publicações. Nos últimos 30 dias, o avanço foi de
            aproximadamente 173 seguidores e 9 publicações, com média diária
            de 6 novos seguidores.
          </p>
          <p>
            A faixa estimada de valor por publicação patrocinada está entre
            R$ 328 e R$ 873, com custo estimado de aproximadamente R$ 17,15
            por interação.
          </p>
        </Prose>
        <Prose className="max-w-none">
          <p>
            O Gendai Premium Niterói possui uma comunidade relevante,
            crescimento positivo e bom potencial de alcance local.
          </p>
          <p>
            As principais oportunidades estão em aumentar a frequência de
            conteúdo, estimular curtidas e comentários, fortalecer o
            relacionamento com a audiência e transformar o alcance digital em
            visitas, reservas e pedidos.
          </p>
        </Prose>
      </div>
    </Section>
  );
}
