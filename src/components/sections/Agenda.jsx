import agendaPhoto from "../../assets/photos/agenda-salmon.jpg";
import { Heading } from "../Heading.jsx";
import PhotoSplit from "../PhotoSplit.jsx";
import Section from "../Section.jsx";

const ITEMS = [
  { pages: "3", label: "Debriefing", id: "debriefing" },
  { pages: "4, 5, 6", label: "Redes sociais", id: "redes-sociais" },
  { pages: "7", label: "Nosso público", id: "publico" },
  { pages: "8", label: "Nuvem de palavras", id: "nuvem-de-palavras" },
  { pages: "9", label: "Nossos concorrentes", id: "concorrentes" },
  { pages: "10", label: "Nossas inspirações", id: "inspiracoes" },
  { pages: "11", label: "Editorial", id: "editorial" },
  { pages: "12", label: "Layout", id: "layout" },
  { pages: "13", label: "Próximos passos", id: "proximos-passos" },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Agenda() {
  return (
    <Section id="agenda" index={2} tone="dim">
      <PhotoSplit image={agendaPhoto} alt="Prato assinatura Gendai Premium" side="left">
        <Heading>Agenda</Heading>
        <ol className="mt-8 divide-y divide-line/40 border-y border-line/40">
          {ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToId(item.id)}
                className="flex w-full items-center justify-between gap-4 py-3 text-left transition-colors hover:text-accent"
              >
                <span className="font-display text-sm text-muted-2">{item.pages}</span>
                <span className="font-display text-base uppercase tracking-wide sm:text-lg">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </PhotoSplit>
    </Section>
  );
}
