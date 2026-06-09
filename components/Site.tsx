import { THEMES, type ThemeName } from "./ThemeTokens";
import Hero from "./Hero";
import FlagCarousel from "./FlagCarousel";
import HowItWorks from "./HowItWorks";
import BountyBoard from "./BountyBoard";
import WinnersHall from "./WinnersHall";
import Footer from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";
import PitchBackground from "./PitchBackground";

export default function Site({
  theme,
  showThemeSwitcher = false,
}: {
  theme: ThemeName;
  /** Dev-only preview pill. Off on the live "/" page; on for /preview/* pages. */
  showThemeSwitcher?: boolean;
}) {
  const t = THEMES[theme];

  return (
    <main className={`relative ${t.page}`}>
      {t.pitchBg && <PitchBackground />}
      <div className="relative z-10">
        <Hero t={t} />
        <div className="mt-12">
          <FlagCarousel t={t} />
        </div>
        <HowItWorks t={t} />
        <BountyBoard t={t} />
        <WinnersHall t={t} />
        <Footer t={t} />
      </div>
      {showThemeSwitcher && <ThemeSwitcher current={theme} />}
    </main>
  );
}
