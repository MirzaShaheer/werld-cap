// ─────────────────────────────────────────────────────────────────────────────
// Faint animated "retard soccer" backdrop for the deep-fried (black) theme.
// Detailed SVG footballers (head+hair, jersey, shorts, two-tone arms, socks +
// boots) with a 2-frame running leg/arm cycle and a patterned dribbled ball.
// Most players jog across; two are STRIKERS that run into the goals and set off
// a synced "GOOOAL!" flash. Pure CSS (keyframes in globals.css) — no JS, no
// hydration cost. Hard-coded positions/speeds so SSR == client.
// Two stacked layers behind the content (z-0 < z-10): a dim play layer and a
// brighter flash layer; both pointer-events-none + aria-hidden.
// ─────────────────────────────────────────────────────────────────────────────

type Kit = { jersey: string; shorts: string; socks: string; skin: string };

// team kits drawn from the deepfried palette
const KITS: Kit[] = [
  { jersey: "#bef264", shorts: "#1a2e05", socks: "#bef264", skin: "#e8b48f" }, // lime
  { jersey: "#e879f9", shorts: "#3b0764", socks: "#e879f9", skin: "#8d5524" }, // fuchsia
  { jersey: "#fde047", shorts: "#111111", socks: "#fde047", skin: "#c68642" }, // yellow
  { jersey: "#67e8f9", shorts: "#0e2a33", socks: "#67e8f9", skin: "#f1c9a5" }, // cyan
  { jersey: "#f9fafb", shorts: "#111827", socks: "#ef4444", skin: "#a86b46" }, // white/red
];

// A detailed running footballer facing RIGHT (flip via scaleX(-1) to go left).
// `phase` offsets the stride so players don't all step in unison.
function Player({
  kit,
  ball,
  phase,
}: {
  kit: Kit;
  ball?: boolean;
  phase: string;
}) {
  const d = { animationDelay: phase } as const;
  const { jersey, shorts, socks, skin } = kit;
  return (
    <svg
      viewBox="0 0 100 130"
      className="h-full w-full"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* head: hair circle behind, skin face nudged down so hair shows on top */}
      <circle cx="61" cy="17" r="10" fill="#26190f" />
      <circle cx="61" cy="19" r="9" fill={skin} />
      {/* neck */}
      <path d="M57 26 L54 33" stroke={skin} strokeWidth="6" />
      {/* torso (jersey) + a darker side panel for shading */}
      <path d="M47 30 L62 32 L55 72 L39 70 Z" fill={jersey} />
      <path d="M55 33 L62 32 L55 72 L51 71 Z" fill="#00000022" />
      {/* shorts */}
      <path d="M38 64 L56 67 L53 88 L45 86 L43 74 L40 86 L33 83 Z" fill={shorts} />

      {/* FRAME A — legs spread, opposite arms */}
      <g className="stride-a" style={d}>
        {/* back arm (sleeve + forearm) */}
        <path d="M50 34 L38 44 L33 55" stroke={jersey} strokeWidth="7" />
        <path d="M38 44 L33 55" stroke={skin} strokeWidth="5.5" />
        {/* front arm */}
        <path d="M58 34 L70 44 L76 33" stroke={jersey} strokeWidth="7" />
        <path d="M70 44 L76 33" stroke={skin} strokeWidth="5.5" />
        {/* back leg (thigh skin → sock → boot), lifted behind */}
        <path d="M42 70 L33 86 L24 80" stroke={skin} strokeWidth="8.5" />
        <path d="M33 86 L24 80" stroke={socks} strokeWidth="9" />
        <path d="M24 80 L14 82" stroke="#111111" strokeWidth="7" />
        {/* front leg planted ahead */}
        <path d="M50 71 L60 92 L66 110" stroke={skin} strokeWidth="9" />
        <path d="M60 92 L66 110" stroke={socks} strokeWidth="9.5" />
        <path d="M66 110 L77 113" stroke="#111111" strokeWidth="7.5" />
      </g>

      {/* FRAME B — legs gathered, arms swapped */}
      <g className="stride-b" style={d}>
        <path d="M58 34 L66 46 L62 58" stroke={jersey} strokeWidth="7" />
        <path d="M66 46 L62 58" stroke={skin} strokeWidth="5.5" />
        <path d="M50 34 L40 42 L46 31" stroke={jersey} strokeWidth="7" />
        <path d="M40 42 L46 31" stroke={skin} strokeWidth="5.5" />
        {/* back leg driving forward, knee up */}
        <path d="M42 70 L46 90 L56 98" stroke={skin} strokeWidth="8.5" />
        <path d="M46 90 L56 98" stroke={socks} strokeWidth="9" />
        <path d="M56 98 L66 100" stroke="#111111" strokeWidth="7" />
        {/* front leg under body */}
        <path d="M50 71 L50 93 L52 112" stroke={skin} strokeWidth="9" />
        <path d="M50 93 L52 112" stroke={socks} strokeWidth="9.5" />
        <path d="M52 112 L62 114" stroke="#111111" strokeWidth="7.5" />
      </g>

      {/* dribbled football (panelled) just ahead of the front foot */}
      {ball && (
        <g>
          <circle cx="83" cy="116" r="8.5" fill="#ffffff" stroke="#111111" strokeWidth="1.5" />
          <polygon points="83,110 88,114 86,121 80,121 78,114" fill="#111111" />
          <path
            d="M83 110 L83 105 M88 114 L93 112 M86 121 L89 126 M80 121 L77 126 M78 114 L73 112"
            stroke="#111111"
            strokeWidth="1.4"
          />
        </g>
      )}
    </svg>
  );
}

