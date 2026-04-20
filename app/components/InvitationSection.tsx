import Image from "next/image";
import background2 from "../assets/images/fondo-2.png";
import flowerLeft from "../assets/images/flor 2.png";
import invitacion from "../assets/images/invitacion.png";

export default function InvitationSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-2 py-6 sm:px-4 sm:py-10">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${background2.src})`, backgroundRepeat: "repeat", backgroundSize: "720px auto" }}
      />

      <Image
        src={flowerLeft}
        alt=""
        priority
        className="absolute left-0 bottom-0 z-[5] w-[160px] sm:w-[220px] md:w-[280px] h-auto opacity-80 pointer-events-none select-none"
      />

      <div className="relative z-10 w-full md:max-w-[720px] lg:max-w-[820px]">
        <Image src={invitacion} alt="Invitación" className="w-full h-auto" priority />
      </div>
    </section>
  );
}

