import { createFileRoute, Link } from "@tanstack/react-router";
import movementImg from "@/assets/movement.jpg";
import { PageHero, Section, FolkCard, Marquee } from "@/components/page-parts";

export const Route = createFileRoute("/movement")({
  head: () => ({
    meta: [
      { title: "Movement — VALČEK" },
      {
        name: "description",
        content:
          "Movement s VALČEK: sila, mobilita a dych. Tréning, ktorý drží telo zdravé aj mimo pretekovej sezóny.",
      },
      { property: "og:title", content: "Movement — VALČEK" },
      {
        property: "og:description",
        content: "Sila, mobilita a dych — základ pod každým športom.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/movement" },
    ],
    links: [{ rel: "canonical", href: "/movement" }],
  }),
  component: MovementPage,
});

function MovementPage() {
  return (
    <>
      <PageHero
        eyebrow="Sekcia 02"
        title="Movement"
        lead="Pohyb ako remeslo. Sila, mobilita a dych, ktoré držia telo pohromade — či už pretekáš, alebo len chceš ráno vstať bez bolesti."
      />

      <Marquee words={["Sila", "Mobilita", "Dych", "Stabilita", "Regenerácia"]} />

      <Section eyebrow="Piliere" title="Z čoho sa pohyb skladá">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="relative">
              <div
                aria-hidden
                className="folk-weave absolute -inset-3 -z-10 rounded-2xl opacity-70"
              />
              <img
                src={movementImg}
                alt="Mobilizačné cvičenie v presvetlenom štúdiu"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
              />
            </div>
          </div>
          <div className="grid gap-6 md:col-span-6">
            <FolkCard
              kicker="Sila"
              title="Bez sily niet vytrvalosti"
              text="Dva krátke silové tréningy týždenne, ktoré chránia kolená, chrbát a ramená pred objemom."
            />
            <FolkCard
              kicker="Mobilita"
              title="Rozsah, ktorý používaš"
              text="Nejde o špagát. Ide o bedrá a hrudník, ktoré ti dovolia bežať a plávať ekonomicky."
            />
            <FolkCard
              kicker="Dych"
              title="Pokoj sa dá trénovať"
              text="Dychové protokoly na štart, na kopec aj na večer, keď hlava odmieta vypnúť."
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="Rutina" title="Päť rán, ktoré niečo zmenia" tone="cream">
        <ol className="grid gap-4 md:grid-cols-5">
          {[
            "Rozdýchanie a rozhýbanie chrbtice",
            "Bedrá — otvorenie a kontrola",
            "Členky a chodidlá",
            "Stabilita stredu tela",
            "Ľahká sila a zavŕšenie",
          ].map((step, i) => (
            <li
              key={step}
              className="rounded-xl border border-border bg-card p-6 folk-dots"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-clay">
                Deň {i + 1}
              </span>
              <p className="mt-3 text-pretty font-display text-lg">{step}</p>
            </li>
          ))}
        </ol>
        <Link
          to="/advice"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-clay"
        >
          Viac praktických rád <span aria-hidden>→</span>
        </Link>
      </Section>
    </>
  );
}
