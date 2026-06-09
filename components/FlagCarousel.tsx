import { nationFlags } from "@/lib/winners";
import type { ThemeTokens } from "./ThemeTokens";

export default function FlagCarousel({ t }: { t: ThemeTokens }) {
  // duplicate the list so the -50% marquee loops seamlessly
  const row = [...nationFlags, ...nationFlags];

  return (
    <div className={`border-y ${t.divider} overflow-hidden py-4`}>
      <div className="flex w-max animate-marquee gap-8 px-4">
        {row.map((n, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap text-2xl"
            title={n.name}
          >
            <span>{n.flag}</span>
            <span className={`${t.cardCategory} text-sm`}>{n.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
