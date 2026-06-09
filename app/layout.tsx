import type { Metadata } from "next";
import "./globals.css";

// TODO(client): set this to the final production domain so the social-share
// (Open Graph / Twitter) image and links resolve in unfurls. Until it's set,
// previews point at this placeholder host.
const SITE_URL = "https://werldcap.site";

const TITLE = "Werld Cap $WerldCap — get pad 2 wach soccr";
const DESCRIPTION =
  "The retard werld cup. Real bountys, real SOL, paid out on Pump.fun GO. Do dumb stuff, get paid.";

// OG/Twitter card image is generated at app/opengraph-image.tsx (and reused for
// Twitter via app/twitter-image.tsx) — Next wires the images in automatically.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "WERLD CAP",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  // favicon/app icons come from the app/icon.png + app/apple-icon.png file
  // convention (Next adds a cache-busting hash so the new icon shows up).
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts via link = no build-time fetch, graceful fallback. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Anton + Comic Neue = the loaded fallbacks for the locked deepfried
            theme (font-impact / font-comic). Inter + Permanent Marker are only
            for the /preview cleanjank & mspaint looks. Bungee was unused. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Comic+Neue:wght@400;700&family=Inter:wght@400;600;800&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
