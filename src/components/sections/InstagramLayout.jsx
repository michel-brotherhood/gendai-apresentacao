import videoSrc from "../../assets/video/gendai-instagram.mp4";
import { Heading } from "../Heading.jsx";
import Section from "../Section.jsx";
import VideoCard from "../VideoCard.jsx";

const POINTS = [
  "Feed sofisticado e consistente",
  "Imagens e vídeos de alta qualidade",
  "Capas para os vídeos que mantenham a unidade de feed",
  "Nova marca e novos ícones para os destaques",
  "Informações úteis nos destaques e na bio",
  "Personalização do LinkTree",
];

export default function InstagramLayout() {
  return (
    <Section id="layout" index={12} tone="dim">
      <div className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-16 md:py-24">
        <VideoCard src={videoSrc} />
        <div>
          <Heading>Layout</Heading>
          <ul className="mt-8 space-y-3 text-ink/90">
            {POINTS.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
