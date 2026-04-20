import React, { useEffect, useRef, useState } from "react";

const MusicContainer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioSrc = "/assets/music/te-quiero-tanto.mp3";
  const coverSrc = "/assets/images/te-quiero-tanto.png";

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 50) {
      void playAudio();
    }
  }, [scrollPosition]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audioElement.addEventListener("play", onPlay);
    audioElement.addEventListener("pause", onPause);
    audioElement.addEventListener("ended", onEnded);

    return () => {
      audioElement.removeEventListener("play", onPlay);
      audioElement.removeEventListener("pause", onPause);
      audioElement.removeEventListener("ended", onEnded);
    };
  }, []);

  const playAudio = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        console.log("Listo para reproducir");
      } catch (error) {
        console.error("No se pudo reproducir el audio:", error);
      }
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const toggleAudio = async () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      await playAudio();
    }
  };

  return (
    <div className="fixed bottom-1 right-4 z-50 w-[320px] max-w-[90vw]">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className="rounded-2xl border border-white/10 bg-[#1b1b1b]/95 px-3 py-3 text-[#f7efe9] shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md bg-black/40">
            <img
              src={coverSrc}
              alt="Portada de la canción"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="truncate font-serif text-[16px] tracking-wide">
              Te quiero tanto
            </div>
            <div className="mt-0.5 truncate text-[12px] text-[#f7efe9]/70">
              Kevin Kaarl
            </div>
          </div>

          <button
            type="button"
            onClick={() => void toggleAudio()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black text-[12px] leading-none transition hover:scale-105"
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicContainer;