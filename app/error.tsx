"use client";
import { useEffect } from "react";
import Link from "next/link";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => console.error(error), [error]);
  return (
    <main className="min-h-screen bg-[#081923] px-6 py-16 text-white">
      <div className="mx-auto flex min-h-[75vh] max-w-3xl flex-col justify-center">
        <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#ef765b]">
          Something went wrong
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-.05em] md:text-7xl">
          The site hit an unexpected issue.
        </h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => reset()}
            className="rounded-full bg-[#e5ad28] px-6 py-4 text-sm font-bold text-[#081923]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
