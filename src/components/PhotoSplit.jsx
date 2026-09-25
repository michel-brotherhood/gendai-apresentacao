export default function PhotoSplit({ image, alt, side = "right", children }) {
  const photoOrder = side === "left" ? "md:order-1" : "md:order-2";
  const textOrder = side === "left" ? "md:order-2" : "md:order-1";

  return (
    <div className="grid items-stretch gap-8 md:grid-cols-2 md:gap-0">
      <div className={`h-64 overflow-hidden sm:h-80 md:h-auto ${photoOrder}`}>
        <img src={image} alt={alt} className="h-full w-full object-cover" />
      </div>
      <div
        className={`flex h-full flex-col justify-center px-6 py-12 md:px-16 md:py-20 ${textOrder}`}
      >
        {children}
      </div>
    </div>
  );
}
