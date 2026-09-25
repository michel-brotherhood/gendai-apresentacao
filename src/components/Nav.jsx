import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { useScrollProgress } from "../hooks/useScrollProgress.js";
import { SECTIONS, TOTAL_SECTIONS } from "../lib/sections.js";

const IDS = SECTIONS.map((section) => section.id);

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Nav() {
  const activeId = useActiveSection(IDS);
  const progress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeIndex = IDS.indexOf(activeId);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.target instanceof HTMLElement) {
        const tag = event.target.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea") return;
      }
      if (event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        const next = IDS[Math.min(activeIndex + 1, IDS.length - 1)];
        scrollToId(next);
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        const prev = IDS[Math.max(activeIndex - 1, 0)];
        scrollToId(prev);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-line/30">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-[3px] z-40 border-b border-line/40 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 md:h-16 md:px-8">
          <button
            type="button"
            onClick={() => scrollToId("capa")}
            className="flex flex-col items-start leading-tight"
            aria-label="Ir para a capa"
          >
            <strong className="font-display text-xs uppercase tracking-[0.2em] text-ink md:text-sm">
              Gendai Premium
            </strong>
            <span className="text-[10px] text-muted-2 md:text-xs">
              Estratégia de conteúdo digital
            </span>
          </button>

          <div className="flex items-center gap-2 md:gap-3">
            <span className="hidden font-display text-xs tabular-nums text-muted sm:inline">
              {String(activeIndex + 1).padStart(2, "0")} / {TOTAL_SECTIONS}
            </span>
            <button
              type="button"
              onClick={() => scrollToId(IDS[Math.max(activeIndex - 1, 0)])}
              disabled={activeIndex <= 0}
              aria-label="Seção anterior"
              className="h-8 w-8 rounded border border-line/70 text-ink transition-colors hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink md:h-9 md:w-9"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollToId(IDS[Math.min(activeIndex + 1, IDS.length - 1)])}
              disabled={activeIndex >= IDS.length - 1}
              aria-label="Próxima seção"
              className="h-8 w-8 rounded border border-line/70 text-ink transition-colors hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink md:h-9 md:w-9"
            >
              →
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              className="rounded border border-line/70 px-3 py-1.5 font-display text-xs uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper md:text-sm"
            >
              Agenda
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-line/40 bg-paper">
            <ol className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-1 px-4 py-4 sm:grid-cols-3 md:grid-cols-4 md:px-8">
              {SECTIONS.map((section, i) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => {
                      scrollToId(section.id);
                      setMenuOpen(false);
                    }}
                    className={`flex w-full items-baseline gap-2 py-1.5 text-left text-sm transition-colors hover:text-accent ${
                      section.id === activeId ? "text-accent" : "text-ink/80"
                    }`}
                  >
                    <span className="font-display tabular-nums text-muted-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.label}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </header>
    </>
  );
}
