import Image from "next/image";
import background2 from "../../assets/images/fondo-2.png";
import inspoHombres from "../../assets/images/inspo-hombres.png";
import rose1 from "../../assets/images/rosa1.png";
import rose2 from "../../assets/images/rosa2.png";

export default function InspoHombresPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-10">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${background2.src})`, backgroundRepeat: "repeat", backgroundSize: "720px auto" }}
      />
      <div className="relative z-10 w-full max-w-[1100px]">
        <div className="flex items-center justify-center gap-4">
          <Image src={rose1} alt="" className="w-16 h-auto opacity-80" />
          <h1 className="text-center font-[var(--font-seasons)] text-[22px] md:text-[28px] tracking-[0.28em] text-[#3b3531]">
            INSPO HOMBRES
          </h1>
          <Image src={rose2} alt="" className="w-16 h-auto opacity-80" />
        </div>
        <p className="mt-4 mx-auto max-w-[820px] text-center font-serif text-[13px] md:text-[15px] leading-relaxed text-[#3b3531]/85">
          Nuestra boda será en jardín, te recomendamos utilizar calzado cómodo. Utiliza el color que más prefieras. Evita
          utilizar color blanco o colores claros que se le parezcan.
        </p>
        <Image src={inspoHombres} alt="Inspiración hombres" className="w-full h-auto" priority />
      </div>
    </main>
  );
}
