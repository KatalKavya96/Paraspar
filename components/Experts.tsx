import Image from "next/image";
import { Container } from "../ui/Container";

const people = [
  { name: "Ethan Ramirez", role: "Mental Health Counselor", img: "/images/expert-1.jpg" },
  { name: "Dr. Olivia Carter", role: "Clinical Psychologist", img: "/images/expert-2.jpg" },
  { name: "Dr. Liam Patel", role: "Family & Relationship Therapist", img: "/images/expert-3.jpg" },
  { name: "Lucas Kim", role: "Behavioral Therapist", img: "/images/expert-4.jpg" },
];

export default function Experts() {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-3xl bg-sand-soft px-6 py-12 shadow-card sm:px-10">
          <div className="text-center">
            <h3 className="font-serif text-3xl">
              Meet Our <span className="italic text-brand">Experts</span>
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
              Our therapists have diverse specialties and share a mission — to support you with care throughout your healing journey.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((p) => (
              <div key={p.name} className="rounded-2xl bg-white/60 p-2 shadow-soft">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image src={p.img} alt={p.name} fill className="object-cover" />
                </div>
                <div className="p-1 mt-4 text-sm font-semibold">{p.name}</div>
                <div className="p-1 text-xs text-muted">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
