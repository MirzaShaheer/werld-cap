import type { ThemeTokens } from "./ThemeTokens";
import { config, demoLinkProps, demoDisabledClass } from "@/lib/config";

export default function Footer({ t }: { t: ThemeTokens }) {
  return (
    <footer className={`border-t ${t.divider} mt-10`}>
      <div className={`${t.shell} py-10`}>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className={`${t.cardTitle} flex items-center gap-2 text-2xl`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="" className="h-9 w-auto" /> {config.token.name}
            </div>
            <p className={`${t.cardDesc} mt-1 max-w-sm`}>
              not afiliated wif FIFA, pumpfun, or any1 smart. memecoin = 4 fun.
              dyor. nfa. wgmi probly.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a className={t.btnGhost} href={config.links.twitter} target="_blank" rel="noopener noreferrer">
              X / twitr
            </a>
            {config.links.telegram && (
              <a className={t.btnGhost} href={config.links.telegram} target="_blank" rel="noopener noreferrer">
                telegram
              </a>
            )}
            <a
              className={`${t.btnGhost} ${demoDisabledClass}`}
              href={config.links.pfBounty}
              target="_blank"
              rel="noopener noreferrer"
              {...demoLinkProps}
            >
              bountys (pumpfun)
            </a>
            <a
              className={`${t.btnPrimary} ${demoDisabledClass}`}
              href={config.links.buy}
              target="_blank"
              rel="noopener noreferrer"
              {...demoLinkProps}
            >
              BUY {config.token.ticker}
            </a>
          </div>
        </div>

        <div className={`${t.cardCategory} mt-8 break-all`}>
          CA: {config.token.contract}
        </div>
      </div>
    </footer>
  );
}
