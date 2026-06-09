export interface Winner {
  handle: string;
  location: string;
  bounty: string;
  rewardSol: number;
  emoji: string;
}

// Placeholder "Hall of Fame" for social proof. Client swaps for real winners.
export const winners: Winner[] = [
  {
    handle: "@degenmessi",
    location: "🇦🇷 Buenos Aires",
    bounty: "FAMLY FIT CHEK",
    rewardSol: 0.5,
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    handle: "@socr_enjoyer",
    location: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester",
    bounty: "SCREEM AT DA REF",
    rewardSol: 0.4,
    emoji: "📢",
  },
  {
    handle: "@0xpele",
    location: "🇧🇷 São Paulo",
    bounty: "OFSIDE RULE (rong)",
    rewardSol: 0.3,
    emoji: "✏️",
  },
  {
    handle: "@auntie_var",
    location: "🇺🇸 Miami",
    bounty: "PENALTI vs FRIDGE",
    rewardSol: 0.45,
    emoji: "🧦",
  },
];

// Nation flags for the carousel (World Cup vibe — not an official list).
export const nationFlags: { flag: string; name: string }[] = [
  { flag: "🇧🇷", name: "Brazil" },
  { flag: "🇦🇷", name: "Argentina" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇮🇷", name: "Iran" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇲🇽", name: "Mexico" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇵🇹", name: "Portugal" },
  { flag: "🇳🇬", name: "Nigeria" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇰🇷", name: "Korea" },
  { flag: "🇮🇹", name: "Italy" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇺🇾", name: "Uruguay" },
  { flag: "🇨🇴", name: "Colombia" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇲🇦", name: "Morocco" },
  { flag: "🇸🇳", name: "Senegal" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇵🇾", name: "Paraguay" },
  { flag: "🇬🇭", name: "Ghana" },
  { flag: "🇧🇪", name: "Belgium" },
  { flag: "🇭🇷", name: "Croatia" },
];
