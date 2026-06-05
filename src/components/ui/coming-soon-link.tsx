"use client";

import { useState, type ReactNode } from "react";
import { Construction, X } from "lucide-react";

type ComingSoonLinkProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function ComingSoonLink({
  children,
  className = "",
  onClick,
}: ComingSoonLinkProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setOpen(true);
          onClick?.();
        }}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl md:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f6dd] text-[#67b748]">
              <Construction className="h-6 w-6" />
            </div>

            <h3
              id="coming-soon-title"
              className="text-xl font-bold text-[#1a1a1a] md:text-2xl"
            >
              Website Under Development
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              This page is coming soon. We&apos;re building a better experience
              for you — please check back shortly.
            </p>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-full bg-[#67b748] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5da63e]"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
