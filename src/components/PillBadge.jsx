export default function PillBadge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-line px-5 py-2 font-display text-sm uppercase tracking-wide text-ink sm:text-base ${className}`}
    >
      {children}
    </span>
  );
}
