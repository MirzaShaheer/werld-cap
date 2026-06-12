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
          {/* builder CTA — neon-orange sticker (own style, not t.btnGhost) so it
              pops against the lime/fuchsia brand buttons. Opens a CSS-only
              hover/focus menu with Telegram + website. Desktop-only (hover), so
              no client JS needed. Hidden on mobile to keep BUY visible. */}
          <div className="group relative hidden md:block">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border-2 border-black bg-orange-500 px-4 py-2 font-bold text-black shadow-[3px_3px_0_#000,0_0_16px_rgba(249,115,22,0.9)] transition hover:bg-orange-400 hover:shadow-[3px_3px_0_#000,0_0_22px_rgba(249,115,22,1)] group-focus-within:bg-orange-400"
              title="Get your own memecoin website made — Telegram or seekjs.com"
            >
              get your memecoin website made
              <span aria-hidden className="text-sm">▾</span>
            </button>
            {/* pt-2 (not mt-2) keeps a continuous hover bridge to the menu */}
            <div className="invisible absolute right-0 top-full z-50 w-56 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-lg border-2 border-black bg-white shadow-[3px_3px_0_#000]">
                <a
                  className="block px-4 py-2.5 text-sm font-bold text-black hover:bg-orange-100"
                  href="https://t.me/drektaf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Telegram · @drektaf
                </a>
                <a
                  className="block border-t-2 border-black px-4 py-2.5 text-sm font-bold text-black hover:bg-orange-100"
                  href="https://seekjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐 seekjs.com
                </a>
              </div>
            </div>
          </div>
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