// A simple goal net (posts + crossbar + net grid).
function Goal() {
  return (
    <svg
      viewBox="0 0 90 70"
      className="h-full w-full"
      fill="none"
      stroke="#e5e7eb"
      strokeLinejoin="round"
    >
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

type Runner = {
  top: string;
  h: number;
  dur: string;
  delay: string;
  dir: "ltr" | "rtl";
  kit: number;
  ball: boolean;
  phase: string;
};

const RUNNERS: Runner[] = [
  { top: "14%", h: 86, dur: "22s", delay: "0s", dir: "ltr", kit: 0, ball: true, phase: "0s" },
  { top: "28%", h: 72, dur: "30s", delay: "-9s", dir: "ltr", kit: 1, ball: false, phase: "-0.1s" },
  { top: "45%", h: 94, dur: "18s", delay: "-5s", dir: "rtl", kit: 2, ball: true, phase: "-0.15s" },
  { top: "68%", h: 80, dur: "16s", delay: "-2s", dir: "rtl", kit: 3, ball: true, phase: "-0.05s" },
  { top: "84%", h: 66, dur: "26s", delay: "-7s", dir: "ltr", kit: 4, ball: false, phase: "-0.2s" },
];

type Scorer = {
  side: "right" | "left";
  top: string;
  h: number;
  dur: string;
  delay: string;
  kit: number;
  phase: string;
};

// strikers — each paired (same dur+delay) with a flash
const SCORERS: Scorer[] = [
  { side: "right", top: "52%", h: 90, dur: "10s", delay: "-3s", kit: 0, phase: "0s" },
  { side: "left", top: "37%", h: 82, dur: "13s", delay: "-7s", kit: 1, phase: "-0.12s" },
];

const GOALS: { top: string; side: "left" | "right"; h: number }[] = [
  { top: "49%", side: "right", h: 86 },
  { top: "34%", side: "left", h: 80 },
];

// GOOOAL! flashes — dur/delay MUST match the paired scorer so it pops on arrival
const FLASHES: {
  sideKey: "left" | "right";
  pos: string;
  top: string;
  dur: string;
  delay: string;
}[] = [
  { sideKey: "right", pos: "4%", top: "28%", dur: "10s", delay: "-3s" },
  { sideKey: "left", pos: "4%", top: "14%", dur: "13s", delay: "-7s" },
];

const W = 0.78; // player width : height ratio (matches viewBox 100:130)

export default function PitchBackground() {
  return (
    <>
      {/* dim play layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden opacity-20"
      >
        {RUNNERS.map((r, i) => (
          <div
            key={`r${i}`}
            className={`absolute pitch-anim ${r.dir === "ltr" ? "pitch-ltr" : "pitch-rtl"}`}
            style={{ top: r.top, animationDuration: r.dur, animationDelay: r.delay }}
          >
            <div className="pitch-bob" style={{ height: r.h, width: r.h * W }}>
              <div
                className="h-full w-full"
                style={{ transform: r.dir === "ltr" ? undefined : "scaleX(-1)" }}
              >
                <Player kit={KITS[r.kit]} ball={r.ball} phase={r.phase} />
              </div>
            </div>
          </div>
        ))}

        {SCORERS.map((s, i) => (
          <div
            key={`s${i}`}
            className={`absolute pitch-anim ${s.side === "right" ? "pitch-score-r" : "pitch-score-l"}`}
            style={{ top: s.top, animationDuration: s.dur, animationDelay: s.delay }}
          >
            <div className="pitch-bob" style={{ height: s.h, width: s.h * W }}>
              <div
                className="h-full w-full"
                style={{ transform: s.side === "right" ? undefined : "scaleX(-1)" }}
              >
                <Player kit={KITS[s.kit]} ball phase={s.phase} />
              </div>
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
