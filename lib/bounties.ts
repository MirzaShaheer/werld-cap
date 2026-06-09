import { config } from "./config";

export type BountyStatus = "live" | "upcoming";

export interface Bounty {
  id: string;
  title: string;
  category: string;
  rewardSol: number;
  status: BountyStatus;
  /** Short human label, e.g. "LIVE NOW" or "UNLOCKS NEXT WEEK". */
  when: string;
  /** ISO timestamp for the countdown (upcoming bounties only). */
  unlockAtIso?: string;
  emoji: string;
  /** Bounty thumbnail in /public (falls back to the emoji if absent). */
  image?: string;
  description: string;
  /** Where "Claim on Pumpfun" sends the user. */
  pumpUrl: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// THE BOUNTIES — copy is written in the $WERL "retard-meta" voice on purpose.
// The client resubmits these on Pump.fun GO verbatim. All tasks are kept
// legal/safe so PF moderation accepts them.
// World Cup 2026 runs ~Jun 11 – Jul 19, 2026.
// ─────────────────────────────────────────────────────────────────────────────

export const bounties: Bounty[] = [
  // ───────────────── ACTIVE ─────────────────
  {
    id: "famly-fit-chek",
    image: "/01_famly_fit_chek.svg",
    title: "FAMLY FIT CHEK",
    category: "Fan Content",
    rewardSol: 0.5,
    status: "live",
    when: "ENDS AT FINAL WHISTEL",
    emoji: "👨‍👩‍👧",
    description:
      "take a selfie wif ur hole famly all wearin the WRONG team jersy durin the openin match. bonus points if grandma is in the iran kit watchin USA vs paraguay. confuse the entire room. post it + tag $WerldCap.",
    pumpUrl: "https://pump.fun/go/6fa1301d-50ce-4473-bd99-3dfda6b5f3a9",
  },
  {
    id: "screem-at-da-ref",
    image: "/02_screem_at_da_ref.svg",
    title: "SCREEM WERLD CAP AT DA REF",
    category: "Vidio Challenge",
    rewardSol: 0.4,
    status: "live",
    when: "LIVE NOW",
    emoji: "📢",
    description:
      'film urself screemin "WEEERLD CAAAP" at the ref evry time he blow the whisle. min 10 screems. ur neighbours must become worryed. shaky cam mandatory.',
    pumpUrl: "https://pump.fun/go/31ef02f7-6d57-47d9-b974-6fa2d1918bbc",
  },
  {
    id: "ofside-rule-rong",
    image: "/03_ofside_rule_rong.svg",
    title: "DRAW THE OFSIDE RULE (rong)",
    category: "Skill Challenge",
    rewardSol: 0.3,
    status: "live",
    when: "LIVE NOW",
    emoji: "✏️",
    description:
      "get a paper n pen n explane the ofside rule wif a drawin. u are NOT aloud to be correct — the ronger the betta. hold it next 2 a soccr ball n post.",
    pumpUrl: config.links.pfBounty,
  },

  // ───────────────── UPCOMING ─────────────────
  {
    id: "kit-2-serius-place",
    image: "/04_kit_2_serius_place.svg",
    title: "WEAR DA KIT 2 A SERIUS PLACE",
    category: "Fan Content",
    rewardSol: 0.5,
    status: "upcoming",
    when: "UNLOCKS NEXT WEEK",
    unlockAtIso: "2026-06-16T17:00:00Z",
    emoji: "👔",
    description:
      "show up 2 sumwhere fancy (a weddin, a meetin, dinner wif the in-laws) in FULL kit + shin pads + boots. act compleetly normal. documant the faces. (nothin illegal pls.)",
    pumpUrl: config.links.pfBounty,
  },
  {
    id: "gol-selebrashun",
    image: "/05_gol_selebrasion.svg",
    title: "GOL SELEBRASHUN (in publik, alone)",
    category: "Vidio Challenge",
    rewardSol: 0.6,
    status: "upcoming",
    when: "UNLOCKS @ ROUND OF 32",
    unlockAtIso: "2026-06-29T17:00:00Z",
    emoji: "⚽",
    description:
      "score a invisibel goal in a busy place then do a FULL siuuu + knee slide on the floor. no real ball aloud (we dont do crime). film the confused bystandrs.",
    pumpUrl: config.links.pfBounty,
  },
  {
    id: "penalti-vs-fridge",
    image: "/06_penalti_vs_fridge.svg",
    title: "PENALTI SHOOTOUT vs UR FRIDGE",
    category: "Skill Challenge",
    rewardSol: 0.45,
    status: "upcoming",
    when: "UNLOCKS @ QUARTER FINALS",
    unlockAtIso: "2026-07-10T17:00:00Z",
    emoji: "🧦",
    description:
      "tape a goal onto ur fridge n take 5 penaltys wif a rolled-up sock. comentate like its the final 30 secs. if u miss all 5 we reward u MORE (retard rules).",
    pumpUrl: config.links.pfBounty,
  },
];

export const activeBounties = bounties.filter((b) => b.status === "live");
export const upcomingBounties = bounties.filter((b) => b.status === "upcoming");
