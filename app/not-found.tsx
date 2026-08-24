import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#081923] px-6 py-16 text-white">
      <div className="mx-auto flex min-h-[75vh] max-w-5xl flex-col justify-center">
        <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-[#55c9a4]">
          404 · Page not found
        </p>
        <h1 className="mt-6 max-w-3xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[.82] tracking-[-.07em]">
          Wrong turn. Let&apos;s get you back to Trinity.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-7 text-white/45">
          The page may have moved, or the product route has not been published
          yet.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#e5ad28] px-6 py-4 text-sm font-bold text-[#081923]"
          >
            Back home <ArrowRight size={16} />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white"
          >
            Browse products <ArrowLeft size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}
