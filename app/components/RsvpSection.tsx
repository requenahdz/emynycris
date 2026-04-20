import background2 from "../assets/images/fondo-2.png";

export default function RsvpSection() {
  return (
    <section id="rsvp" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${background2.src})`, backgroundRepeat: "repeat", backgroundSize: "720px auto" }}
      />

      <div className="absolute inset-0 flex items-center justify-center px-6 py-14">
        <div className="relative w-full max-w-[1100px] text-center text-[#3b3531]">
          <div className="pointer-events-none select-none font-serif text-[88px] md:text-[140px] leading-none tracking-wide text-[#3b3531]/15">
            RSVP
          </div>

          <div className="mt-10 font-serif text-[22px] md:text-[28px] tracking-[0.12em]">
            CONFIRMA TU ASISTENCIA
          </div>

          <div className="mt-8">
            <a
              href="https://api.whatsapp.com/send/?phone=5215515331844&text=Hola%2C%20buen%20d%C3%ADa.%0ASolo%20para%20confirmar%20mi%20asistencia%20a%20la%20boda.%0AMuchas%20gracias%20y%20nos%20vemos%20pronto.%20%F0%9F%8E%89&type=phone_number&app_absent=0"
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

