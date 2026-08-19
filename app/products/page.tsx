import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { productOfferings } from "@/lib/products";

const accentClasses = {
  amber: "bg-[#fff2c9] text-[#a66d00]",
  cyan: "bg-[#ddf7fa] text-[#0e8998]",
  blue: "bg-[#e2f1fa] text-[#126f9f]",
  coral: "bg-[#ffede8] text-[#c8543b]",
  mint: "bg-[#e6faf3] text-[#238e6c]",
  violet: "bg-[#ece9ff] text-[#665bd2]",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#111820]">
      <header className="sticky top-0 z-40 border-b border-black/8 bg-[#081923]/95 px-6 py-4 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-6">
          <Link href="/" className="text-sm font-bold uppercase tracking-[.2em]">Trinity Enterprises</Link>
          <div className="flex items-center gap-4 text-sm text-white/65">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Products & Services</span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#081923] px-6 py-24 text-white md:py-32">
        <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-[#18b7c9]/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#e5ad28]/12 blur-[110px]" />
        <div className="relative mx-auto max-w-[1380px]">
          <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-white/40">Products & Services · Trinity Portfolio</p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3.3rem,7vw,7rem)] font-semibold leading-[.88] tracking-[-.06em]">Solutions, brands and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18b7c9] via-[#1688c7] to-[#e5ad28]">equipment portfolios.</span></h1>
          <p className="mt-8 max-w-3xl text-base leading-7 text-white/55 md:text-lg">Each selection below will become its own detailed product page with verified product information, applications, specifications, brochures and real imagery. For now, technical fields are explicitly marked as placeholders.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-5 md:grid-cols-2">
            {productOfferings.map((item, index) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className={`group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_60px_rgba(11,24,33,.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(11,24,33,.11)] md:p-9 ${index === productOfferings.length - 1 ? "md:col-span-2" : ""}`}
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-black/[.025] blur-2xl transition group-hover:scale-125" />
                <div className="relative flex items-start justify-between gap-6">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${accentClasses[item.accent]}`}>
                    {item.slug === "trinity-imports-exports" ? <Globe2 size={19} /> : <span className="font-mono text-[11px] font-bold">{item.number}</span>}
                  </div>
                  <span className="font-mono text-[10px] text-black/20">{item.number}</span>
                </div>
                <div className="relative mt-16">
                  <p className="text-[9px] font-extrabold uppercase tracking-[.2em] text-black/35">{item.eyebrow}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] md:text-4xl">{item.name}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">{item.summary}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-2 text-sm font-bold">Explore page <ArrowRight size={15} className="transition group-hover:translate-x-1" /></div>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-dashed border-black/15 bg-white/55 p-7 md:p-9">
            <p className="text-[9px] font-extrabold uppercase tracking-[.2em] text-black/35">Development status</p>
            <p className="mt-4 max-w-4xl text-base leading-7 text-black/55">Product images, brochures, exact model numbers and verified technical specifications are intentionally not invented yet. Once you provide the source material, each page can be populated without changing the underlying layout.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
