import type { Bounty } from "@/lib/bounties";
import type { ThemeTokens } from "./ThemeTokens";
import Countdown from "./Countdown";
import { demoLinkProps, demoDisabledClass } from "@/lib/config";

export default function BountyCard({
  bounty,
  t,
  tilt,
}: {
  bounty: Bounty;
  t: ThemeTokens;
  tilt: "l" | "r" | null;
}) {
  const tiltClass = tilt === "l" ? "tilt-l" : tilt === "r" ? "tilt-r" : "";
  const isLive = bounty.status === "live";

  return (
    <article className={`${t.card} ${tiltClass} flex flex-col`}>
      {/* thumbnail = big emoji tile (no asset dependency) */}
      <div
        aria-hidden="true"
        className={`mb-3 flex h-32 items-center justify-center rounded-xl ${t.thumb} text-6xl ${
          t.friedImg ? "fried" : ""
        }`}
      >
        {bounty.emoji}
      </div>

      <div className="mb-2 flex items-center justify-between gap-2">
        <span className={isLive ? t.badgeLive : t.badgeSoon}>
          {isLive ? "● LIVE" : "◷ SOON"}
        </span>
        <span className={t.reward}>{bounty.rewardSol} ◎</span>
      </div>

      <span className={t.cardCategory}>{bounty.category}</span>
      <h3 className={`${t.cardTitle} mt-1`}>{bounty.title}</h3>
      <p className={`${t.cardDesc} mt-2 flex-1`}>{bounty.description}</p>

      <div className="mt-4 flex items-center justify-between gap-2">
        <span className={`${t.cardCategory} whitespace-nowrap`}>
          {isLive ? (
            bounty.when
          ) : bounty.unlockAtIso ? (
            <>
              ⏳ <Countdown targetIso={bounty.unlockAtIso} />
            </>
          ) : (
            bounty.when
          )}
        </span>
      </div>

      {isLive ? (
        <a
          className={`${t.btnPrimary} ${demoDisabledClass} mt-3 text-center`}
          href={bounty.pumpUrl}
          target="_blank"
          rel="noopener noreferrer"
          {...demoLinkProps}
        >
          CLAME ON PUMPFUN ↗
        </a>
      ) : (
        // Upcoming: visually disabled AND non-navigable (no href) so it can't
        // open the placeholder PF page before the bounty unlocks.
        <span
          className={`${t.btnGhost} pointer-events-none mt-3 text-center opacity-70`}
          aria-disabled="true"
        >
          SOON™ · wach $WERL ↗
        </span>
      )}
    </article>
  );
}
