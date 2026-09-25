import { useEffect, useRef, useState } from "react";

export default function VideoCard({ src, className = "" }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setPlaying(true);
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line/60 shadow-lg shadow-ink/10 ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="aspect-video w-full bg-ink object-cover"
      >
        Seu navegador não suporta vídeo HTML5.
      </video>
      <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-ink/80 px-3 py-1 text-[11px] uppercase tracking-wide text-paper">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Gendai no Instagram
      </div>
      <div className="absolute bottom-3 left-3 flex gap-2">
        <button
          type="button"
          onClick={toggleSound}
          className="rounded border border-paper/70 bg-ink/80 px-3 py-1.5 text-xs text-paper transition-colors hover:bg-accent"
        >
          {muted ? "Ativar som" : "Silenciar"}
        </button>
        <button
          type="button"
          onClick={togglePlay}
          className="rounded border border-paper/70 bg-ink/80 px-3 py-1.5 text-xs text-paper transition-colors hover:bg-accent"
        >
          {playing ? "Pausar" : "Reproduzir"}
        </button>
      </div>
    </div>
  );
}
