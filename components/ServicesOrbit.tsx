import { Container } from "../ui/Container";

const services = [
  { title: "Individual Therapy", text: "We provide private one-on-one sessions to help you explore your emotions, gain clarity, and develop healthier coping strategies." },
  { title: "Depression Support", text: "We’re here to help you through tough times. Together, let’s work toward restoring hope, inner strength, and confidence." },
  { title: "Family Therapy", text: "We support families facing conflict, emotional distance, or lifestyle changes — promoting stronger relationships." },
  { title: "Trauma & PTSD Recovery", text: "Using evidence-based techniques, we help you process trauma, rebuild inner safety, and regain confidence." },
];

export default function ServicesOrbit() {
  return (
    <section id="service" className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-transparent py-10">
          {/* Concentric circles */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sand/60" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sand/60" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sand/60" />

          {/* Center heading */}
          <div className="text-center">
            <h3 className="font-serif text-2xl">
              Care from <span className="italic text-brand">Anywhere</span>
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              With secure online sessions, getting help becomes easier — whether you’re at home, at work, or on the go.
            </p>
          </div>

          {/* Cards grid (responsive fallback) */}
          <div className="relative mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-sand-soft p-6 shadow-soft">
                <div className="mb-3 h-6 w-6 rounded-full bg-brand/15" />
                <h4 className="text-sm font-semibold">{s.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
