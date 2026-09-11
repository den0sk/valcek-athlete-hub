import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-triathlon.jpg";
import portraitImg from "@/assets/portrait-coach.jpg";
import swimImg from "@/assets/swim.jpg";
import movementImg from "@/assets/movement.jpg";
import transitionImg from "@/assets/transition.jpg";
import { FolkRosette, FolkStrip, FolkHeart } from "@/components/folk";
import { Section, Marquee, StatRow, FolkCard } from "@/components/page-parts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "About me — VALČEK, trénerka triatlonu a pohybu" },
      {
        name: "description",
        content:
          "Spoznaj VALČEK — trénerku triatlonu a pohybu. Príbeh, výsledky, tréningová filozofia a koučing so slovenskou dušou.",
      },
      { property: "og:title", content: "About me — VALČEK" },
      {
        property: "og:description",
        content:
          "Trénerka triatlonu a pohybu. Príbeh, výsledky a tréning so slovenskou dušou.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: AboutMe,
});

function AboutMe() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Trénerka v depe pred triatlonovými pretekmi za úsvitu"
            width={1600}
            height={1008}
            className="h-full w-full animate-drift object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 text-clay/25"
        >
          <FolkRosette size={280} className="animate-spin-slow" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.3em] text-clay">
            Trénerka triatlonu &amp; pohybu · Slovensko
          </p>
          <h1 className="mt-6 max-w-[15ch] animate-fade-up text-balance text-6xl font-semibold leading-[0.92] md:text-8xl">
            About me
          </h1>
          <p className="mt-8 max-w-[46ch] animate-fade-up text-pretty text-lg text-muted-foreground md:text-xl">
            Som VALČEK. Trénujem ľudí, ktorí chcú v triatlone aj v bežnom pohybe
            nájsť silu, ktorá vydrží dlhšie ako jedna sezóna. Vzory, ktoré tu
            vidíš, sú z čičmianskych výšiviek — pripomínajú mi, že aj tréning je
            remeslo, ktoré sa dedí.
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-4">
            <Link
              to="/coaching"
              className="rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Chcem trénovať s tebou
            </Link>
            <Link
              to="/stories"
              className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              Čítať príbehy
            </Link>
          </div>
        </div>
        <FolkStrip className="h-6 w-full text-clay/40" />
      </section>

      <Marquee
        words={[
          "Triatlon",
          "Pohyb",
          "Vytrvalosť",
          "Dych",
          "Regenerácia",
          "Čičmany",
        ]}
      />

      {/* PRÍBEH */}
      <Section eyebrow="01 — Príbeh" title="Trénerka za štartovým číslom">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                className="folk-weave absolute -inset-3 -z-10 rounded-2xl opacity-70"
              />
              <img
                src={portraitImg}
                alt="Portrét trénerky VALČEK"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              K triatlonu ma priviedla zvedavosť, k trénerstvu tvrdohlavosť.
              Deväť rokov vediem športovcov od prvých sto metrov v bazéne až po
              cieľovú pásku dlhých tratí. Verím, že konzistencia poráža
              intenzitu a že telo, ktoré sa vie hýbať dobre, vydrží ďaleko.
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Moja práca stojí medzi presnosťou pretekového dňa a tichom
              nedeľného silového tréningu. Píšem plány, ktoré rešpektujú prácu,
              rodinu aj spánok — nie len tabuľku v appke.
            </p>
            <div className="mt-10">
              <StatRow
                items={[
                  { value: "09", label: "Rokov trénovania" },
                  { value: "47", label: "Dokončených pretekov" },
                  { value: "120+", label: "Vedených športovcov" },
                  { value: "18", label: "Stupňov víťazov" },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* DISCIPLÍNY */}
      <Section eyebrow="02 — Disciplíny" title="Dva spôsoby, ako sa hýbať" tone="cream">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              img: swimImg,
              alt: "Plavec v otvorenej vode za svitania",
              title: "Triatlon",
              text: "Periodizované bloky plávania, bicykla a behu postavené na tvoj cieľový pretek.",
              to: "/triathlon" as const,
              cta: "Pozri triatlon",
            },
            {
              img: movementImg,
              alt: "Žena pri mobilizačnom cvičení v presvetlenom štúdiu",
              title: "Movement",
              text: "Sila, mobilita a dych — základ, ktorý drží telo zdravé aj po sezóne.",
              to: "/movement" as const,
              cta: "Pozri movement",
            },
            {
              img: transitionImg,
              alt: "Detail rúk na bicykli v depe",
              title: "Depo",
              text: "Remeslo medzi disciplínami: tempo, výživa a pokoj, ktorý rozhoduje.",
              to: "/advice" as const,
              cta: "Praktické rady",
            },
          ].map((d) => (
            <article
              key={d.title}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="overflow-hidden">
                <img
                  src={d.img}
                  alt={d.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium">{d.title}</h3>
                <p className="mt-2 text-pretty text-sm text-muted-foreground">
                  {d.text}
                </p>
                <Link
                  to={d.to}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-clay"
                >
                  {d.cta} <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* HODNOTY */}
      <Section eyebrow="03 — Ako trénujem" title="Tri veci, na ktorých staviam">
        <div className="grid gap-6 md:grid-cols-3">
          <FolkCard
            kicker="Trpezlivosť"
            title="Sezóna, nie týždeň"
            text="Forma sa stavia mesiace. Plán preto rátame od cieľového preteku dozadu, nie od nálady dopredu."
          />
          <FolkCard
            kicker="Remeslo"
            title="Technika pred objemom"
            text="Najprv sa naučíme hýbať dobre, potom pridávame kilometre. Šetrí to kĺby aj motiváciu."
          />
          <FolkCard
            kicker="Ľudskosť"
            title="Tréning pre tvoj život"
            text="Práca, deti, cestovanie. Plán sa ohýba podľa reality — a napriek tomu vedie k cieľu."
          />
        </div>
      </Section>

      {/* CTA */}
      <Section tone="ink">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-ochre">
              04 — Poďme na to
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">
              Jedna sezóna, postavená na mieru tebe
            </h2>
            <p className="mt-5 max-w-[46ch] text-pretty text-cream/70">
              Malá skupina športovcov, priama spätná väzba a plán, ktorý
              rešpektuje tvoj život. Napíš mi, kde si a kam chceš prísť.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-ochre px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Ozvi sa mi
            </Link>
          </div>
          <div className="flex justify-center md:col-span-4">
            <FolkHeart className="text-ochre" size={140} />
          </div>
        </div>
      </Section>
    </>
  );
}
