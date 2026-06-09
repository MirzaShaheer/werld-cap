import Site from "@/components/Site";
import { DEFAULT_THEME } from "@/components/ThemeTokens";

// The live site uses whichever direction the client picks (DEFAULT_THEME in
// components/ThemeTokens.ts). Until then it shows the default; compare all
// three at /preview/deepfried, /preview/cleanjank, /preview/mspaint.
export default function Home() {
  return <Site theme={DEFAULT_THEME} />;
}
