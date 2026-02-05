import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const cards = [
  "/images/well-1.jpg",
  "/images/well-2.jpg",
  "/images/well-3.jpg",
  "/images/well-4.jpg",
  "/images/well-5.jpg",
];

export default function Wellbeing() {
  return (
    <section id="about" className="py-14">
      <Container>
        <SectionHeading
          title="Your Mental"
          accent="Wellbeing"
          subtitle="We support you with care and expert mental health guidance throughout your growth."
          right={<Button className="w-fit">Who We Are</Button>}
        />

        <div className="mt-8">
          <div className="flex gap-4 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
            {cards.map((src, i) => (
              <div
                key={src}
                className={[
                  "relative h-44 w-56 shrink-0 overflow-hidden rounded-2xl shadow-soft",
                  i === 0 ? "w-28" : "",
                  i === cards.length - 1 ? "w-28" : "",
                ].join(" ")}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
