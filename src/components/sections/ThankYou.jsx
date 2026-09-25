import Section from "../Section.jsx";

export default function ThankYou() {
  return (
    <Section id="obrigada" index={14} tone="dim">
      <div className="flex flex-col items-center justify-center px-6 py-20 text-center md:py-28">
        <p className="font-display text-lg tracking-[0.5em] text-ink">現代</p>
        <h2 className="mt-4 font-display text-5xl uppercase tracking-tight text-ink sm:text-6xl md:text-7xl">
          Obrigada!
        </h2>
        <a
          href="https://www.instagram.com/gendaipremium"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-display text-sm uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          @gendaipremium no Instagram
        </a>
      </div>
    </Section>
  );
}
