export default function HotelSection() {
  return (
    <section id="hospedaje" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url(/assets/images/fondo-2.png)", backgroundRepeat: "repeat", backgroundSize: "720px auto" }}
      />

      <div className="relative z-10 min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 py-20 md:py-24">
        <div className="w-full max-w-[1100px]">
          <div className="text-center">
            <h2 className="font-serif text-[52px] md:text-[72px] leading-none tracking-wide text-[#3b3531]">HOTEL</h2>
            <div className="mt-2 font-serif italic text-[18px] md:text-[22px] tracking-[0.22em] text-[#3b3531]">SEDE</div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="w-full max-w-[520px] mx-auto">
              <div className="bg-white/70 border border-black/10 shadow-[0_18px_30px_rgba(0,0,0,0.16)] overflow-hidden">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img src="/assets/images/hotel.png" alt="" className="absolute inset-0 h-full w-full object-cover grayscale" />
                </div>
              </div>
            </div>

            <div className="w-full max-w-[520px] mx-auto text-[#3b3531]">
              <div className="font-serif text-[20px] md:text-[22px] tracking-wide text-center md:text-left">
                FIESTA INN MONTERREY TECNOLÓGICO
              </div>

              <div className="mt-6 font-serif italic text-[14px] md:text-[15px] leading-relaxed text-center md:text-left">
                <div>Av. Eugenio Garza Sada 2411,</div>
                <div>Tecnológico, Distrito Tec. Mty, N.L.</div>
                <div className="mt-3 tracking-[0.06em]">CÓDIGO DE GRUPO: G1WCVV@MTT</div>
              </div>

              <div className="mt-8 font-serif italic text-[13px] md:text-[14px] text-[#3b3531]/80 text-center md:text-left">
                Contaremos con transporte ida y vuelta al Venue
              </div>

              <div className="mt-10 text-center md:text-left">
                <a
                  href="https://www.corpo-rate.com/login?groupId=G1WCVE@MTT"
                  className="inline-block font-serif text-[18px] md:text-[20px] tracking-wide underline underline-offset-8 text-[#3b3531]/90 hover:text-[#3b3531]"
                  target="_blank"
                  rel="noreferrer"
                >
                  RESERVA AQUÍ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

