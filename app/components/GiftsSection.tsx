import Image from "next/image";
import Link from "next/link";
import background2 from "../assets/images/fondo-2.png";
import regalos from "../assets/images/regalos.png";

export default function GiftsSection() {
  return (
    <section id="mesa-de-regalos" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${background2.src})`, backgroundRepeat: "repeat", backgroundSize: "720px auto" }}
      />

      <div className="relative z-10 min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 py-20 md:py-24">
        <div className="relative w-full max-w-[520px]">
          <Image src={regalos} alt="Regalos" className="w-full h-auto" priority />

          <a
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51983963"
            target="_blank"
            rel="noreferrer"
            aria-label="Ir a mesa de regalos Liverpool"
            className="absolute left-1/2 top-[60.5%] h-[8.8%] w-[58%] -translate-x-1/2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b3531]/40"
          />

          <Link
            href="/cuenta"
            target="_blank"
            aria-label="Ir a página de cuenta"
            className="absolute left-1/2 top-[80.8%] h-[8.2%] w-[35%] -translate-x-1/2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b3531]/40"
          />
        </div>
      </div>
    </section>
  );
}

