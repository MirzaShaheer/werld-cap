import { winners } from "@/lib/winners";
import type { ThemeTokens } from "./ThemeTokens";

export default function WinnersHall({ t }: { t: ThemeTokens }) {
  return (
    <section className={`${t.shell} py-16`}>
      <p className={t.sectionKicker}>dey did da stupid · dey got pad</p>
      <h2 className={`${t.sectionTitle} mt-1`}>🏆 HALL OF FAEM</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {winners.map((w) => (
          <div key={w.handle} className={`${t.card} text-center`}>
            <div className="text-5xl">{w.emoji}</div>
            <div className={`${t.cardTitle} mt-2 text-xl`}>{w.handle}</div>
            <div className={t.cardCategory}>{w.location}</div>
            <div className={`${t.cardDesc} mt-1`}>“{w.bounty}”</div>
            <div className={`${t.reward} mt-2 text-2xl`}>+{w.rewardSol} ◎</div>
          </div>
        ))}
      </div>
    </section>
  );
}
