import coverPhoto from "../../assets/photos/cover-sashimi.webp";
import PhotoSplit from "../PhotoSplit.jsx";
import Section from "../Section.jsx";

export default function Cover() {
  return (
    <Section id="capa" index={1} tone="paper" className="border-t-0">
      <PhotoSplit image={coverPhoto} alt="Sashimi Gendai Premium" side="left">
        <p className="font-display text-lg tracking-[0.5em] text-ink">現代</p>
        <h1 className="mt-2 font-display text-4xl uppercase tracking-[0.12em] text-ink sm:text-5xl md:text-6xl">
          Gendai
          <br />
          Premium
        </h1>
        <p className="mt-6 max-w-md text-xl text-ink/80 md:text-2xl">
          Estratégia de conteúdo digital
        </p>
        <p className="mt-10 text-sm uppercase tracking-[0.2em] text-muted-2">
          Apresentado por: V4 Company
        </p>
      </PhotoSplit>
    </Section>
  );
}
