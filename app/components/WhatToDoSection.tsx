import Image from "next/image";
import background2 from "../assets/images/fondo-2.png";
import santaLucia from "../assets/images/santa-lucia.png";
import santiago from "../assets/images/santiago.png";
import fundidora from "../assets/images/fundidora.png";

export default function WhatToDoSection() {
  return (
    <section id="recomendaciones" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${background2.src})`, backgroundRepeat: "repeat", backgroundSize: "720px auto" }}
      />

      <div className="relative z-10 min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 py-20 md:py-24">
        <div className="w-full max-w-[1100px]">
          <div className="text-center">
            <h2 className="font-serif text-[52px] md:text-[72px] leading-none tracking-wide text-[#3b3531]">
              ¿QUÉ HACER?
            </h2>
            <div className="mt-2 font-serif italic text-[18px] md:text-[22px] tracking-[0.22em] text-[#3b3531]">
              EN MONTERREY
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <article className="w-full bg-white/85 backdrop-blur-[1px] border border-black/10 shadow-[0_18px_30px_rgba(0,0,0,0.16)] px-4 sm:px-6 py-6 sm:py-7 text-center text-[#3b3531]">
              <div className="p-3 sm:p-3.5">
                <div className="relative w-full aspect-square overflow-hidden bg-[#f3f0ee]">
                  <Image
                    src={santaLucia}
                    alt=""
                    fill
                    className="object-cover grayscale"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                  />
                </div>
                <div className="mt-5 font-serif text-[18px] sm:text-[20px] md:text-[22px] tracking-wide">
                  PASEO SANTA LUCÍA
                </div>
                <p className="mt-4 font-serif italic text-[16px] leading-relaxed text-[#3b3531]/80">
                  Un romántico canal navegable que serpentea entre fuentes y puentes, conectando el corazón histórico con el
                  Parque Fundidora.
                </p>
              </div>
            </article>

            <article className="w-full bg-white/85 backdrop-blur-[1px] border border-black/10 shadow-[0_18px_30px_rgba(0,0,0,0.16)] px-4 sm:px-6 py-6 sm:py-7 text-center text-[#3b3531]">
              <div className="p-3 sm:p-3.5">
                <div className="relative w-full aspect-square overflow-hidden bg-[#f3f0ee]">
                  <Image
                    src={santiago}
                    alt=""
                    fill
                    className="object-cover grayscale"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                  />
                </div>
                <div className="mt-5 font-serif text-[18px] sm:text-[20px] md:text-[22px] tracking-wide">
                  SANTIAGO PUEBLO MÁGICO
                </div>
                <p className="mt-4 font-serif italic text-[16px] leading-relaxed text-[#3b3531]/80">
                  Un escape pintoresco entre montañas, cascadas y el encanto tradicional de un pueblo que parece detenido en
                  el tiempo.
                </p>
              </div>
            </article>

            <article className="w-full bg-white/85 backdrop-blur-[1px] border border-black/10 shadow-[0_18px_30px_rgba(0,0,0,0.16)] px-4 sm:px-6 py-6 sm:py-7 text-center text-[#3b3531]">
              <div className="p-3 sm:p-3.5">
                <div className="relative w-full aspect-square overflow-hidden bg-[#f3f0ee]">
                  <Image
                    src={fundidora}
                    alt=""
                    fill
                    className="object-cover grayscale"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                  />
                </div>
                <div className="mt-5 font-serif text-[18px] sm:text-[20px] md:text-[22px] tracking-wide">
                  PARQUE FUNDIDORA
                </div>
                <p className="mt-4 font-serif italic text-[16px] leading-relaxed text-[#3b3531]/80">
                  Un museo vivo donde la imponente arquitectura de acero se funde con amplios jardines; el lugar perfecto
                  para un paseo inolvidable.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

