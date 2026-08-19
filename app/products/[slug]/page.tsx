import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Image as ImageIcon, MapPin, Sparkles } from "lucide-react";
import { productOfferingMap, productOfferings } from "@/lib/products";

export function generateStaticParams() {
  return productOfferings.map((item) => ({ slug: item.slug }));
}

const accent = {
  amber: { glow: "bg-[#e5ad28]/14", text: "text-[#b77b06]", soft: "bg-[#fff4d4]", line: "border-[#e5ad28]/25" },
  cyan: { glow: "bg-[#18b7c9]/14", text: "text-[#0f95a5]", soft: "bg-[#ddf7fa]", line: "border-[#18b7c9]/25" },
  blue: { glow: "bg-[#1688c7]/14", text: "text-[#126f9f]", soft: "bg-[#e2f1fa]", line: "border-[#1688c7]/25" },
  coral: { glow: "bg-[#ef765b]/14", text: "text-[#c8543b]", soft: "bg-[#ffede8]", line: "border-[#ef765b]/25" },
  mint: { glow: "bg-[#55c9a4]/14", text: "text-[#238e6c]", soft: "bg-[#e6faf3]", line: "border-[#55c9a4]/25" },
  violet: { glow: "bg-[#7a6ff0]/14", text: "text-[#665bd2]", soft: "bg-[#ece9ff]", line: "border-[#7a6ff0]/25" },
};

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = productOfferingMap[slug];
  if (!item) notFound();
  const theme = accent[item.accent];

  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#111820]">
      <header className="sticky top-0 z-40 border-b border-black/8 bg-[#081923]/95 px-6 py-4 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-6">
          <Link href="/" className="text-sm font-bold uppercase tracking-[.2em]">Trinity Enterprises</Link>
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"><ArrowLeft size={15} /> All products</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#081923] px-6 py-24 text-white md:py-32">
        <div className={`absolute -left-44 -top-20 h-[38rem] w-[38rem] rounded-full ${theme.glow} blur-[120px]`} />
        <div className="absolute right-0 top-0 h-full w-[46%] bg-[radial-gradient(circle_at_60%_50%,rgba(255,255,255,.06),transparent_55%)]" />
        <div className="relative mx-auto max-w-[1380px]">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.22em] text-white/40"><span>{item.number}</span><span>·</span><span>{item.eyebrow}</span></div>
          <h1 className="mt-6 max-w-5xl text-[clamp(3.2rem,7vw,7.2rem)] font-semibold leading-[.88] tracking-[-.06em]">{item.name}</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">{item.summary}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#overview" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#081923] hover:bg-[#e5ad28]">Explore offering <ArrowRight size={16} /></a><a href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-4 text-sm font-semibold text-white/70 hover:bg-white/6">Send an enquiry <ArrowRight size={16} /></a></div>
        </div>
      </section>

      <section id="overview" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(11,24,33,.06)] md:p-10">
              <p className={`text-[9px] font-extrabold uppercase tracking-[.2em] ${theme.text}`}>What it is</p>
              <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight tracking-[-.035em] md:text-4xl">{item.whatItIs}</p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {item.whatItDoes.map((x) => <div key={x} className={`rounded-2xl border ${theme.line} ${theme.soft} p-5`}><CheckCircle2 className={theme.text} size={18} /><p className="mt-3 text-sm font-semibold leading-6">{x}</p></div>)}
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-[#eef1f2] p-7 md:p-10">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[.2em] text-black/35"><ImageIcon size={14} /> Visual placeholder</div>
              <div className="mt-6 flex min-h-[340px] items-center justify-center rounded-[1.6rem] border border-dashed border-black/15 bg-white/70 text-center">
                <div className="max-w-sm px-8"><Sparkles className={`mx-auto ${theme.text}`} size={24} /><p className="mt-4 text-xl font-semibold">Real product imagery goes here.</p><p className="mt-2 text-sm leading-6 text-black/40">High-resolution machinery, product or application photographs will replace this placeholder during the image pass.</p></div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-[#081923] p-7 text-white md:p-10">
              <p className={`text-[9px] font-extrabold uppercase tracking-[.2em] ${theme.text}`}>Typical applications</p>
              <div className="mt-7 space-y-3">{item.applications.map((x, i) => <div key={x} className="flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/70"><span>{x}</span><span className="font-mono text-[10px] text-white/25">0{i + 1}</span></div>)}</div>
            </div>
            <div className="rounded-[2rem] border border-black/10 bg-white p-7 md:p-10">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[.2em] text-black/35"><FileText size={14} /> Technical specifications</div>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-black/45">Specifications are intentionally placeholder fields until verified supplier documents and final Trinity product lists are supplied.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">{item.specs.map((x) => <div key={x} className="rounded-2xl border border-black/8 bg-[#f8f7f3] px-5 py-4 text-sm font-medium text-black/65">{x}</div>)}</div>
            </div>
          </div>

          {item.note && <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-white px-6 py-5 text-sm leading-6 text-black/50"><strong className="text-black/75">Note:</strong> {item.note}</div>}

          <div className="mt-12 flex flex-col gap-4 rounded-[2rem] bg-[#e5ad28] p-7 md:flex-row md:items-center md:justify-between md:p-10">
            <div><p className="text-[9px] font-extrabold uppercase tracking-[.2em] text-[#081923]/55">Ready to discuss a requirement?</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] md:text-4xl">Let&apos;s turn this portfolio page into the real product story.</h2></div>
            <div className="flex flex-col gap-3 sm:flex-row"><a href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#081923] px-6 py-4 text-sm font-bold text-white">Contact Trinity <ArrowRight size={16} /></a><Link href="/products" className="inline-flex items-center justify-center rounded-full border border-[#081923]/20 px-6 py-4 text-sm font-bold text-[#081923]">Browse all products</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
