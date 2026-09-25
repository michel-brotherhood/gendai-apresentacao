import socialPhoto from "../../assets/photos/social-phone.jpg";
import { Heading, Prose } from "../Heading.jsx";
import PhotoSplit from "../PhotoSplit.jsx";
import Section from "../Section.jsx";

const POINTS = [
  "25 anos de experiência e conhecimento acumulado",
  "Rigor na escolha e manipulação dos produtos",
  "Processos e boas práticas desenvolvidos ao longo dos anos",
  "Conhecimento técnico sobre pescados e culinária japonesa",
  "Operação estruturada e consistente",
  "Público fiel construído organicamente",
  "Baixíssimo nível de reclamações",
  "Confiança construída com clientes ao longo do tempo",
];

export default function SocialPositioning() {
  return (
    <Section id="redes-sociais" index={4} tone="dim">
      <PhotoSplit image={socialPhoto} alt="Cliente vendo o Instagram do Gendai Premium" side="right">
        <Heading>Redes sociais</Heading>
        <Prose className="mt-8">
          <p>
            A comunicação nas redes busca explorar além da comida japonesa de
            qualidade. Ela comunica tudo que o Gendai Premium conquistou ao
            longo da sua jornada e tudo que está por vir:
          </p>
        </Prose>
        <ul className="mt-6 max-w-2xl list-disc space-y-2 pl-5 text-ink/90 marker:text-accent">
          {POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl font-display text-lg text-ink md:text-xl">
          Como contar tudo isso de maneira que prenda a atenção dos nossos
          clientes e chame atenção dos novos clientes?
        </p>
      </PhotoSplit>
    </Section>
  );
}
