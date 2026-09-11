import { createFileRoute, Link } from "@tanstack/react-router";
import swimImg from "@/assets/swim.jpg";
import transitionImg from "@/assets/transition.jpg";
import { PageHero, Section, Marquee, StatRow } from "@/components/page-parts";

export const Route = createFileRoute("/triathlon")({
  head: () => ({
    meta: [
      { title: "Triathlon — VALČEK" },
      {
        name: "description",
        content:
          "Triatlonový tréning s VALČEK: plávanie, bicykel a beh v periodizovaných blokoch, výsledky a pretekové skúsenosti.",
      },
      { property: "og:title", content: "Triathlon — VALČEK" },
      {
        property: "og:description",
        content: "Periodizovaný triatlonový tréning: plávanie, bicykel, beh.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/triathlon" },
    ],
    links: [{ rel: "canonical", href: "/triathlon" }],
  }),
  component: TriathlonPage,
});

const RESULTS = [
  { year: "2025", race: "Ironman 70.3 Slovakia", place: "2. miesto AG", time: "04:38:22" },
  { year: "2024", race: "Xterra Tatry", place: "1. miesto AG", time: "03:12:07" },
  { year: "2024", race: "Slovakman Piešťany", place: "4. miesto", time: "09:41:55" },
  { year: "2023", race: "Triatlon Šamorín", place: "3. miesto", time: "02:07:19" },
];

function TriathlonPage() {
  return (
    <>
      <PageHero
        eyebrow="Sekcia 01"
        title="Triathlon"
        lead="Tri disciplíny, jedna hlava. Tu nájdeš, ako staviam pretekovú formu — od zimného základu po deň, keď sa všetko počíta."
      />

      <Marquee words={["Plávanie", "Bicykel", "Beh", "Depo", "Tempo", "Pretek"]} />

      <Section eyebrow="Tréningové bloky" title="Ako vyzerá sezóna">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Základ",
              d: "8–12 týždňov aeróbnej práce, techniky plávania a silového základu. Nudné, ale rozhoduje o všetkom.",
            },
            {
              n: "02",
              t: "Špecifika",
              d: "Bloky v pretekovom tempe, brick tréningy a nácvik výživy presne pre tvoju trať.",
            },
            {
              n: "03",
              t: "Ladenie",
              d: "Znižujeme objem, držíme intenzitu. Telo si pamätá prácu, hlava sa upokojuje.",
            },
          ].map((b) => (
            <article
              key={b.n}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-7"
            >
              <div aria-hidden className="folk-zigzag absolute inset-x-0 top-0 h-1.5" />
              <p className="mt-2 font-display text-5xl font-semibold text-clay/25">
                {b.n}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {b.d}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-14">
          <StatRow
            items={[
              { value: "47", label: "Dokončených pretekov" },
              { value: "3×", label: "Ironman distancia" },
              { value: "18", label: "Stupňov víťazov" },
              { value: "9", label: "Sezón v triatlone" },
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="Výsledky" title="Pretekové zápisky" tone="cream">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <ul className="divide-y divide-border">
              {RESULTS.map((r) => (
                <li
                  key={r.race}
                  className="flex flex-wrap items-baseline justify-between gap-3 py-5"
                >
                  <div>
                    <p className="font-display text-xl font-medium">{r.race}</p>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {r.year} · {r.place}
                    </p>
                  </div>
                  <span className="font-mono text-sm text-clay">{r.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <img
              src={swimImg}
              alt="Plávanie v otvorenej vode"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={transitionImg}
            alt="Detail depa počas preteku"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
          <div>
            <h2 className="text-balance text-4xl font-semibold">
              Chceš svoj prvý triatlon?
            </h2>
            <p className="mt-4 text-cream/70">
              Postavíme plán od nuly — vrátane techniky, výbavy a pretekovej
              taktiky.
            </p>
            <Link
              to="/coaching"
              className="mt-7 inline-block rounded-full bg-ochre px-7 py-3.5 text-sm font-semibold text-ink"
            >
              Pozri koučing
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
