"use client";

import { useEffect, useRef } from "react";
import background2 from "../assets/images/fondo-2.png";

export default function ParallaxVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const videoEl = videoRef.current;
    if (!sectionEl || !videoEl) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopMq = window.matchMedia("(min-width: 768px)");

    const maxShiftPx = 120;
    const scale = 1.35;
    let raf = 0;
    let enabled = false;

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

    const disable = () => {
      if (!enabled) return;
      enabled = false;
      videoEl.style.transform = "";
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
    };

    const enable = () => {
      if (enabled) return;
      enabled = true;
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    };

    const sync = () => {
      if (reducedMotion.matches || !desktopMq.matches) {
        disable();
        return;
      }
      enable();
    };

    sync();

    const onReducedChange = () => sync();
    const onDesktopChange = () => sync();

    reducedMotion.addEventListener("change", onReducedChange);
    desktopMq.addEventListener("change", onDesktopChange);

    return () => {
      reducedMotion.removeEventListener("change", onReducedChange);
      desktopMq.removeEventListener("change", onDesktopChange);
      disable();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#e9e1d5] aspect-video md:aspect-auto md:min-h-screen"
    >
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: `url(${background2.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "720px auto",
        }}
      />

      <div
        ref={videoRef}
        className="absolute inset-0 md:inset-[-25%] z-10 will-change-transform"
      >
        <video
          className="w-full h-full object-contain md:object-cover [filter:grayscale(100%)_sepia(45%)_brightness(110%)_contrast(86%)]"
          poster={background2.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-0 z-[15] pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(255, 220, 228, 0.18), rgba(255, 220, 228, 0.18))",
          mixBlendMode: "multiply",
        }}
      />

      <div className="absolute inset-0 z-20 bg-black/10 pointer-events-none" />
    </section>
  );
}
