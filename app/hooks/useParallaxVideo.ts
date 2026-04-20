import { useEffect, useRef } from "react";

type UseParallaxVideoOptions = {
  maxShiftPx?: number;
  scale?: number;
};

export function useParallaxVideo({ maxShiftPx = 70, scale = 1.08 }: UseParallaxVideoOptions = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const videoEl = videoRef.current;
    if (!sectionEl || !videoEl) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let raf = 0;

    const update = () => {
      const rect = sectionEl.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const progressRaw = (viewportH - rect.top) / (viewportH + rect.height);
      const progress = Math.min(1, Math.max(0, progressRaw));
      const y = (progress - 0.5) * maxShiftPx;
      videoEl.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [maxShiftPx, scale]);

  return { sectionRef, videoRef };
}

