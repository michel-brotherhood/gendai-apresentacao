const TONE_BG = {
  paper: "bg-paper",
  dim: "bg-paper-dim",
};

export default function Section({
  id,
  index,
  tone = "paper",
  className = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line/40 ${TONE_BG[tone]} ${className}`}
    >
      {children}
      <div className="flex items-center gap-3 px-6 md:px-16 py-6 text-xs text-muted-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line font-display text-[11px]">
          {String(index).padStart(2, "0")}
        </span>
        <span className="uppercase tracking-[0.15em]">Setembro/26</span>
      </div>
    </section>
  );
}
