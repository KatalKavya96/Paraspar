"use client";

import { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const data = [
  {
    quote:
      "With the clinic’s support, our home has gently transformed into a sanctuary of calm. We now communicate with care and clarity, leaving all past conflicts so far behind.",
    name: "Jonas Muller",
    role: "Family Therapy",
  },
  {
    quote:
      "My therapist helped me rebuild routines and confidence. It felt safe, structured, and genuinely caring.",
    name: "Aisha Verma",
    role: "Individual Therapy",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h3 className="font-serif text-3xl">
              Every Session <span className="italic text-brand">Matters</span>
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Therapists support clients in making small steps for improvements.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-sand-soft p-6 shadow-soft">
              <p className="text-sm text-text">“{data[i].quote}”</p>
              <div className="mt-6 text-sm font-semibold">{data[i].name}</div>
              <div className="text-xs text-muted">{data[i].role}</div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setI((prev) => (prev - 1 + data.length) % data.length)}>
                ←
              </Button>
              <Button variant="ghost" onClick={() => setI((prev) => (prev + 1) % data.length)}>
                →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
