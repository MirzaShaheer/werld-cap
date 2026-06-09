"use client";

import { useEffect, useState } from "react";
import type { ThemeTokens } from "./ThemeTokens";
import { config } from "@/lib/config";

// ─────────────────────────────────────────────────────────────────────────────
// The "window to Pump.fun" — a LIVE view of the real PF page.
//
// PF blocks real <iframe>s (X-Frame-Options/CSP), so we render an
// auto-refreshing SCREENSHOT of the live page (your posted bounties show up
// there). The image is non-interactive; clicking the window opens the real PF
// page in a new tab.
//
// First paint uses the screenshotter's CACHED shot (fast). To stay "live" we
// periodically render a fresh shot — but we PRELOAD it off-screen and only swap
// it in once it's ready, so the window never blanks. A placeholder pfBounty url
// falls back to a styled panel; a real url turns the live view on automatically.
// ─────────────────────────────────────────────────────────────────────────────

// served from our own origin (caches the shot + hides any provider key)
const PREVIEW = "/api/pf-preview";

export default function PumpEmbed({
  t,
  url,
  title,
}: {
  t: ThemeTokens;
  url: string;
  title: string;
}) {
  const isReal = !url.includes("PLACEHOLDER");
  // first paint hits the cached endpoint (no cache-bust)
  const [src, setSrc] = useState(PREVIEW);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!isReal) return;
    const id = setInterval(() => {
      // refresh, but only swap in once the new shot has fully loaded (no blank)
      const next = `${PREVIEW}?v=${Date.now()}`;
      const pre = new window.Image();
      pre.onload = () => setSrc(next);
      pre.src = next;
    }, config.livePreview.refreshMs);
    return () => clearInterval(id);
  }, [isReal]);

  const prettyUrl = url.replace(/^https?:\/\//, "");

  const chrome = (
    <div className={`flex items-center gap-2 px-3 py-2 ${t.chrome}`}>
      <span className="h-3 w-3 rounded-full bg-red-500" />
      <span className="h-3 w-3 rounded-full bg-yellow-400" />
      <span className="h-3 w-3 rounded-full bg-green-500" />
      <span className="ml-3 truncate rounded bg-black/20 px-2 py-0.5 text-xs">
        🔒 {prettyUrl}
      </span>
    </div>
  );

  // No real PF url yet (or the shot failed to load) → styled fallback panel.
  if (!isReal || failed) {
    return (
      <div className="overflow-hidden rounded-xl border-2 border-black/30 bg-white/5 shadow-lg">
        {chrome}
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-12 text-center">
          <div className="text-6xl">🪟⚽</div>
          <p className={t.cardDesc}>
            {isReal
              ? "couldnt load da live view rn (pf bein slow). clik below 2 open da REAL bounty page:"
              : "set ur real pumpfun link in config 2 see a LIVE view of da page here. 4 now, clik below:"}
          </p>
          <a className={t.btnPrimary} href={url} target="_blank" rel="noopener noreferrer">
            OPEN THE REAL BOUNTY ON PUMPFUN ↗
          </a>
        </div>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="open da real bounty page on pumpfun"
      className="group block overflow-hidden rounded-xl border-2 border-black/30 bg-black/40 shadow-lg transition hover:shadow-2xl"
    >
      {chrome}
      <div className="relative min-h-[260px] max-h-[460px] overflow-hidden">
        {/* live screenshot of the PF page — non-interactive */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={title}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`pointer-events-none w-full transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* loading state (shown until the first shot paints) */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent opacity-60" />
            <span className={t.cardDesc}>loadin live view…</span>
          </div>
        )}

        {/* LIVE badge */}
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-red-600/90 px-2 py-1 text-xs font-bold uppercase text-white shadow">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> live
        </div>

        {/* hover hint — pointer-events-none so the whole window stays one click */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className={`${t.btnPrimary} mb-5`}>OPEN ON PUMPFUN ↗</span>
        </div>
      </div>
    </a>
  );
}
