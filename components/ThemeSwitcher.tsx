import { THEMES, type ThemeName } from "./ThemeTokens";

// Floating pill so the client can hop between the three looks while choosing.
// Safe to delete once a direction is picked.
export default function ThemeSwitcher({ current }: { current: ThemeName }) {
  const order: ThemeName[] = ["deepfried", "cleanjank", "mspaint"];
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-black/20 bg-white/90 p-1 text-xs font-semibold text-zinc-800 shadow-lg backdrop-blur">
        <span className="px-2 text-[10px] uppercase tracking-wider text-zinc-500">
          preview:
        </span>
        {order.map((name) => (
          <a
            key={name}
            href={`/preview/${name}`}
            className={`rounded-full px-3 py-1 transition ${
              name === current ? "bg-zinc-900 text-white" : "hover:bg-zinc-200"
            }`}
            title={THEMES[name].blurb}
          >
            {THEMES[name].label}
          </a>
        ))}
      </div>
    </div>
  );
}
