import type { ThemeTokens } from "./ThemeTokens";
import { config, demoLinkProps, demoDisabledClass } from "@/lib/config";

export default function Hero({ t }: { t: ThemeTokens }) {
  return (
    <header className={`${t.shell} pt-10 sm:pt-16`}>
      {/* top bar */}
      <nav className="mb-12 flex flex-wrap items-center justify-between gap-y-3">
        <span className={`${t.cardTitle} flex items-center gap-2 text-xl`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="h-9 w-auto" /> {config.token.ticker}
        </span>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {/* builder CTA — DMs go to @drektaf on Telegram; hide on mobile to keep BUY visible */}
          <a
            className={`${t.btnGhost} hidden md:inline-block`}
            href="https://t.me/drektaf"
            target="_blank"
            rel="noopener noreferrer"
            title="Get your own memecoin website made — DM @drektaf on Telegram"
          >
            get your memecoin website made
          </a>
          {/* duplicates the hero "SEE DA BOUNTYS" CTA — hide on mobile to keep BUY visible */}
          <a className={`${t.btnGhost} hidden sm:inline-block`} href="#bountys">
            bountys
          </a>
          <a
            className={t.btnGhost}
            href={config.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${config.token.name} on X (Twitter)`}
          >
            X
          </a>
          <a
            className={`${t.btnPrimary} px-3 sm:px-5 ${demoDisabledClass}`}
            href={config.links.buy}
            target="_blank"
            rel="noopener noreferrer"
            {...demoLinkProps}
          >
            BUY {config.token.ticker}
          </a>
        </div>
      </nav>

      {/* hero */}
      <div className="grid items-center gap-8 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <p className={t.sectionKicker}>powerd by pumpfun GO · da retard werld cup</p>
          <h1 className={`${t.heroTitle} mt-3`}>
            WERLD
            <br />
            CAP
          </h1>
          <p className={`${t.heroTagline} mt-5 max-w-md`}>
            get pad 2 wach soccr n do dumb stuf. real bountys, real ◎SOL, paid
            out on pumpfun. no skil requird (preferd even).
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className={t.btnPrimary} href="#bountys">
              SEE DA BOUNTYS ↓
            </a>
            <a
              className={`${t.btnGhost} ${demoDisabledClass}`}
              href={config.links.buy}
              target="_blank"
              rel="noopener noreferrer"
              {...demoLinkProps}
            >
              ape in 2 {config.token.ticker}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Werld Cap trophy mascot"
            className={`${t.heroBall} h-auto w-60 sm:w-80 lg:w-96`}
          />
        </div>
      </div>

      {/* dumb stat strip */}
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["48", "teemz"],
          ["104", "matchs"],
          ["6", "bountys"],
          ["∞", "retardium"],
        ].map(([n, l]) => (
          <div key={l} className={`${t.card} text-center`}>
            <div className={`${t.reward} text-3xl`}>{n}</div>
            <div className={t.cardCategory}>{l}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
