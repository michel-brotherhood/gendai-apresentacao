import { useEffect, useRef } from "react";

export default function VideoCard({ src, className = "" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line shadow-lg shadow-ink/10 ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        controls
        preload="metadata"
        className="aspect-video w-full bg-ink object-cover"
      >
        Seu navegador não suporta vídeo HTML5.
      </video>
    </div>
  );
}
