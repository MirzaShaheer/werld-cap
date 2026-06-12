"use client";

import { useEffect, useState } from "react";

const DISMISS_KEY = "builderPopupDismissed";

// Builder CTA shown as a corner popup 5s after the site opens — mirrors the
// header dropdown but also reaches mobile (where that button is hidden).
// Dismissible; stays closed for the rest of the browser session so it doesn't
// nag on internal navigations.
export default function BuilderPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    const id = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(id);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* private mode / storage disabled — fine, just won't persist */
    }
  }

  if (!open) return null;

  return (
    <div className="animate-popup-in fixed bottom-4 right-4 z-[60] w-[calc(100vw-2rem)] max-w-xs">
      <div className="relative rounded-xl border-2 border-black bg-orange-500 p-4 shadow-[4px_4px_0_#000,0_0_24px_rgba(249,115,22,0.85)]">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-white text-base font-bold leading-none text-black transition hover:bg-orange-100"
        >
          ×
        </button>
        <p className="pr-6 text-lg font-extrabold leading-tight text-black">
          get your memecoin website made 🚀
        </p>
        <p className="mt-1 text-sm font-semibold text-black/80">
          built fast, built degen — hit us up:
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <a
            className="rounded-lg border-2 border-black bg-white px-3 py-2 text-center text-sm font-bold text-black shadow-[2px_2px_0_#000] transition hover:bg-orange-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            href="https://t.me/drektaf"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Telegram Contact
          </a>
          <a
            className="rounded-lg border-2 border-black bg-white px-3 py-2 text-center text-sm font-bold text-black shadow-[2px_2px_0_#000] transition hover:bg-orange-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            href="https://seekjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Website Contact
          </a>
        </div>
      </div>
    </div>
  );
}
