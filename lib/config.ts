// ─────────────────────────────────────────────────────────────────────────────
// CLIENT CONFIG — this is the ONE file the client edits to go live.
// Swap the PLACEHOLDER_* values for the real token + Pump.fun links.
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  token: {
    name: "Werld Cap",
    ticker: "$WerldCap",
    // Solana contract address (CA) for $WerldCap.
    contract: "CerkwPfJMvLy7fR3XUVEQAtAgpPqsvuL9Fg8VKr5pump",
  },

  links: {
    // Pump.fun coin page for $WerldCap (the "Buy" button target).
    buy: "https://pump.fun/coin/CerkwPfJMvLy7fR3XUVEQAtAgpPqsvuL9Fg8VKr5pump",
    // Pump.fun page the "bounty windo" mirrors + every "Claim on Pumpfun" button.
    pfBounty: "https://pump.fun/coin/CerkwPfJMvLy7fR3XUVEQAtAgpPqsvuL9Fg8VKr5pump",
    twitter: "https://x.com/WerldCapOnPump",
    telegram: "", // optional — leave "" to hide
  },

  // Live "window" to the Pump.fun page. PF blocks real <iframe>s
  // (X-Frame-Options/CSP), so the window shows an auto-refreshing SCREENSHOT of
  // the live PF page — your posted bounties show up there — and clicking it
  // opens the real PF page. Goes live as soon as `links.pfBounty` is a real url.
  livePreview: {
    // The screenshot is served through our own /api/pf-preview route (it caches
    // the image for fast repeat loads and keeps the key server-side). Choose a
    // provider via shotTemplate (+ apiKey), or — recommended for prod so the key
    // isn't committed — set env vars SCREENSHOT_TEMPLATE and SCREENSHOT_API_KEY.
    // Placeholders: {URL} raw page url · {ENCURL} url-encoded · {KEY} apiKey.
    //
    // DEFAULT — thum.io: free, no key, but ~2s and slow on the first render.
    // RECOMMENDED for launch — ScreenshotOne: CDN-fast; cached serves are free
    // and don't count vs the free 100/mo. Sign up (1 min) at
    // https://screenshotone.com, then set apiKey + swap to the ScreenshotOne line.
    apiKey: "", // paste your ScreenshotOne / APIFlash access key (or use env)

    shotTemplate: "https://image.thum.io/get/width/1000/maxAge/12/wait/3/noanimate/{URL}",

    // ScreenshotOne (recommended) — comment the thum.io line, uncomment this:
    // shotTemplate:
    //   "https://api.screenshotone.com/take?access_key={KEY}&url={ENCURL}&viewport_width=1000&format=jpg&image_quality=80&block_ads=true&block_cookie_banners=true&block_chats=true&cache=true&cache_ttl=2592000&wait_until=networkidle2",

    // APIFlash (alternative, free 100/mo) — https://apiflash.com :
    // shotTemplate:
    //   "https://api.apiflash.com/v1/urltoimage?access_key={KEY}&url={ENCURL}&width=1000&format=jpeg&fresh=false&ttl=86400&wait_until=network_idle",

    refreshMs: 120000, // background refresh ~every 2 min
  },
} as const;

// True only when the client has filled in real values (used to show a
// gentle "demo mode" hint in the footer during development).
export const isPlaceholder =
  config.token.contract.startsWith("PLACEHOLDER") ||
  config.links.pfBounty.includes("PLACEHOLDER");

// The Pump.fun CTAs stay FULLY reactive (hover/active/click) at all times.
// While links are still placeholders, we just retarget them to the Pump.fun
// homepage so a click lands somewhere real instead of a 404 — no disabled look.
// Spread `demoLinkProps` onto each external pump.fun <a> AFTER its href so the
// fallback wins in demo mode; once the client fills in real links here,
// isPlaceholder flips false, demoLinkProps becomes null, and every CTA points
// at the real coin/bounty pages. `demoDisabledClass` is kept (empty) so the
// components don't need editing.
export const demoLinkProps = isPlaceholder
  ? { href: "https://pump.fun", title: "demo mode — set the real Pump.fun links in lib/config.ts" }
  : null;

export const demoDisabledClass = "";
