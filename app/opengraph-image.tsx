import { ImageResponse } from "next/og";

// Edge runtime: next/og's default font loads cleanly here (the Node runtime
// trips on fileURLToPath when resolving the bundled font on Windows builds).
export const runtime = "edge";

// Generated 1200x630 share card for X / Telegram unfurls. Pure CSS shapes +
// text (no emoji / no external fetch) so it always renders. Deepfried palette:
// lime on black, fuchsia + yellow hard shadows.
export const alt = "WERLD CAP — $WERLDCAP · da retard werld cup";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#000000",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "36px",
            color: "#e879f9",
            letterSpacing: "6px",
            fontWeight: 800,
            marginBottom: "28px",
          }}
        >
          POWERD BY PUMPFUN GO
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "180px",
            lineHeight: 1,
            color: "#bef264",
            fontWeight: 900,
            textShadow: "7px 7px 0 #ff2d95, 14px 14px 0 #ffe600",
            transform: "rotate(-2deg)",
          }}
        >
          WERLD CAP
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "56px",
            fontSize: "46px",
            color: "#e879f9",
            fontWeight: 700,
          }}
        >
          $WERLDCAP · real bountys · real SOL
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "14px",
            fontSize: "32px",
            color: "#bef264",
          }}
        >
          get pad 2 wach soccr n do dumb stuf
        </div>
      </div>
    ),
    { ...size }
  );
}
