import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <section className="pt-6">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-surface shadow-card">
          {/* Soft circles like your design */}
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-black/5" />
            <div className="absolute left-40 top-2 h-96 w-96 rounded-full bg-black/5" />
            <div className="absolute right-24 bottom-10 h-72 w-72 rounded-full bg-black/5" />
          </div>

          <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <h1 className="font-serif text-3xl leading-tight sm:text-4xl">
                You’re Not Alone{" "}
                <span className="font-serif italic text-brand">Healing</span> Starts Here
              </h1>
              <p className="mt-3 max-w-md text-sm text-muted">
                Paraspar provides care & professional mental health support for your journey.
              </p>

              <Button className="mt-5">
                Book A Session <span aria-hidden>↗</span>
              </Button>

              <div className="mt-8 w-full max-w-sm rounded-2xl bg-surface p-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg","/images/avatar-4.jpg","/images/avatar-5.jpg"].map((src) => (
                      <div key={src} className="h-8 w-8 overflow-hidden rounded-full ring-2 ring-white">
                        <Image src={src} alt="" width={32} height={32} />
                      </div>
                    ))}
                  </div>
                  <div className="text-brand">★★★★★</div>
                </div>
                <p className="mt-2 text-xs text-muted">
                  Over 300 individuals who have confidently trusted Paraspar for their overall well-being.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/cropped_hero.png"
                  alt="Therapist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
