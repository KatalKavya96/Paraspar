import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export default function CTA() {
  const avatars = [
    { top: "18%", left: "12%", src: "/images/avatar-1.jpg" },
    { top: "40%", left: "30%", src: "/images/avatar-2.jpg" },
    { top: "20%", left: "55%", src: "/images/avatar-3.jpg" },
    { top: "58%", left: "78%", src: "/images/avatar-4.jpg" },
    { top: "72%", left: "16%", src: "/images/avatar-5.jpg" },
  ];

  return (
    <section className="py-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center text-white shadow-card sm:px-10">
          {/* rings */}
          <div className="pointer-events-none absolute inset-0 opacity-100">
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-black/20">
            {avatars.map((a) => (
              <div
                key={a.src}
                className="absolute h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/60"
                style={{ top: a.top, left: a.left }}
              >
                <Image src={a.src} alt="" width={40} height={40} />
              </div>
            ))}
          </div>

          <div className="relative">
            <h3 className="font-serif text-3xl">
              Start Your <span className="italic">Healing</span>
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white/75">
              Book a session with a caring therapist and begin your journey to emotional clarity, balance, and a better life.
            </p>

            <div className="mt-6 flex justify-center">
              <Button className="bg-white text-red-600 hover:bg-white/90">Book A Session ↗</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
