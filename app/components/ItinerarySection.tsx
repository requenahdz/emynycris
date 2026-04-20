"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import background2 from "../assets/images/fondo-2.png";
import ceremonia from "../assets/images/ceremonia.png";
import ceremonia2 from "../assets/images/ceremonia2.png";
import flowerRight from "../assets/images/flor.png";
import recepcion from "../assets/images/recepción.png";
import recepcion2 from "../assets/images/recepción2.png";

export default function ItinerarySection() {
  const [ceremoniaActive, setCeremoniaActive] = useState(false);
  const [recepcionActive, setRecepcionActive] = useState(false);
  const mapsUrl = "https://maps.app.goo.gl/EmFZtMGeXgBmAKkAA";

  return (
    <section id="itinerario" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${background2.src})`, backgroundRepeat: "repeat", backgroundSize: "720px auto" }}
      />

      <Image
        src={flowerRight}
        alt=""
        className="absolute right-0 bottom-0 z-[5] w-[170px] sm:w-[240px] md:w-[320px] h-auto opacity-80 pointer-events-none select-none"
      />

      <div className="relative z-10 min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 py-20 md:py-24">
        <div className="w-full max-w-[980px] flex flex-col items-center text-center">
          <h2 className="font-serif text-[52px] md:text-[68px] leading-none tracking-wide text-[#3b3531]">
            ITINERARIO
          </h2>
          <div className="mt-2 font-serif italic text-[18px] md:text-[22px] tracking-[0.22em] text-[#3b3531]">
            DRESS CODE: FORMAL
          </div>

          <div className="mt-6 flex items-center justify-center gap-8 md:gap-12 font-serif text-[14px] md:text-[15px] tracking-[0.24em] text-[#3b3531]">
            <div className="text-center">
              <div>MUJERES</div>
              <Link
                className="mt-2 inline-block text-[11px] tracking-[0.22em] underline underline-offset-4 text-[#3b3531]/80 hover:text-[#3b3531]"
                href="/inspo/mujeres"
                target="_blank"
              >
                VER INSPO
              </Link>
            </div>

            <div className="h-10 w-px bg-[#cdbbb3]" />

            <div className="text-center">
              <div>HOMBRES</div>
              <Link
                className="mt-2 inline-block text-[11px] tracking-[0.22em] underline underline-offset-4 text-[#3b3531]/80 hover:text-[#3b3531]"
                href="/inspo/hombres"
                target="_blank"
              >
                VER INSPO
              </Link>
            </div>
          </div>

          <div className="mt-14 grid w-full grid-cols-2 gap-4 sm:gap-8 md:gap-16">
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-[0_18px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_42px_rgba(0,0,0,0.24)] transition-shadow [perspective:1000px]">
              <div className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.2,1)] [transform:rotateY(0deg)]">
                <div
                  className={`absolute inset-0 [backface-visibility:hidden] transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.2,1)] ${
                    ceremoniaActive ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
                  }`}
                >
                  <Image src={ceremonia} alt="Ceremonia" fill sizes="(min-width: 768px) 440px, 44vw" className="object-cover" />
                </div>
                <div
                  className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(-180deg)] transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.2,1)] ${
                    ceremoniaActive ? "[transform:rotateY(0deg)]" : "[transform:rotateY(-180deg)]"
                  }`}
                >
                  <Image src={ceremonia2} alt="Ceremonia" fill sizes="(min-width: 768px) 440px, 44vw" className="object-cover" />
                </div>
              </div>
              {ceremoniaActive ? (
                <>
                  <button
                    type="button"
                    aria-label="Volver a ceremonia"
                    className="absolute inset-0 z-10"
                    onClick={() => setCeremoniaActive(false)}
                  />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute left-1/2 bottom-[9%] z-20 h-[13%] w-[62%] -translate-x-1/2"
                  />
                </>
              ) : (
                <button
                  type="button"
                  aria-label="Ver más de ceremonia"
                  className="absolute inset-0 z-10"
                  onClick={() => setCeremoniaActive(true)}
                />
              )}
            </div>

            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-[0_18px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_42px_rgba(0,0,0,0.24)] transition-shadow [perspective:1000px]">
              <div className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.2,1)] [transform:rotateY(0deg)]">
                <div
                  className={`absolute inset-0 [backface-visibility:hidden] transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.2,1)] ${
                    recepcionActive ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
                  }`}
                >
                  <Image src={recepcion} alt="Recepción" fill sizes="(min-width: 768px) 440px, 44vw" className="object-cover" />
                </div>
                <div
                  className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(-180deg)] transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.2,1)] ${
                    recepcionActive ? "[transform:rotateY(0deg)]" : "[transform:rotateY(-180deg)]"
                  }`}
                >
                  <Image src={recepcion2} alt="Recepción" fill sizes="(min-width: 768px) 440px, 44vw" className="object-cover" />
                </div>
              </div>
              {recepcionActive ? (
                <>
                  <button
                    type="button"
                    aria-label="Volver a recepción"
                    className="absolute inset-0 z-10"
                    onClick={() => setRecepcionActive(false)}
                  />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute left-1/2 bottom-[9%] z-20 h-[13%] w-[62%] -translate-x-1/2"
                  />
                </>
              ) : (
                <button
                  type="button"
                  aria-label="Ver más de recepción"
                  className="absolute inset-0 z-10"
                  onClick={() => setRecepcionActive(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

