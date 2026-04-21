export default function InvitationSection() {
  
 const mapsUrl = "https://maps.app.goo.gl/EmFZtMGeXgBmAKkAA";

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-2 py-6 sm:px-4 sm:py-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/images/fondo-2.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "720px auto",
        }}
      />

      <img
        src="/assets/images/flor-2.png"
        alt=""
        className="absolute left-0 bottom-0 z-[5] w-[160px] sm:w-[220px] md:w-[280px] h-auto opacity-80 pointer-events-none select-none"
      />

      <div className="relative z-10 w-full md:max-w-[720px] lg:max-w-[820px]">
        <div className="relative w-full">
          <img
            src="/assets/images/invi.png"
            alt="Invitación"
            className="w-full h-auto block"
          />

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
                   className="absolute left-1/2 bottom-[3%] z-20 h-[15%] w-full -translate-x-1/2"
            aria-label="Abrir ubicación"
          />
        </div>
      </div>
    </section>
  );
}