"use client";

import { useEffect, useState } from "react";

function diff(targetIso: string) {
  const ms = new Date(targetIso).getTime() - Date.now();
  if (ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({
  targetIso,
  className = "",
}: {
  targetIso: string;
  className?: string;
}) {
  // Start null so server + first client render match (avoids hydration mismatch).
  const [t, setT] = useState<ReturnType<typeof diff>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setT(diff(targetIso));
    const id = setInterval(() => setT(diff(targetIso)), 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  if (!mounted) return <span className={className}>· · : · · : · ·</span>;
  if (!t) return <span className={className}>LIVE SOON™</span>;

  return (
    <span className={className} suppressHydrationWarning>
      {t.d > 0 ? `${t.d}d ` : ""}
      {pad(t.h)}h {pad(t.m)}m {pad(t.s)}s
    </span>
  );
}
