import type { ReactNode } from "react";
import { FolkRosette, FolkStrip } from "./folk";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border folk-dots">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 text-ochre/40"
      >
        <FolkRosette size={320} className="animate-spin-slow" />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6 py-20">
        <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.28em] text-clay">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-[18ch] animate-fade-up text-balance text-5xl font-semibold leading-[0.98] md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-[52ch] animate-fade-up text-pretty text-lg text-muted-foreground">
          {lead}
        </p>
        {children}
      </div>
      <FolkStrip className="h-6 w-full text-clay/35" />
    </section>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "paper",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  tone?: "paper" | "cream" | "ink";
}) {
  const toneClass =
    tone === "ink"
      ? "bg-ink text-cream"
      : tone === "cream"
        ? "bg-cream"
        : "bg-background";
  return (
    <section id={id} className={`${toneClass} border-b border-border`}>
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        {eyebrow || title ? (
          <div className="mb-12">
            {eyebrow ? (
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-clay">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-3 text-balance text-4xl font-semibold md:text-5xl">
                {title}
              </h2>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function Marquee({ words }: { words: string[] }) {
  const line = words.join("  ·  ");
  return (
    <div className="overflow-hidden border-y border-border bg-clay py-3">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="pr-10 font-display text-xl italic text-primary-foreground">
          {line} ·{" "}
        </span>
        <span className="pr-10 font-display text-xl italic text-primary-foreground">
          {line} ·{" "}
        </span>
      </div>
    </div>
  );
}

export function FolkCard({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-transform duration-500 hover:-translate-y-1">
      <div
        aria-hidden
        className="folk-zigzag absolute inset-x-0 top-0 h-1.5 opacity-70"
      />
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-moss">
        {kicker}
      </p>
      <h3 className="mt-3 text-balance font-display text-2xl font-medium">{title}</h3>
      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </article>
  );
}

export function StatRow({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
      {items.map((s) => (
        <div key={s.label}>
          <p className="font-display text-4xl font-semibold text-clay">{s.value}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
