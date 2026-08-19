"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
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
  X,
} from "lucide-react";

function CursorFX() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 240, damping: 28, mass: 0.3 });
  const ringY = useSpring(y, { stiffness: 240, damping: 28, mass: 0.3 });
  const glowX = useSpring(x, { stiffness: 55, damping: 18, mass: 0.8 });
  const glowY = useSpring(y, { stiffness: 55, damping: 18, mass: 0.8 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`,
      );
    };

    const overInteractive = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setActive(
        Boolean(
          target?.closest("a, button, input, textarea, select, [role=button]"),
        ),
      );
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", overInteractive, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", overInteractive);
    };
  }, [x, y]);

  return (
    <>
      {/* Native browser cursor remains fully visible and changes naturally to the hand/I-beam/etc. */}
      <motion.div
        aria-hidden
        className="cursor-aura pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        style={{ x: ringX, y: ringY, scale: active ? 1.42 : 1 }}
      />
      <motion.div
        aria-hidden
        className="cursor-aura-core pointer-events-none fixed left-0 top-0 z-[99] hidden -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        style={{ x: ringX, y: ringY, scale: active ? 1.65 : 1 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[0] hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1677a6]/10 blur-3xl md:block"
        style={{ x: glowX, y: glowY }}
      />
    </>
  );
}

const partners = [
  "Metso",
  "McCloskey International",
  "MechTech Inframine",
  "Berger Paints",
  "IKA Chemicals",
  "Caterpillar",
  "SAAGMO Technologies",
];

const solutions = [
  {
    number: "01",
    title: "Crushers",
    subtitle: "Mobile & stationary crushing",
    description:
      "Placeholder product copy for mobile and stationary crushing equipment. Final machine ranges and specifications will be added before launch.",
    icon: Mountain,
    tone: "sand",
  },
  {
    number: "02",
    title: "Sand Washing",
    subtitle: "Washing & classification systems",
    description:
      "Placeholder copy for sand washing plants and engineered material-processing systems serving quarry and aggregate operations.",
    icon: HardHat,
    tone: "blue",
  },
  {
    number: "03",
    title: "Road & Asphalt Equipment",
    subtitle: "Plants, sprayers & infrastructure",
    description:
      "Placeholder copy for wet mix and hot mix plants, bitumen sprayers and allied road-construction equipment.",
    icon: Factory,
    tone: "dark",
  },
  {
    number: "04",
    title: "Industrial Solutions",
    subtitle: "Chemicals, gensets & classifiers",
    description:
      "Placeholder copy for construction chemicals, generator sets, sand air classifiers and complementary industrial solutions.",
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
    <>
      <CursorFX />
      <main className="relative overflow-hidden bg-[#f5f3ee] text-[#111820]">
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-[#0b1821]/88 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl md:px-6">
            <a
              href="#home"
              className="group flex items-center gap-3"
              onClick={closeMenu}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9a62e] text-[#0b1821]">
                <span className="font-black tracking-tighter">TE</span>
              </div>
              <div className="hidden leading-none sm:block">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                  Trinity
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/55">
                  Enterprises
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              <a className="nav-link" href="#home">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <div className="relative">
                <button
                  className="nav-link flex items-center gap-1"
                  onClick={() => setProductsOpen((v) => !v)}
                >
                  Products & Services{" "}
                  <ChevronDown
                    size={15}
                    className={
                      productsOpen ? "rotate-180 transition" : "transition"
                    }
                  />
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
                        <a
                          key={partner}
                          href="#solutions"
                          onClick={() => setProductsOpen(false)}
                          className="block rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/8 hover:text-white"
                        >
                          {partner}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </nav>

            <a
              href="#contact"
              className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111820] transition hover:-translate-y-0.5 hover:bg-[#d9a62e] md:block"
            >
              Get in touch <ArrowRight className="ml-2 inline" size={15} />
            </a>

            <button
              aria-label="Toggle navigation"
              className="rounded-full p-2 text-white md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mx-4 mt-2 rounded-3xl border border-white/10 bg-[#0b1821]/96 p-3 shadow-2xl backdrop-blur-xl md:hidden"
              >
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Products & Services", "#solutions"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    className="block rounded-2xl px-4 py-4 text-white/80 hover:bg-white/8 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <section
          id="home"
          className="relative min-h-screen bg-[#081720] text-white"
        >
          <div className="hero-grid absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:70px_70px]" />
          <div className="hero-cursor-glow pointer-events-none absolute inset-0" />
          <div className="hero-scanline pointer-events-none absolute inset-x-0 top-0 h-px" />
          <div className="hero-orbit hero-orbit-one pointer-events-none absolute left-[52%] top-[18%] hidden h-[30rem] w-[30rem] rounded-full border border-white/5 md:block" />
          <div className="hero-orbit hero-orbit-two pointer-events-none absolute left-[56%] top-[25%] hidden h-[22rem] w-[22rem] rounded-full border border-[#d9a62e]/10 md:block" />
          <div className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-[#d9a62e]/15 blur-[100px] hero-ambient-gold" />
          <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#1f79a8]/30 blur-[100px] hero-ambient-blue" />
          <div className="pointer-events-none absolute left-[10%] top-[34%] hidden h-1 w-1 rounded-full bg-[#f4c64e] shadow-[0_0_20px_6px_rgba(244,198,78,.45)] md:block animate-pulse" />
          <div className="pointer-events-none absolute left-[72%] top-[16%] hidden h-1 w-1 rounded-full bg-[#69c8ee] shadow-[0_0_20px_6px_rgba(105,200,238,.35)] md:block animate-pulse" />

          <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-20 pt-32 md:grid-cols-[1.05fr_.95fr] md:px-10 md:pt-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div
                variants={fadeUp}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/65"
              >
                Authorised dealer · Construction & mining equipment
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.6rem]"
              >
                Engineering the <span className="text-[#d9a62e]">machines</span>{" "}
                behind industry.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-base leading-7 text-white/60 md:text-lg"
              >
                Trinity Enterprises is an Authorised Dealer in Construction &
                Mining Equipment, representing mobile and stationary crushers,
                sand washing plants, road equipment, construction chemicals,
                gensets and sand air classifiers.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#solutions"
                  className="group rounded-full bg-[#d9a62e] px-6 py-4 text-center text-sm font-bold text-[#0b1821] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d9a62e]/15"
                >
                  Explore solutions{" "}
                  <ArrowRight
                    className="ml-2 inline transition group-hover:translate-x-1"
                    size={17}
                  />
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-semibold text-white/80 transition hover:bg-white/8"
                >
                  Discover Trinity
                </a>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-white/40"
              >
                <span>Construction</span>
                <span>Mining</span>
                <span>Infrastructure</span>
                <span>Industrial</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#183544] via-[#0c1d27] to-[#071219] shadow-2xl shadow-black/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(217,166,46,.24),transparent_30%),linear-gradient(145deg,transparent,rgba(31,121,168,.12))]" />
                <div className="absolute left-6 top-6 z-10 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[.22em] text-white/60 backdrop-blur">
                  Featured machinery · placeholder
                </div>
                <div className="absolute inset-0 hero-card-grid opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#071219] to-transparent" />
                <div className="absolute right-6 top-20 z-10 hidden rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-[9px] uppercase tracking-[.18em] text-white/40 backdrop-blur sm:block">
                  Live system / visual placeholder
                </div>
                <div className="machinery-illustration">
                  <div className="machine-body" />
                  <div className="machine-cabin" />
                  <div className="machine-arm" />
                  <div className="machine-bucket" />
                  <div className="machine-wheel wheel-one" />
                  <div className="machine-wheel wheel-two" />
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                  className="absolute right-8 top-1/2 z-10 hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[9px] uppercase tracking-widest text-white/40 backdrop-blur sm:flex"
                >
                  TE
                </motion.div>
                <div className="absolute bottom-7 left-7 right-7 z-10 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-semibold tracking-tight">
                      Built for demanding sites.
                    </p>
                    <p className="mt-1 text-sm text-white/50">
                      Hero machinery photography · placeholder
                    </p>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 sm:flex">
                    <ArrowDown size={18} />
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-[#102833] p-4 shadow-2xl sm:block"
              >
                <p className="text-[10px] uppercase tracking-[.2em] text-white/40">
                  Portfolio
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">07</p>
                <p className="text-xs text-white/45">partner brands</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[.25em] text-white/30 md:flex">
            <span className="h-px w-12 bg-white/20" /> Scroll to explore{" "}
            <span className="h-px w-12 bg-white/20" />
          </div>
        </section>

        <section className="border-y border-[#111820]/10 bg-white py-6">
          <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-hidden px-6">
            <p className="shrink-0 text-[10px] font-bold uppercase tracking-[.22em] text-[#111820]/40">
              Trusted solutions
            </p>
            <div className="flex min-w-max animate-marquee gap-10 text-sm font-medium text-[#111820]/55">
              {[...partners, ...partners].map((partner, index) => (
                <span
                  key={`${partner}-${index}`}
                  className="flex items-center gap-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d9a62e]" />
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="section-cursor-field relative bg-[#f5f3ee] px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="max-w-3xl"
            >
              <p className="eyebrow">What we do</p>
              <h2 className="section-title mt-4">
                Solutions built around{" "}
                <span className="text-[#1677a6]">real-world industry.</span>
              </h2>
              <p className="section-copy mt-6">
                A new visual system for the company&apos;s core offerings. The
                content is intentionally placeholder-driven so we can replace it
                with verified company information later without rebuilding the
                design.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-[#111820]/10 bg-[#111820]/10 md:grid-cols-2">
              {solutions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: index * 0.08 }}
                    className={`group relative min-h-[370px] overflow-hidden p-7 md:p-10 ${item.tone === "dark" ? "bg-[#10222d] text-white" : "bg-white"}`}
                  >
                    <div
                      className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition duration-700 group-hover:scale-125 ${item.tone === "gold" ? "bg-[#d9a62e]/20" : "bg-[#1677a6]/10"}`}
                    />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.tone === "dark" ? "bg-white/10" : "bg-[#edf4f7]"}`}
                        >
                          <Icon size={22} />
                        </div>
                        <span
                          className={`font-mono text-xs ${item.tone === "dark" ? "text-white/30" : "text-black/25"}`}
                        >
                          {item.number}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <p
                          className={`text-xs uppercase tracking-[.18em] ${item.tone === "dark" ? "text-[#d9a62e]" : "text-[#1677a6]"}`}
                        >
                          {item.subtitle}
                        </p>
                        <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                          {item.title}
                        </h3>
                        <p
                          className={`mt-4 max-w-lg text-sm leading-6 ${item.tone === "dark" ? "text-white/55" : "text-black/50"}`}
                        >
                          {item.description}
                        </p>
                        <button
                          className={`mt-7 text-sm font-bold ${item.tone === "dark" ? "text-white" : "text-[#111820]"}`}
                        >
                          View solution{" "}
                          <ChevronRight
                            className="ml-1 inline transition group-hover:translate-x-1"
                            size={16}
                          />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="section-cursor-field relative bg-[#0b1821] px-6 py-24 text-white md:py-32"
        >
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(217,166,46,.12),transparent_55%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow text-[#d9a62e]">About Trinity</p>
              <h2 className="section-title mt-4 text-white">
                Construction & mining equipment,{" "}
                <span className="text-[#d9a62e]">
                  backed by industry partners.
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <p className="text-xl leading-8 text-white/75">
                Trinity Enterprises is an Authorised Dealer in Construction &
                Mining Equipment, representing a diverse portfolio of mobile and
                stationary crushers, sand washing plants, wet mix and hot mix
                plants, bitumen sprayers, construction chemicals, gensets, and
                sand air classifiers.
              </p>
              <p className="mt-6 text-base leading-7 text-white/45">
                The portfolio includes Metso, McCloskey, MechTech Inframine,
                Berger Paints, IKA Chemicals, Caterpillar and SAAGMO
                Technologies.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
                {[
                  ["07", "Partner brands"],
                  ["07", "Core categories"],
                  ["02", "Market focus"],
                  ["01", "Pune base"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-3xl font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[.16em] text-white/35">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[10px] uppercase tracking-[.18em] text-white/25">
                Additional company history, experience and verified figures will
                be added here before launch.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-cursor-field bg-white px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[.75fr_1.25fr] md:items-end">
            <div>
              <p className="eyebrow">Why Trinity</p>
              <h2 className="section-title mt-4">
                Built on{" "}
                <span className="text-[#1677a6]">
                  trust, capability and support.
                </span>
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Industry knowledge",
                  "Placeholder proof point for domain expertise and practical project understanding.",
                ],
                [
                  "02",
                  "Quality equipment",
                  "Placeholder proof point for reliable machinery and technology partners.",
                ],
                [
                  "03",
                  "Project support",
                  "Placeholder proof point for responsive after-sales and technical support.",
                ],
                [
                  "04",
                  "Long-term relationships",
                  "Placeholder proof point for customer and manufacturer relationships.",
                ],
              ].map(([n, title, copy]) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-t border-black/10 pt-5"
                >
                  <span className="font-mono text-xs text-[#1677a6]">{n}</span>
                  <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/50">{copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section-cursor-field relative bg-[#d9a62e] px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 md:grid-cols-[.8fr_1.2fr] md:items-start">
              <div>
                <p className="eyebrow text-[#0b1821]/60">Get in touch</p>
                <h2 className="mt-4 max-w-xl text-5xl font-semibold tracking-[-.04em] text-[#0b1821] md:text-6xl">
                  Have a project in mind?
                </h2>
                <p className="mt-6 max-w-md text-base leading-7 text-[#0b1821]/65">
                  Tell us what you&apos;re working on. The enquiry workflow is
                  currently a development placeholder and will be connected to
                  the final company inbox before launch.
                </p>
                <div className="mt-10 space-y-5 text-sm text-[#0b1821]/70">
                  <p>
                    <strong className="text-[#0b1821]">Email</strong>
                    <br />
                    trinity1entp@gmail.com
                  </p>
                  <p>
                    <strong className="text-[#0b1821]">Phone</strong>
                    <br />
                    <a href="tel:+919881153232" className="hover:underline">
                      +91 9881153232
                    </a>{" "}
                    /{" "}
                    <a href="tel:+919552666833" className="hover:underline">
                      +91 9552666833
                    </a>
                  </p>
                  <p>
                    <strong className="text-[#0b1821]">Office</strong>
                    <br />
                    5-A, 5th Floor, Siddhi Tower, above ICICI Bank,
                    <br />
                    NIBM Kondhwa Road, Pune-411048, Maharashtra, India.
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=5-A%2C%205th%20Floor%2C%20Siddhi%20Tower%2C%20NIBM%20Kondhwa%20Road%2C%20Pune%20411048"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0b1821] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0b1821]"
                >
                  Open office in Maps <ArrowRight size={15} />
                </a>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] bg-[#0b1821] p-6 text-white shadow-2xl shadow-[#0b1821]/15 md:p-8"
              >
                {submitted ? (
                  <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d9a62e] text-[#0b1821]">
                      <Check />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">
                      Enquiry captured.
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/50">
                      This is the development placeholder. Next we&apos;ll
                      connect this form to Gmail through the Cloudflare backend.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-full border border-white/15 px-5 py-3 text-sm"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-7 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d9a62e]">
                          Enquiry form
                        </p>
                        <p className="mt-2 text-sm text-white/45">
                          Placeholder workflow · Gmail connection later
                        </p>
                      </div>
                      <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:flex">
                        <Send size={15} className="text-[#d9a62e]" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name" name="name" placeholder="Your name" />
                      <Field
                        label="Company"
                        name="company"
                        placeholder="Company name"
                      />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                      />
                      <Field label="Phone" name="phone" placeholder="+91" />
                    </div>
                    <div className="mt-5">
                      <label className="field-label">Message</label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell us briefly about your requirement..."
                        className="field-input resize-none"
                      />
                    </div>
                    <button className="mt-6 w-full rounded-full bg-[#d9a62e] px-6 py-4 text-sm font-bold text-[#0b1821] transition hover:-translate-y-0.5 hover:bg-white">
                      Send enquiry <Send className="ml-2 inline" size={16} />
                    </button>
                  </>
                )}
              </form>
            </div>

            <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#0b1821]/15 bg-[#0b1821] p-2 shadow-2xl shadow-[#0b1821]/15">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#172630]">
                <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-[#0b1821]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/70 backdrop-blur">
                  Trinity Enterprises · Pune office
                </div>
                <iframe
                  title="Trinity Enterprises office location"
                  className="h-[360px] w-full border-0 grayscale-[.35] opacity-90 md:h-[430px]"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=73.883%2C18.472%2C73.900%2C18.486&layer=mapnik&marker=18.479459%2C73.891033"
                />
                <div className="flex flex-col gap-3 border-t border-white/10 bg-[#0b1821] px-5 py-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
                  <span>
                    5-A, 5th Floor, Siddhi Tower · NIBM Kondhwa Road · Pune
                    411048
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=5-A%2C%205th%20Floor%2C%20Siddhi%20Tower%2C%20NIBM%20Kondhwa%20Road%2C%20Pune%20411048"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#d9a62e] hover:text-white"
                  >
                    Get GPS directions <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#3b3a3a] px-6 py-12 text-white">
          <div className="mx-auto max-w-7xl text-center">
            <div className="mx-auto max-w-4xl text-sm leading-7 text-white/80">
              <p className="text-base font-semibold text-white">
                trinity1entp@gmail.com
              </p>
              <p>+91 9881153232 / +91 9552666833</p>
              <p className="mt-1">
                5-A, 5th Floor, Siddhi Tower, above ICICI Bank, NIBM Kondhwa
                Road. Pune-411048 Maharashtra India.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-5xl border-t border-white/10 pt-8 text-xs leading-6 text-white/65">
              <p>
                The names Metso, Sandvik, Terex, Cat, Caterpillar, John Deere,
                Komatsu, Volvo, Hitachi, Doosan, JCB, Hyundai or any other
                original equipment manufacturers are registered trademarks of
                the respective original equipment manufacturers. All names,
                descriptions, numbers and symbols are used for reference
                purposes only.
              </p>
              <p className="mt-2">
                trinityentp.com is in no way associated with any of the
                manufacturers we have listed. All manufacturer&apos;s names and
                descriptions are for reference only.
              </p>
              <p>
                Cat® and Caterpillar® are registered trademarks of Caterpillar,
                Inc.
              </p>
            </div>
            <p className="mt-10 text-sm text-white/75">
              ©2020 by Trinity Enterprises.
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[.18em] text-white/25">
              Website rebuild · Development version
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <input
        name={name}
        type={type}
        required
        suppressHydrationWarning={true}
        className="field-input"
        placeholder={placeholder}
      />
    </div>
  );
}
