export default function RsvpSection() {
  return (
    <section id="rsvp" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url(/assets/images/fondo-2.png)", backgroundRepeat: "repeat", backgroundSize: "720px auto" }}
      />
      <img
        src="/assets/images/flor.png"
        alt=""
        className="absolute right-0 bottom-0 z-[5] w-[170px] sm:w-[240px] md:w-[320px] h-auto opacity-80 pointer-events-none select-none"
      />

      <div className="absolute inset-0 flex items-center justify-center px-6 py-14">
        <div className="relative w-full max-w-[1100px] text-center text-[#3b3531]">
          <div className="pointer-events-none select-none font-serif text-[88px] md:text-[140px] leading-none tracking-wide text-[#3b3531]/15">
            RSVP
          </div>

          <div className="mt-10 font-serif text-[22px] md:text-[28px] tracking-[0.12em]">CONFIRMA TU ASISTENCIA</div>

          <div className="mt-8">
          <a
  href="https://api.whatsapp.com/send/?phone=5215515331844&text=Hola%2C%20buen%20d%C3%ADa%2C%20solo%20para%20confirmar%20mi%20asistencia%20a%20la%20boda%20de%20Emyn%20y%20Cris%20%F0%9F%92%95%0A%0AMi%20nombre%20es%3A%20&type=phone_number&app_absent=0"
  className="inline-flex items-center justify-center rounded-full border border-[#3b3531]/70 px-8 py-3 font-serif text-[16px] tracking-[0.18em] text-[#3b3531]/90 hover:text-[#3b3531]"
  target="_blank"
  rel="noreferrer"
>
  CONFIRMAR
</a>
          </div>
        </div>
      </div>
    </section>
  );
}
