const SIZE_BY_WEIGHT = {
  5: "text-4xl md:text-6xl font-semibold text-ink",
  4: "text-3xl md:text-5xl font-semibold text-ink",
  3: "text-xl md:text-3xl font-medium text-ink/80",
  2: "text-base md:text-xl text-muted",
  1: "text-sm md:text-base text-muted-2",
};

export default function TagCloud({ words }) {
  return (
    <div className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-3 font-display uppercase leading-none">
      {words.map(({ text, weight }) => (
        <span key={text} className={SIZE_BY_WEIGHT[weight] ?? SIZE_BY_WEIGHT[1]}>
          {text}
        </span>
      ))}
    </div>
  );
}
