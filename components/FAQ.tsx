import Image from "next/image";
import { Container } from "../ui/Container";
import { Accordion } from "../ui/Accordion";

const items = [
  { q: "What exactly is therapy?", a: "Therapy is a supportive conversation with a licensed professional to improve emotional wellbeing and coping skills." },
  { q: "How do I go about booking?", a: "Click “Book A Session” and choose a time slot that works best for you. You’ll receive confirmation details instantly." },
  { q: "Is my information private?", a: "Yes. Sessions are confidential and privacy is a core standard in all our processes." },
  { q: "How long is a session?", a: "Most sessions are 45–60 minutes depending on your plan and therapist." },
];

export default function FAQ() {
  return (
    <section className="py-12">
      <Container>
        <div className="text-center">
          <h3 className="font-serif text-3xl">Frequently Asked Questions</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            Therapy is a supportive and constructive conversation with a licensed professional to help improve your emotional wellbeing.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl bg-transparent">
            <Accordion items={items} />
          </div>

          <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-3xl shadow-card">
            <div className="relative aspect-[16/10]">
              <Image src="/images/faq.jpg" alt="Consultation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
