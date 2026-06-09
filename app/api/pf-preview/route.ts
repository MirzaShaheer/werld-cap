import { config } from "@/lib/config";

// ─────────────────────────────────────────────────────────────────────────────
// Serves the live Pump.fun-page screenshot through OUR origin. Two reasons:
//   1) we cache the rendered image here → fast repeat loads (no per-view wait on
//      the screenshot provider);
//   2) any provider API key stays server-side (env var), never in the client.
//
// Provider template + key come from env (preferred for prod) or lib/config.ts.
// Placeholders in the template: {URL} raw page url · {ENCURL} encoded · {KEY} key.
// ─────────────────────────────────────────────────────────────────────────────

export const runtime = "nodejs";

function buildShotUrl(target: string) {
  const tmpl = process.env.SCREENSHOT_TEMPLATE || config.livePreview.shotTemplate;
  const key = process.env.SCREENSHOT_API_KEY || config.livePreview.apiKey || "";
  return tmpl
    .replaceAll("{URL}", target)
    .replaceAll("{ENCURL}", encodeURIComponent(target))
    .replaceAll("{KEY}", key);
}

export async function GET() {
  const target = config.links.pfBounty;
  if (!target || target.includes("PLACEHOLDER")) {
    return new Response("no live url configured", { status: 404 });
  }

  try {
    const upstream = await fetch(buildShotUrl(target), {
      // cache the rendered screenshot ~5 min so repeat visitors don't re-wait
      next: { revalidate: 300 },
    });
    if (!upstream.ok) {
      return new Response("screenshot upstream error", { status: 502 });
    }
    const body = await upstream.arrayBuffer();
    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "image/png",
        // browser/CDN caching: serve fast, refresh in the background
        "Cache-Control": "public, max-age=120, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch {
    return new Response("screenshot fetch failed", { status: 502 });
  }
}
