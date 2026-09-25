import { Heading } from "../Heading.jsx";
import PillBadge from "../PillBadge.jsx";
import Section from "../Section.jsx";

const PILLARS = [
  {
    label: "Por trás do Gendai",
    role: "Demonstrar conhecimento e autoridade",
    subject: "Recebimento do peixe, armazenamento, manipulação, fornecedores, critérios de escolha",
    format: "Vídeos e fotos dos fornecedores, depoimentos, análise dos insumos pelo sushiman, nutricionista.",
  },
  {
    label: "Cultura e gastronomia",
    role: "Educar sem ser professoral",
    subject: "Cortes, técnicas, saquê, ingredientes, costumes",
    format: "Carrossel com dicas para aproveitar ao máximo seu momento Gendai.",
  },
  {
    label: "25 anos de história",
    role: "Construir marca e conexão",
    subject: "Histórias marcantes na voz de clientes, donos e funcionários",
    format: "Podcast no Gendai com conversas e histórias dos 25 anos.",
  },
  {
    label: "Experiência Gendai",
    role: "Gerar desejo",
    subject: "Festival, à la carte, drinks, ambiente, atendimento, hospitalidade",
    format: "Fotos e vídeos de alta qualidade para tornar aquele post em um desejo de ir ao Gendai ou pedir no delivery.",
  },
  {
    label: "Curiosidades",
    role: "Transformar conhecimento técnico em conteúdo leve",
    subject: "#PergunteAoGendai — dúvidas reais dos clientes",
    format: "Abrimos a caixa de perguntas e algum funcionário vai responder em formato de vídeo.",
  },
  {
    label: "Gendai acontecendo",
    role: "Gerar movimento comercial",
    subject: "Passaporte, ações, novidades, delivery e estímulo em horários estratégicos",
    format: "Conteúdo estático ou vídeos para divulgar as ações do Gendai.",
  },
];

export default function Editorial() {
  return (
    <Section id="editorial" index={11} tone="paper">
      <div className="px-6 py-16 md:px-16 md:py-24">
        <Heading>Editorial</Heading>
        <div className="mt-10 space-y-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="grid grid-cols-1 gap-4 rounded-2xl border border-line/60 p-6 md:grid-cols-[minmax(0,220px)_1fr_1fr]"
            >
              <div>
                <PillBadge>{pillar.label}</PillBadge>
                <p className="mt-3 text-sm font-medium text-ink/85">{pillar.role}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-2 md:hidden">Assunto</p>
                <p className="text-sm text-ink/85">{pillar.subject}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-2 md:hidden">Formato</p>
                <p className="text-sm text-ink/85">{pillar.format}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
