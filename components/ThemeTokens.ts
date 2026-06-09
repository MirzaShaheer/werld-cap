// ─────────────────────────────────────────────────────────────────────────────
// THEME SYSTEM
// One layout, three "retard-meta" looks. Every component reads class strings
// from here so the three /preview pages differ by style only. After the client
// picks a winner, set DEFAULT_THEME in lib/config-side and the main "/" uses it.
//
// IMPORTANT for Tailwind: class strings must appear here as complete literals
// (no string concatenation) so the JIT scanner keeps them.
// ─────────────────────────────────────────────────────────────────────────────

export type ThemeName = "deepfried" | "cleanjank" | "mspaint";

export interface ThemeTokens {
  name: ThemeName;
  label: string;
  blurb: string;

  page: string;
  shell: string; // max-width wrapper per section

  heroTitle: string;
  heroTagline: string;
  heroBall: string; // mascot ball classes

  sectionTitle: string;
  sectionKicker: string;

  card: string;
  cardTitle: string;
  cardCategory: string;
  cardDesc: string;
  reward: string;
  thumb: string; // bounty-card emoji tile background (must read on this theme's card)

  badgeLive: string;
  badgeSoon: string;

  btnPrimary: string;
  btnGhost: string;

  divider: string;
  chrome: string; // pump.fun fake-window header
  friedImg: boolean; // apply the deep-fried filter to thumbnails
  tilt: boolean; // alternate-tilt the bounty cards
  pitchBg: boolean; // faint animated emoji-soccer backdrop (dark themes only)
}

