export default function StatCard({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-line/70 bg-white/50 px-6 py-5 ${className}`}
    >
      <h3 className="mb-2 font-display text-lg uppercase tracking-wide text-ink">
        {title}
      </h3>
      <div className="space-y-1 text-sm leading-relaxed text-ink/85 md:text-base">
        {children}
      </div>
    </div>
  );
}
