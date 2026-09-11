/**
 * Slovak folk ornament primitives (Čičmany geometry + výšivka rosettes).
 * Colors come from design tokens via currentColor / semantic classes.
 */

export function FolkRibbon({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`folk-zigzag h-3 w-full opacity-80 ${className}`}
    />
  );
}

export function FolkRosette({
  className = "",
  size = 96,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="50" cy="50" r="6" />
      <circle cx="50" cy="50" r="20" strokeDasharray="4 5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x = 50 + Math.cos(a) * 34;
        const y = 50 + Math.sin(a) * 34;
        return (
          <g key={i}>
            <line
              x1={50 + Math.cos(a) * 10}
              y1={50 + Math.sin(a) * 10}
              x2={x}
              y2={y}
            />
            <path
              d={`M ${x - 5} ${y} L ${x} ${y - 5} L ${x + 5} ${y} L ${x} ${y + 5} Z`}
            />
          </g>
        );
      })}
      <circle cx="50" cy="50" r="45" strokeDasharray="2 6" />
    </svg>
  );
}

export function FolkHeart({
  className = "",
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path d="M16 27 4 15a7 7 0 0 1 12-7 7 7 0 0 1 12 7Z" />
      <path d="M16 20l-4-4 4-4 4 4Z" />
    </svg>
  );
}

/** Čičmany-inspired repeating border strip */
export function FolkStrip({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 120 24"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      {Array.from({ length: 6 }).map((_, i) => {
        const x = i * 20;
        return (
          <g key={i}>
            <path d={`M${x} 12 L${x + 10} 2 L${x + 20} 12 L${x + 10} 22 Z`} />
            <path d={`M${x + 5} 12 L${x + 10} 7 L${x + 15} 12 L${x + 10} 17 Z`} />
          </g>
        );
      })}
    </svg>
  );
}
