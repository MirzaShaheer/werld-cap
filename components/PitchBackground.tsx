// ─────────────────────────────────────────────────────────────────────────────
// Faint animated "retard soccer" backdrop for the deep-fried (black) theme.
//
// The players are the project's own character art (public/players/p1..p9.png),
// drifting across as circular "player coins" with a gentle bob. Two of them
// drift INTO the goals and set off a synced "GOOOAL!" flash. A couple of soccer
// balls roll across for flavour. Pure CSS (keyframes in globals.css) — no JS, no
// hydration cost. Hard-coded positions/speeds so SSR == client. Two stacked
// layers behind the content (z-0 < z-10): a dim play layer + a brighter flash
// layer; both pointer-events-none + aria-hidden.
//
// Drop the 9 character images in /public/players as p1.png … p9.png.
// ─────────────────────────────────────────────────────────────────────────────

function Avatar({ src }: { src: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt=""
      className="h-full w-full rounded-full object-cover object-top shadow-xl ring-2 ring-white/15"
    />
  );
}

// A simple rolling soccer ball.
function Ball() {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full">
      <circle cx="20" cy="20" r="18" fill="#ffffff" stroke="#111111" strokeWidth="2" />
      <polygon points="20,11 27,16 24,25 16,25 13,16" fill="#111111" />
      <path
        d="M20 11 V4 M27 16 L34 13 M24 25 L28 32 M16 25 L12 32 M13 16 L6 13"
        stroke="#111111"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

// A goal net (posts + crossbar + net grid).
function Goal() {
  return (
    <svg viewBox="0 0 90 70" className="h-full w-full" fill="none" stroke="#e5e7eb" strokeLinejoin="round">
      <path d="M12 10 L24 20 H66 L78 10" strokeWidth="3" />
      <path d="M24 20 V60 M66 20 V60" strokeWidth="3" />
      <g strokeWidth="1" opacity="0.6">
        <path d="M31 20 V60 M38 20 V60 M45 20 V60 M52 20 V60 M59 20 V60" />
        <path d="M24 28 H66 M24 36 H66 M24 44 H66 M24 52 H66" />
      </g>
      <path d="M12 10 V60 H78 V10" strokeWidth="4.5" />
    </svg>
  );
}

const IMG = (n: number) => `/players/p${n}.png`;

type Drift = { src: string; top: string; h: number; dur: string; delay: string; dir: "ltr" | "rtl" };

// players drifting across the pitch
const DRIFT: Drift[] = [
  { src: IMG(1), top: "11%", h: 124, dur: "27s", delay: "0s", dir: "ltr" },
  { src: IMG(2), top: "29%", h: 96, dur: "35s", delay: "-11s", dir: "rtl" },
  { src: IMG(3), top: "49%", h: 132, dur: "22s", delay: "-6s", dir: "ltr" },
  { src: IMG(4), top: "66%", h: 104, dur: "30s", delay: "-3s", dir: "rtl" },
  { src: IMG(5), top: "83%", h: 88, dur: "29s", delay: "-9s", dir: "ltr" },
  { src: IMG(6), top: "19%", h: 84, dur: "39s", delay: "-15s", dir: "rtl" },
  { src: IMG(7), top: "73%", h: 112, dur: "24s", delay: "-5s", dir: "ltr" },
];

type Scorer = { src: string; side: "right" | "left"; top: string; h: number; dur: string; delay: string };

// strikers — each paired (same dur+delay) with a flash
const SCORERS: Scorer[] = [
  { src: IMG(8), side: "right", top: "52%", h: 120, dur: "11s", delay: "-4s" },
  { src: IMG(9), side: "left", top: "37%", h: 110, dur: "14s", delay: "-8s" },
];

const BALLS: { top: string; h: number; dur: string; delay: string }[] = [
  { top: "40%", h: 34, dur: "12s", delay: "-1s" },
  { top: "61%", h: 42, dur: "9s", delay: "-5s" },
];

const GOALS: { top: string; side: "left" | "right"; h: number }[] = [
  { top: "49%", side: "right", h: 86 },
  { top: "34%", side: "left", h: 80 },
];

// GOOOAL! flashes — dur/delay MUST match the paired scorer so it pops on arrival
const FLASHES: { sideKey: "left" | "right"; pos: string; top: string; dur: string; delay: string }[] = [
  { sideKey: "right", pos: "4%", top: "28%", dur: "11s", delay: "-4s" },
  { sideKey: "left", pos: "4%", top: "14%", dur: "14s", delay: "-8s" },
];

export default function PitchBackground() {
  return (
    <>
      {/* dim play layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden opacity-25"
      >
        {DRIFT.map((p, i) => (
          <div
            key={`d${i}`}
            className={`absolute pitch-anim ${p.dir === "ltr" ? "pitch-ltr" : "pitch-rtl"}`}
            style={{ top: p.top, animationDuration: p.dur, animationDelay: p.delay }}
          >
            <div className="pitch-bob" style={{ height: p.h, width: p.h }}>
              <Avatar src={p.src} />
            </div>
          </div>
        ))}

        {SCORERS.map((s, i) => (
          <div
            key={`s${i}`}
            className={`absolute pitch-anim ${s.side === "right" ? "pitch-score-r" : "pitch-score-l"}`}
            style={{ top: s.top, animationDuration: s.dur, animationDelay: s.delay }}
          >
            <div className="pitch-bob" style={{ height: s.h, width: s.h }}>
              <Avatar src={s.src} />
            </div>
          </div>
        ))}

        {BALLS.map((b, i) => (
          <div
            key={`b${i}`}
            className="absolute pitch-anim pitch-roll"
            style={{ top: b.top, animationDuration: b.dur, animationDelay: b.delay }}
          >
            <div style={{ height: b.h, width: b.h }}>
              <Ball />
            </div>
          </div>
        ))}

        {GOALS.map((g, i) => (
          <div
            key={`g${i}`}
            className="absolute pitch-pulse"
            style={{ top: g.top, [g.side]: "1%", height: g.h, width: g.h * 1.28 }}
          >
            <Goal />
          </div>
        ))}
      </div>

      {/* brighter flash layer (still behind content) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden opacity-50"
      >
        {FLASHES.map((f, i) => (
          <div
            key={`f${i}`}
            className="absolute pitch-goalflash"
            style={{ top: f.top, [f.sideKey]: f.pos, animationDuration: f.dur, animationDelay: f.delay }}
          >
            <span className="font-impact text-4xl uppercase text-lime-300 [text-shadow:3px_3px_0_#FF2D95,6px_6px_0_#FFE600] sm:text-6xl">
              GOOOAL!
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