export const THEMES: Record<ThemeName, ThemeTokens> = {
  // ── 1. DEEP-FRIED CHAOS ────────────────────────────────────────────────────
  deepfried: {
    name: "deepfried",
    label: "Deep-fried chaos",
    blurb: "max retardio energy · neon on black · jpeg-fried",
    page: "min-h-screen bg-black text-lime-300 font-comic selection:bg-fuchsia-500 selection:text-black overflow-x-hidden",
    shell: "mx-auto w-full max-w-6xl px-4",
    heroTitle:
      "font-impact uppercase text-6xl sm:text-8xl leading-none tracking-tight text-lime-300 [text-shadow:4px_4px_0_#FF2D95,8px_8px_0_#FFE600] -rotate-2",
    heroTagline: "font-comic text-xl sm:text-2xl text-fuchsia-400",
    heroBall: "text-7xl animate-wobble drop-shadow-[0_0_18px_#39FF14]",
    sectionTitle:
      "font-impact uppercase text-4xl sm:text-5xl text-yellow-300 [text-shadow:3px_3px_0_#FF2D95]",
    sectionKicker: "font-comic text-fuchsia-400 uppercase tracking-widest text-sm",
    card: "relative bg-zinc-900 border-4 border-fuchsia-500 rounded-2xl p-4 shadow-[8px_8px_0_#39FF14] hover:shadow-[12px_12px_0_#FFE600] hover:-translate-y-1 transition",
    cardTitle: "font-impact uppercase text-2xl text-lime-300",
    cardCategory: "font-comic text-xs uppercase tracking-wider text-fuchsia-400",
    cardDesc: "font-comic text-sm text-lime-100/80",
    reward: "font-impact text-yellow-300",
    thumb: "bg-fuchsia-500/10",
    badgeLive: "bg-red-600 text-white font-impact uppercase text-xs px-2 py-1 rounded animate-pulse",
    badgeSoon: "bg-yellow-400 text-black font-impact uppercase text-xs px-2 py-1 rounded",
    btnPrimary:
      "inline-block bg-fuchsia-500 text-black font-impact uppercase tracking-wide px-5 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:bg-yellow-300 active:translate-x-1 active:translate-y-1 active:shadow-none transition",
    btnGhost:
      "inline-block border-2 border-lime-300 text-lime-300 font-comic px-4 py-2 rounded-lg hover:bg-lime-300 hover:text-black transition",
    divider: "border-fuchsia-700/50",
    chrome: "bg-zinc-800 border-b-4 border-fuchsia-500",
    friedImg: true,
    tilt: true,
    pitchBg: true,
  },

  // ── 2. CLEAN-JANK HYBRID ───────────────────────────────────────────────────
  cleanjank: {
    name: "cleanjank",
    label: "Clean-jank hybrid",
    blurb: "readable · pitch-green & gold · meme titles, light misspells",
    page: "min-h-screen bg-emerald-50 text-emerald-950 font-body",
    shell: "mx-auto w-full max-w-6xl px-4",
    heroTitle:
      "font-anton uppercase text-6xl sm:text-8xl leading-none tracking-tight text-emerald-800",
    heroTagline: "font-body text-lg sm:text-xl text-emerald-700",
    heroBall: "text-7xl drop-shadow-md",
    sectionTitle: "font-anton uppercase text-4xl sm:text-5xl text-emerald-900",
    sectionKicker: "font-body font-semibold text-amber-600 uppercase tracking-widest text-sm",
    card: "relative bg-white border border-emerald-200 rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition",
    cardTitle: "font-anton uppercase text-2xl text-emerald-900",
    cardCategory: "font-body text-xs uppercase tracking-wider text-amber-600 font-semibold",
    cardDesc: "font-body text-sm text-emerald-800/80",
    reward: "font-anton text-emerald-700",
    thumb: "bg-emerald-100",
    badgeLive: "bg-emerald-600 text-white font-semibold text-xs uppercase px-2 py-1 rounded-full",
    badgeSoon: "bg-amber-400 text-amber-950 font-semibold text-xs uppercase px-2 py-1 rounded-full",
    btnPrimary:
      "inline-block bg-amber-400 text-emerald-950 font-bold px-5 py-3 rounded-xl hover:bg-amber-300 shadow-sm hover:shadow-md transition",
    btnGhost:
      "inline-block border border-emerald-300 text-emerald-800 px-4 py-2 rounded-xl hover:bg-emerald-100 transition",
    divider: "border-emerald-200",
    chrome: "bg-emerald-100 border-b border-emerald-200",
    friedImg: false,
    tilt: false,
    pitchBg: false,
  },

  // ── 3. MS-PAINT SHITPOST ───────────────────────────────────────────────────
  mspaint: {
    name: "mspaint",
    label: "MS-Paint shitpost",
    blurb: "drawn w/ a mouse · crayon borders · paper texture",
    page: "min-h-screen paper text-zinc-900 font-comic",
    shell: "mx-auto w-full max-w-6xl px-4",
    heroTitle: "font-marker text-6xl sm:text-8xl leading-none text-blue-700 -rotate-1",
    heroTagline: "font-comic text-lg sm:text-xl text-zinc-700",
    heroBall: "text-7xl -rotate-6",
    sectionTitle:
      "font-marker text-4xl sm:text-5xl text-red-600 underline decoration-wavy decoration-2",
    sectionKicker: "font-comic text-blue-700 uppercase tracking-widest text-sm",
    card: "relative bg-white crayon-border p-4 shadow-[3px_3px_0_#bbb] hover:shadow-[5px_5px_0_#999] transition",
    cardTitle: "font-marker text-2xl text-blue-700",
    cardCategory: "font-comic text-xs uppercase tracking-wider text-red-600",
    cardDesc: "font-comic text-sm text-zinc-700",
    reward: "font-marker text-green-700",
    thumb: "bg-zinc-100",
    badgeLive: "bg-red-500 text-white font-comic text-xs px-2 py-1 crayon-border",
    badgeSoon: "bg-yellow-300 text-zinc-900 font-comic text-xs px-2 py-1 crayon-border",
    btnPrimary:
      "inline-block bg-yellow-300 text-zinc-900 font-marker px-5 py-2 crayon-border hover:bg-yellow-200 hover:-rotate-1 transition",
    btnGhost: "inline-block bg-white text-blue-700 font-comic px-4 py-2 crayon-border hover:bg-blue-50 transition",
    divider: "border-zinc-300",
    chrome: "bg-zinc-100 crayon-border border-b-0",
    friedImg: false,
    tilt: true,
    pitchBg: false,
  },
};

export const DEFAULT_THEME: ThemeName = "deepfried";
