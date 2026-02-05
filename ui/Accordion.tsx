"use client";

import { useState } from "react";
import { clsx } from "clsx";

export function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl bg-transparent">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={it.q} className="py-3">
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-4 text-left text-sm font-medium hover:cursor-pointer"
            >
              <span className="text-text">{it.q}</span>
              <span className={clsx("text-muted transition", isOpen && "rotate-180")}>⌄</span>
            </button>
            <div className={clsx("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="pt-2 text-sm text-muted">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
