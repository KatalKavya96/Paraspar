import { Container } from "../ui/Container";

const stats = [
  { k: "10+", v: "Caring for your mental health is vital." },
  { k: "1,500+", v: "Helping clients live their best lives every day!" },
  { k: "25+", v: "Therapists licensed and compassionate" },
  { k: "95%", v: "Satisfaction clients feel improved significantly" },
];

export default function StatsBar() {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-2xl bg-brand px-6 py-8 text-white shadow-card">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.k}>
                <div className="font-serif text-2xl">{s.k}</div>
                <p className="mt-2 text-xs text-white/75">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
