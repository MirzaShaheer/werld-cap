import type { ThemeTokens } from "./ThemeTokens";

const STEPS: { n: string; title: string; body: string }[] = [
  {
    n: "1",
    title: "FIND A STUPID",
    body: "scrol da bountys. pik one dat looks dum enuf. read da rules (or dont).",
  },
  {
    n: "2",
    title: "DO DA STUPID",
    body: "film it / foto it. proov u actualy did da thing. mor cringe = mor better.",
  },
  {
    n: "3",
    title: "GET DA ◎SOL",
    body: "submit on pumpfun GO. if dey aksept u, da SOL hit ur waLLet. ez.",
  },
];

export default function HowItWorks({ t }: { t: ThemeTokens }) {
  return (
    <section className={`${t.shell} py-16`}>
      <p className={t.sectionKicker}>literaly so ez</p>
      <h2 className={`${t.sectionTitle} mt-1`}>HOW IT WERK</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className={t.card}>
            <div className={`${t.reward} text-5xl`}>{s.n}</div>
            <h3 className={`${t.cardTitle} mt-2`}>{s.title}</h3>
            <p className={`${t.cardDesc} mt-2`}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
