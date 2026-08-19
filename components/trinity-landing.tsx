"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Factory,
  HardHat,
  Menu,
  Mountain,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const partners = [
  "McCloskey International",
  "MechTech InfraMine",
  "Capious Roadtech",
  "Saagmo Air Classifier",
  "FG Wilson",
  "Berger",
  "Master Builders Solutions",
  "Trinity Imports / Exports",
];

const solutions = [
  {
    number: "01",
    title: "Crushing & Screening",
    subtitle: "Material processing systems",
    description:
      "Placeholder copy for crushing, screening and aggregate-processing solutions. Replace with the final company description later.",
    icon: Mountain,
    tone: "sand",
  },
  {
    number: "02",
    title: "Mining & Quarrying",
    subtitle: "Equipment for demanding sites",
    description:
      "Placeholder copy for mining, quarrying and material-handling applications across demanding industrial environments.",
    icon: HardHat,
    tone: "blue",
  },
  {
    number: "03",
    title: "Road & Infrastructure",
    subtitle: "Plants, equipment & support",
    description:
      "Placeholder copy for road construction, infrastructure and plant solutions designed around project requirements.",
    icon: Factory,
    tone: "dark",
  },
  {
    number: "04",
    title: "Power & Industrial",
    subtitle: "Reliable power solutions",
    description:
      "Placeholder copy for generator sets, industrial equipment and allied solutions for reliable project operations.",
    icon: ShieldCheck,
    tone: "gold",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function TrinityLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-[#f5f3ee] text-[#111820]">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-[#0b1821]/88 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl md:px-6">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9a62e] text-[#0b1821]">
              <span className="font-black tracking-tighter">TE</span>
            </div>
            <div className="hidden leading-none sm:block">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">Trinity</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/55">Enterprises</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <div className="relative">
              <button className="nav-link flex items-center gap-1" onClick={() => setProductsOpen((v) => !v)}>
                Products & Services <ChevronDown size={15} className={productsOpen ? "rotate-180 transition" : "transition"} />
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-10 w-72 rounded-2xl border border-white/10 bg-[#10222d] p-2 shadow-2xl"
                  >
                    {partners.map((partner) => (
                      <a key={partner} href="#solutions" onClick={() => setProductsOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/8 hover:text-white">
                        {partner}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111820] transition hover:-translate-y-0.5 hover:bg-[#d9a62e] md:block">
            Get in touch <ArrowRight className="ml-2 inline" size={15} />
          </a>

          <button aria-label="Toggle navigation" className="rounded-full p-2 text-white md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mx-4 mt-2 rounded-3xl border border-white/10 bg-[#0b1821]/96 p-3 shadow-2xl backdrop-blur-xl md:hidden">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Products & Services", "#solutions"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={closeMenu} className="block rounded-2xl px-4 py-4 text-white/80 hover:bg-white/8 hover:text-white">{label}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="relative min-h-screen bg-[#081720] text-white">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:70px_70px]" />
        <div className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-[#d9a62e]/15 blur-[100px]" />
        <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#1f79a8]/30 blur-[100px]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-20 pt-32 md:grid-cols-[1.05fr_.95fr] md:px-10 md:pt-28">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/65">
              <Sparkles size={13} className="text-[#d9a62e]" /> Industrial solutions since 1976
            </motion.div>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
              Engineering the <span className="text-[#d9a62e]">machines</span> behind industry.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-xl text-base leading-7 text-white/60 md:text-lg">
              Placeholder positioning copy for Trinity Enterprises — connecting construction, mining and infrastructure projects with dependable equipment and industrial solutions.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#solutions" className="group rounded-full bg-[#d9a62e] px-6 py-4 text-center text-sm font-bold text-[#0b1821] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d9a62e]/15">
                Explore solutions <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={17} />
              </a>
              <a href="#about" className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-semibold text-white/80 transition hover:bg-white/8">Discover Trinity</a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-white/40">
              <span>Construction</span><span>Mining</span><span>Infrastructure</span><span>Industrial</span>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, .36, 1] }} className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#183544] via-[#0c1d27] to-[#071219] shadow-2xl shadow-black/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(217,166,46,.24),transparent_30%),linear-gradient(145deg,transparent,rgba(31,121,168,.12))]" />
              <div className="absolute left-6 top-6 z-10 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[.22em] text-white/60 backdrop-blur">Featured machinery · placeholder</div>
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#071219] to-transparent" />
              <div className="machinery-illustration">
                <div className="machine-body" />
                <div className="machine-cabin" />
                <div className="machine-arm" />
                <div className="machine-bucket" />
                <div className="machine-wheel wheel-one" />
                <div className="machine-wheel wheel-two" />
              </div>
              <div className="absolute bottom-7 left-7 right-7 z-10 flex items-end justify-between">
                <div>
                  <p className="text-2xl font-semibold tracking-tight">Built for demanding sites.</p>
                  <p className="mt-1 text-sm text-white/50">Replace with final hero photography later.</p>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 sm:flex"><ArrowDown size={18} /></div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-[#102833] p-4 shadow-2xl sm:block">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/40">Placeholder stat</p>
              <p className="mt-1 text-2xl font-semibold text-white">50+ years</p>
              <p className="text-xs text-white/45">industry experience</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[.25em] text-white/30 md:flex">
          <span className="h-px w-12 bg-white/20" /> Scroll to explore <span className="h-px w-12 bg-white/20" />
        </div>
      </section>

      <section className="border-y border-[#111820]/10 bg-white py-6">
        <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-hidden px-6">
          <p className="shrink-0 text-[10px] font-bold uppercase tracking-[.22em] text-[#111820]/40">Trusted solutions</p>
          <div className="flex min-w-max animate-marquee gap-10 text-sm font-medium text-[#111820]/55">
            {[...partners, ...partners].map((partner, index) => <span key={`${partner}-${index}`} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#d9a62e]" />{partner}</span>)}
          </div>
        </div>
      </section>

      <section id="solutions" className="relative bg-[#f5f3ee] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={fadeUp} className="max-w-3xl">
            <p className="eyebrow">What we do</p>
            <h2 className="section-title mt-4">Solutions built around <span className="text-[#1677a6]">real-world industry.</span></h2>
            <p className="section-copy mt-6">A new visual system for the company&apos;s core offerings. The content is intentionally placeholder-driven so we can replace it with verified company information later without rebuilding the design.</p>
          </motion.div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-[#111820]/10 bg-[#111820]/10 md:grid-cols-2">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.number} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .08 }} className={`group relative min-h-[370px] overflow-hidden p-7 md:p-10 ${item.tone === "dark" ? "bg-[#10222d] text-white" : "bg-white"}`}>
                  <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition duration-700 group-hover:scale-125 ${item.tone === "gold" ? "bg-[#d9a62e]/20" : "bg-[#1677a6]/10"}`} />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.tone === "dark" ? "bg-white/10" : "bg-[#edf4f7]"}`}><Icon size={22} /></div>
                      <span className={`font-mono text-xs ${item.tone === "dark" ? "text-white/30" : "text-black/25"}`}>{item.number}</span>
                    </div>
                    <div className="mt-auto">
                      <p className={`text-xs uppercase tracking-[.18em] ${item.tone === "dark" ? "text-[#d9a62e]" : "text-[#1677a6]"}`}>{item.subtitle}</p>
                      <h3 className="mt-2 text-3xl font-semibold tracking-tight">{item.title}</h3>
                      <p className={`mt-4 max-w-lg text-sm leading-6 ${item.tone === "dark" ? "text-white/55" : "text-black/50"}`}>{item.description}</p>
                      <button className={`mt-7 text-sm font-bold ${item.tone === "dark" ? "text-white" : "text-[#111820]"}`}>View solution <ChevronRight className="ml-1 inline transition group-hover:translate-x-1" size={16} /></button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-[#0b1821] px-6 py-24 text-white md:py-32">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(217,166,46,.12),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="eyebrow text-[#d9a62e]">About Trinity</p>
            <h2 className="section-title mt-4 text-white">A stronger digital face for an <span className="text-[#d9a62e]">engineering-led business.</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <p className="text-xl leading-8 text-white/70">Placeholder company story goes here. We&apos;ll replace this section with the actual Trinity Enterprises history, capabilities and market positioning once Dad provides the final content.</p>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              {[['50+', 'Years*'], ['08', 'Solution areas*'], ['24/7', 'Project support*'], ['01', 'Unified partner*']].map(([value, label]) => (
                <div key={label}><p className="text-3xl font-semibold text-white">{value}</p><p className="mt-1 text-xs uppercase tracking-[.16em] text-white/35">{label}</p></div>
              ))}
            </div>
            <p className="mt-5 text-[10px] uppercase tracking-[.18em] text-white/25">*Placeholder values — replace before launch.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[.75fr_1.25fr] md:items-end">
          <div><p className="eyebrow">Why Trinity</p><h2 className="section-title mt-4">Built on <span className="text-[#1677a6]">trust, capability and support.</span></h2></div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[['01', 'Industry knowledge', 'Placeholder proof point for domain expertise and practical project understanding.'], ['02', 'Quality equipment', 'Placeholder proof point for reliable machinery and technology partners.'], ['03', 'Project support', 'Placeholder proof point for responsive after-sales and technical support.'], ['04', 'Long-term relationships', 'Placeholder proof point for customer and manufacturer relationships.']].map(([n, title, copy]) => (
              <motion.div key={n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-t border-black/10 pt-5">
                <span className="font-mono text-xs text-[#1677a6]">{n}</span><h3 className="mt-3 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-black/50">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-[#d9a62e] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[.9fr_1.1fr] md:items-start">
          <div>
            <p className="eyebrow text-[#0b1821]/60">Get in touch</p>
            <h2 className="mt-4 max-w-xl text-5xl font-semibold tracking-[-.04em] text-[#0b1821] md:text-6xl">Have a project in mind?</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#0b1821]/65">Tell us what you&apos;re working on. We&apos;ll use this form for the final Gmail enquiry workflow once the site is ready for production.</p>
            <div className="mt-10 space-y-4 text-sm text-[#0b1821]/70">
              <p><strong className="text-[#0b1821]">Email</strong><br />placeholder@trinityentp.com</p>
              <p><strong className="text-[#0b1821]">Phone</strong><br />+91 00000 00000</p>
              <p><strong className="text-[#0b1821]">Location</strong><br />Pune, Maharashtra, India</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-[#0b1821] p-6 text-white shadow-2xl shadow-[#0b1821]/15 md:p-8">
            {submitted ? (
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d9a62e] text-[#0b1821]"><Check /></div>
                <h3 className="mt-6 text-2xl font-semibold">Enquiry captured.</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/50">This is the development placeholder. Next we&apos;ll connect this form to Gmail through the Cloudflare backend.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-full border border-white/15 px-5 py-3 text-sm">Send another</button>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field label="Company" name="company" placeholder="Company name" />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                  <Field label="Phone" name="phone" placeholder="+91" />
                </div>
                <div className="mt-5">
                  <label className="field-label">Message</label>
                  <textarea name="message" rows={6} required placeholder="Tell us briefly about your requirement..." className="field-input resize-none" />
                </div>
                <button className="mt-6 w-full rounded-full bg-[#d9a62e] px-6 py-4 text-sm font-bold text-[#0b1821] transition hover:-translate-y-0.5 hover:bg-white">
                  Send enquiry <Send className="ml-2 inline" size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-[#08131a] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div><p className="text-xl font-bold tracking-tight">TRINITY ENTERPRISES</p><p className="mt-2 max-w-md text-sm leading-6 text-white/35">Industrial machinery, construction, mining and infrastructure solutions. Final company content to be added.</p></div>
          <div className="text-left text-xs text-white/30 md:text-right"><p>© {new Date().getFullYear()} Trinity Enterprises</p><p className="mt-1">Website rebuild · Development version</p></div>
        </div>
      </footer>
    </main>
  );
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder: string; type?: string }) {
  return <div><label className="field-label">{label}</label><input name={name} type={type} required className="field-input" placeholder={placeholder} /></div>;
}
