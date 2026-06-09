import { activeBounties, upcomingBounties } from "@/lib/bounties";
import type { ThemeTokens } from "./ThemeTokens";
import BountyCard from "./BountyCard";
import PumpEmbed from "./PumpEmbed";
import { config } from "@/lib/config";

function tiltFor(t: ThemeTokens, i: number): "l" | "r" | null {
  if (!t.tilt) return null;
  return i % 2 === 0 ? "l" : "r";
}

export default function BountyBoard({ t }: { t: ThemeTokens }) {
  return (
    <section id="bountys" className={`${t.shell} py-16`}>
      {/* ACTIVE */}
      <p className={t.sectionKicker}>go do a stupid · get paid</p>
      <h2 className={`${t.sectionTitle} mt-1`}>ACTIV BOUNTYS</h2>

      <div className="mt-8 grid gap-6 pr-2 sm:grid-cols-2 sm:pr-0 lg:grid-cols-3">
        {activeBounties.map((b, i) => (
          <BountyCard key={b.id} bounty={b} t={t} tilt={tiltFor(t, i)} />
        ))}
      </div>

      {/* the "window to pump.fun" */}
      <div className="mt-12">
        <h3 className={`${t.cardTitle} mb-3`}>🪟 da bounty windo</h3>
        <PumpEmbed t={t} url={config.links.pfBounty} title="Werld Cap bounties on Pump.fun" />
      </div>

      {/* UPCOMING */}
      <p className={`${t.sectionKicker} mt-20`}>cooming soon to a stadium near u</p>
      <h2 className={`${t.sectionTitle} mt-1`}>UPCOMIN BOUNTYS</h2>

      <div className="mt-8 grid gap-6 pr-2 sm:grid-cols-2 sm:pr-0 lg:grid-cols-3">
        {upcomingBounties.map((b, i) => (
          <BountyCard key={b.id} bounty={b} t={t} tilt={tiltFor(t, i)} />
        ))}
      </div>
    </section>
  );
}
