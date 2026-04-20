import { useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";

const pad2 = (value: number) => String(value).padStart(2, "0");

const menuLeft = [
  { label: "INICIO", href: "#inicio" },
  { label: "ITINERARIO", href: "#itinerario" },
  { label: "HOSPEDAJE", href: "#hospedaje" },
] as const;

const menuRight = [
  { label: "RECOMENDACIONES", href: "#recomendaciones" },
  { label: "MESA DE REGALOS", href: "#mesa-de-regalos" },
  { label: "RSVP", href: "#rsvp" },
] as const;

export default function HeroCountdownSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, time } = useCountdown({ day: 28, month: 11, year: 2026, hour: 18, minute: 0, second: 0 });

  const dayText = time.days <= 99 ? pad2(time.days) : String(time.days);
  const menuItems = [...menuLeft, ...menuRight];

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      <img src="/assets/images/mesa-de-trabajo-3.png" alt="" className="absolute inset-0 h-full w-full object-cover" />

      <nav className="absolute inset-x-0 top-0 z-20 px-4 sm:px-6 pt-6">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="md:hidden flex items-center justify-between">
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="font-[var(--font-seasons)] text-[12px] tracking-[0.32em] text-[#f7efe9]/90 hover:text-[#f7efe9] transition-colors"
            >
              MENÚ
            </button>
          </div>

          <div className="hidden md:flex items-center justify-between gap-x-10">
            <div className="flex items-center gap-6 sm:gap-8">
              {menuLeft.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-[var(--font-seasons)] text-[11px] tracking-[0.28em] text-[#f7efe9]/90 hover:text-[#f7efe9] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6 sm:gap-8">
              {menuRight.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-[var(--font-seasons)] text-[11px] tracking-[0.28em] text-[#f7efe9]/90 hover:text-[#f7efe9] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {menuOpen ? (
        <div className="md:hidden fixed inset-0 z-30">
          <button
            type="button"
            aria-label="Cerrar menú"
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setMenuOpen(false)}
          />

          <div className="relative mx-auto mt-6 w-[92%] max-w-sm rounded-2xl border border-white/10 bg-black/70 shadow-[0_18px_30px_rgba(0,0,0,0.35)] px-6 py-5">
            <div className="flex items-start justify-between">
              <div className="font-[var(--font-seasons)] text-[12px] tracking-[0.32em] text-[#f7efe9]/90">NAVEGACIÓN</div>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setMenuOpen(false)}
                className="font-[var(--font-seasons)] text-[12px] tracking-[0.22em] text-[#f7efe9]/90 hover:text-[#f7efe9] transition-colors"
              >
                CERRAR
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-[var(--font-seasons)] text-[13px] tracking-[0.26em] text-[#f7efe9]/90 hover:text-[#f7efe9] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-16 pb-16 gap-10">
        <div className="flex flex-col items-center justify-center w-full">
          <img src="/assets/images/logo.png" alt="" className="w-52 h-auto md:w-64" />
        </div>

        <div className="w-full flex flex-col items-center gap-3">
          <div className="flex items-end justify-center gap-6 sm:gap-10 md:gap-14 font-serif text-[#f7efe9]">
            <div className="text-center">
              <div className="text-4xl md:text-5xl leading-none tracking-widest">{dayText}</div>
              <div className="mt-2 text-base md:text-lg italic">Días</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl leading-none tracking-widest">{pad2(time.hours)}</div>
              <div className="mt-2 text-base md:text-lg italic">Hrs</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl leading-none tracking-widest">{pad2(time.minutes)}</div>
              <div className="mt-2 text-base md:text-lg italic">Min</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl leading-none tracking-widest">{pad2(time.seconds)}</div>
              <div className="mt-2 text-base md:text-lg italic">Seg</div>
            </div>
          </div>

          <div className="text-xs md:text-sm text-[#f7efe9]/80 font-serif italic">
            {mode === "countdown" ? "Cuenta regresiva" : "Tiempo transcurrido"}
          </div>
        </div>
      </div>
    </section>
  );
}

