import Image from "next/image";
import background2 from "../assets/images/fondo-2.png";
import rose1 from "../assets/images/rosa1.png";
import rose2 from "../assets/images/rosa2.png";

export default function CuentaPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-10 md:py-14">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${background2.src})`, backgroundRepeat: "repeat", backgroundSize: "720px auto" }}
      />

      <div className="relative z-10 w-full max-w-[1100px] text-[#3b3531]">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <Image src={rose1} alt="" className="w-16 md:w-24 h-auto opacity-70" />
          <h1 className="font-serif text-[38px] md:text-[56px] tracking-[0.06em]">DATOS BANCARIOS</h1>
          <Image src={rose2} alt="" className="w-16 md:w-24 h-auto opacity-70" />
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-center font-serif">
          <div>
            <div className="text-[28px] md:text-[46px] leading-tight">Cristian Emmanuel Trejo Rodríguez</div>
            <div className="mt-1 text-[34px] md:text-[52px] leading-tight">Banamex</div>

            <div className="mt-8 text-[34px] md:text-[52px] leading-tight">Cuenta:</div>
            <div className="mt-1 text-[36px] md:text-[56px] tracking-[0.03em] leading-tight">3775928</div>

            <div className="mt-8 text-[34px] md:text-[52px] leading-tight">Clabe:</div>
            <div className="mt-1 text-[34px] md:text-[52px] tracking-[0.03em] leading-tight">002700701737759289</div>
          </div>

          <div>
            <div className="text-[28px] md:text-[46px] leading-tight">Emyn Cecilia Villarreal Hernández</div>
            <div className="mt-1 text-[34px] md:text-[52px] leading-tight">Banorte</div>

            <div className="mt-8 text-[34px] md:text-[52px] leading-tight">Cuenta:</div>
            <div className="mt-1 text-[36px] md:text-[56px] tracking-[0.03em] leading-tight">101814988</div>

            <div className="mt-8 text-[34px] md:text-[52px] leading-tight">Clabe:</div>
            <div className="mt-1 text-[34px] md:text-[52px] tracking-[0.03em] leading-tight">07258001018149882</div>
          </div>
        </div>
      </div>
    </main>
  );
}
