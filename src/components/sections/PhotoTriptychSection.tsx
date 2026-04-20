import { useEffect, useRef } from "react";

export default function PhotoTriptychSection() {
  const gallery = ["/assets/images/gallery-1..png", "/assets/images/gallery-2..png", "/assets/images/gallery-3..png"];
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let index = 0;
    let timer: number | undefined;

    const scrollToIndex = (nextIndex: number, behavior: ScrollBehavior) => {
      const width = trackEl.clientWidth || 1;
      trackEl.scrollTo({ left: nextIndex * width, behavior });
    };

    const start = () => {
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(() => {
        index = (index + 1) % gallery.length;
        scrollToIndex(index, "smooth");
      }, 3500);
    };

    const syncIndexFromScroll = () => {
      const width = trackEl.clientWidth || 1;
      index = Math.round(trackEl.scrollLeft / width);
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        if (timer) window.clearInterval(timer);
        timer = undefined;
        return;
      }
      start();
    };

    const onUserScroll = () => {
      syncIndexFromScroll();
    };

    const onResize = () => {
      scrollToIndex(index, "auto");
    };

    scrollToIndex(0, "auto");
    start();
    trackEl.addEventListener("scroll", onUserScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (timer) window.clearInterval(timer);
      trackEl.removeEventListener("scroll", onUserScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [gallery.length]);

  return (
    <>
      <section className="md:hidden relative w-full overflow-hidden">
        <div className="flex w-full">
          <div
            ref={trackRef}
            className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {gallery.map((src, index) => (
              <div key={index} className="w-full shrink-0 snap-center">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#e9e1d5]">
                    <img
                      src={src}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover [filter:grayscale(100%)_sepia(45%)_brightness(110%)_contrast(86%)]"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(255, 220, 228, 0.18), rgba(255, 220, 228, 0.18))",
                        mixBlendMode: "multiply",
                      }}
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="hidden md:block relative w-full h-96 overflow-hidden bg-fixed bg-cover bg-no-repeat bg-top"
        style={{
          backgroundImage: "url(/assets/images/fotos.png)",
          filter: "grayscale(100%) sepia(45%) brightness(110%) contrast(86%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(255, 220, 228, 0.18), rgba(255, 220, 228, 0.18))",
            mixBlendMode: "multiply",
          }}
        />
      </section>
    </>
  );
}
