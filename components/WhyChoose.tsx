import Image from "next/image";
import { Container } from "../ui/Container";

export default function WhyChoose() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="font-serif text-3xl">
              Why Choose <span className="italic text-brand">Pāraspar</span>
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted">
              Paraspar provides care & professional mental health support for your journey.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-sand-soft p-5 shadow-soft">
                <div className="mb-2 h-6 w-6 rounded-full bg-brand/15" />
                <div className="text-sm font-semibold">Personalized Care</div>
                <p className="mt-1 text-xs text-muted">
                  Therapy tailored to meet your unique needs.
                </p>
              </div>
              <div className="rounded-2xl bg-sand-soft p-5 shadow-soft">
                <div className="mb-2 h-6 w-6 rounded-full bg-brand/15" />
                <div className="text-sm font-semibold">100% Confidential</div>
                <p className="mt-1 text-xs text-muted">
                  Your privacy is always protected, respected, and valued.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-3xl shadow-card">
            <div className="relative aspect-[16/10]">
              <Image src="/images/why.jpg" alt="Session" fill className="object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
