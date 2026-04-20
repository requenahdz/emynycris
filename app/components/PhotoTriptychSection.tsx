import Image from "next/image";
import fotos from "../assets/images/fotos.png";
import gallery1 from "../assets/images/gallery-1..png";
import gallery2 from "../assets/images/gallery-2..png";
import gallery3 from "../assets/images/gallery-3..png";

export default function PhotoTriptychSection() {
  return (
    <>
      <section className="md:hidden relative w-full overflow-hidden px-4 py-10">
        <div className="mx-auto w-full max-w-[460px] overflow-hidden">
          <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-webkit-overflow-scrolling:touch]">
            {[gallery1, gallery2, gallery3].map((src, index) => (
              <div key={index} className="w-full shrink-0 snap-center px-2">
                <div className="bg-white/80 border border-black/10 shadow-[0_18px_30px_rgba(0,0,0,0.14)] p-2">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="92vw"
                      className="object-cover [filter:grayscale(100%)_sepia(45%)_brightness(110%)_contrast(86%)]"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="hidden md:block relative w-full h-96 overflow-hidden bg-fixed bg-cover bg-no-repeat bg-top"
        style={{
          backgroundImage: `url(${fotos.src})`,
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
