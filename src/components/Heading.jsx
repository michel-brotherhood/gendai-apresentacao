export function Eyebrow({ children }) {
  return (
    <p className="mb-3 font-display text-sm uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export function Heading({ as: Tag = "h2", className = "", children }) {
  return (
    <Tag
      className={`font-display text-4xl uppercase tracking-tight text-ink sm:text-5xl md:text-6xl ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Prose({ className = "", children }) {
  return (
    <div
      className={`max-w-2xl space-y-4 text-base leading-relaxed text-ink/90 md:text-lg ${className}`}
    >
      {children}
    </div>
  );
}
