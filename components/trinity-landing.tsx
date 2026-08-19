"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Factory,
  Gauge,
  Globe2,
  Layers3,
  MapPin,
  Menu,
  Mountain,
  MoveUpRight,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const partners = [
  "Metso",
  "McCloskey International",
  "MechTech Inframine",
  "Berger Paints",
  "IKA Chemicals",
  "Caterpillar",
  "SAAGMO Technologies",
];

const capabilities = [
  {
    number: "01",
    eyebrow: "MATERIAL PROCESSING",
    title: "Crushing",
    subtitle: "Mobile & stationary systems",
    copy: "Placeholder product copy — final equipment ranges, specifications and applications will be added before launch.",
    icon: Mountain,
    accent: "gold",
  },
  {
    number: "02",
    eyebrow: "WASHING + CLASSIFICATION",
    title: "Sand Washing",
    subtitle: "Process equipment for aggregates",
    copy: "Placeholder product copy — final plant configurations and supported applications will be added before launch.",
    icon: Layers3,
    accent: "blue",
  },
  {
    number: "03",
    eyebrow: "ROAD + INFRASTRUCTURE",
    title: "Road Equipment",
    subtitle: "Plants, sprayers & allied equipment",
    copy: "Placeholder product copy — wet mix, hot mix and bitumen equipment details will be added before launch.",
    icon: Factory,
    accent: "dark",
  },
  {
    number: "04",
    eyebrow: "POWER + INDUSTRIAL",
    title: "Industrial Solutions",
    subtitle: "Gensets, chemicals & classifiers",
    copy: "Placeholder product copy — final brands, specifications and solution descriptions will be added before launch.",
    icon: Zap,
    accent: "light",
  },
];

const operatingAreas = [
  ["01", "Construction", "Equipment and solutions supporting demanding construction environments."],
  ["02", "Mining", "Material processing and equipment for quarrying and mining applications."],
  ["03", "Infrastructure", "Road, asphalt and allied equipment for infrastructure projects."],
  ["04", "Industrial", "Power, chemicals, classification and complementary industrial solutions."],
];

const reasons = [
  ["01", "Industry knowledge", "Placeholder proof point for practical domain understanding and project conversations.", Network],
  ["02", "Equipment portfolio", "A diverse portfolio spanning mobile and stationary equipment and allied solutions.", Gauge],
  ["03", "Manufacturer network", "Partner brands across construction, mining, road and industrial applications.", Globe2],
  ["04", "Project support", "Placeholder proof point for technical, commercial and after-sales support.", ShieldCheck],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function CursorFX() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 30, mass: 0.25 });
  const ringY = useSpring(y, { stiffness: 260, damping: 30, mass: 0.25 });
  const glowX = useSpring(x, { stiffness: 48, damping: 20, mass: 0.8 });
  const glowY = useSpring(y, { stiffness: 48, damping: 20, mass: 0.8 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    const overInteractive = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, input, textarea, select, [role=button]")));
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
      <motion.div
        aria-hidden
        className="cursor-aura pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        style={{ x: ringX, y: ringY, scale: active ? 1.45 : 1 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1677a6]/10 blur-3xl md:block"
        style={{ x: glowX, y: glowY }}
      />
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  return <motion.div className="fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left bg-[#d9a62e]" style={{ scaleX }} />;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition ${
        dark ? "bg-[#0b1821] text-white hover:bg-[#1677a6]" : "bg-[#d9a62e] text-[#0b1821] hover:bg-white"
      }`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  );
}

export function TrinityLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeArea, setActiveArea] = useState(0);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.55]);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <ScrollProgress />
      <CursorFX />

      <main className="relative overflow-hidden bg-[#f5f3ee] text-[#111820]">
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
          <div className="mx-auto flex max-w-[1380px] items-center justify-between rounded-full border border-white/10 bg-[#091720]/90 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl md:px-5 md:py-2.5">
            <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#d9a62e] text-[#0b1821] shadow-[0_0_28px_rgba(217,166,46,.18)]">
                <span className="text-xs font-black tracking-tighter">TE</span>
                <span className="absolute inset-0 rounded-full border border-white/30" />
              </div>
              <div className="hidden leading-none sm:block">
                <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-white">Trinity</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.28em] text-white/45">Enterprises</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <a className="nav-link" href="#home">Home</a>
              <a className="nav-link" href="#solutions">Solutions</a>
              <a className="nav-link" href="#about">About</a>
              <div className="relative">
                <button className="nav-link flex items-center gap-1" onClick={() => setProductsOpen((v) => !v)}>
                  Products & Services
                  <ChevronDown size={14} className={productsOpen ? "rotate-180 transition" : "transition"} />
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      className="absolute right-0 top-11 w-80 rounded-2xl border border-white/10 bg-[#10232e] p-2 shadow-2xl"
                    >
                      {partners.map((partner, index) => (
                        <a key={partner} href="#solutions" onClick={() => setProductsOpen(false)} className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/7 hover:text-white">
                          <span>{partner}</span>
                          <span className="font-mono text-[9px] text-white/20 group-hover:text-[#d9a62e]">0{index + 1}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a className="nav-link" href="#contact">Contact</a>
            </nav>

            <MagneticButton href="#contact" dark>Get in touch</MagneticButton>

            <button aria-label="Toggle navigation" className="rounded-full p-2 text-white md:hidden" onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mx-1 mt-2 rounded-3xl border border-white/10 bg-[#091720]/96 p-3 shadow-2xl backdrop-blur-2xl md:hidden">
                {[
                  ["Home", "#home"],
                  ["Solutions", "#solutions"],
                  ["About", "#about"],
                  ["Products & Services", "#solutions"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a key={label} href={href} onClick={closeMenu} className="block rounded-2xl px-4 py-4 text-sm text-white/75 hover:bg-white/7 hover:text-white">{label}</a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <section id="home" className="relative min-h-[760px] overflow-hidden bg-[#07161f] text-white md:min-h-screen">
          <div className="hero-grid absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:70px_70px]" />
          <div className="hero-cursor-glow pointer-events-none absolute inset-0" />
          <div className="hero-scanline pointer-events-none absolute inset-x-0 top-0 h-px" />
          <div className="hero-orbit hero-orbit-one pointer-events-none absolute left-[54%] top-[15%] hidden h-[34rem] w-[34rem] rounded-full border border-white/5 md:block" />
          <div className="hero-orbit hero-orbit-two pointer-events-none absolute left-[59%] top-[22%] hidden h-[24rem] w-[24rem] rounded-full border border-[#d9a62e]/10 md:block" />
          <div className="hero-ambient-gold absolute -right-48 top-12 h-[38rem] w-[38rem] rounded-full bg-[#d9a62e]/14 blur-[110px]" />
          <div className="hero-ambient-blue absolute -left-48 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[#1677a6]/25 blur-[110px]" />

          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative mx-auto grid min-h-screen max-w-[1380px] items-center gap-14 px-6 pb-20 pt-32 md:grid-cols-[.98fr_1.02fr] md:px-10 md:pt-28">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.085 } } }} className="relative z-10">
              <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d9a62e] shadow-[0_0_12px_#d9a62e]" />
                Authorised dealer · Construction + Mining Equipment
              </motion.div>
              <motion.p variants={fadeUp} className="max-w-4xl text-[clamp(3.5rem,7.3vw,7.4rem)] font-semibold leading-[.84] tracking-[-.065em]">
                Engineering the <span className="text-[#d9a62e]">machines</span> behind industry.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-8 max-w-xl text-base leading-7 text-white/48 md:text-lg">
                Trinity Enterprises represents a diverse portfolio of mobile and stationary crushers, sand washing plants, road equipment, construction chemicals, gensets and sand air classifiers.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <MagneticButton href="#solutions">Explore solutions</MagneticButton>
                <a href="#about" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white/75 transition hover:border-white/35 hover:bg-white/6">
                  Discover Trinity <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-12 grid max-w-xl grid-cols-2 gap-3 text-[9px] uppercase tracking-[0.18em] text-white/35 sm:grid-cols-4">
                {['Construction', 'Mining', 'Infrastructure', 'Industrial'].map((item) => <span key={item} className="border-l border-white/10 pl-3">{item}</span>)}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: .94, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, .36, 1] }} className="relative mx-auto w-full max-w-[650px]">
              <div className="hero-machine-panel relative aspect-[.92] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0c202b] shadow-2xl shadow-black/40">
                <div className="hero-card-grid absolute inset-0 opacity-60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_38%,rgba(217,166,46,.17),transparent_25%),radial-gradient(circle_at_40%_70%,rgba(22,119,166,.18),transparent_34%)]" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[9px] font-bold uppercase tracking-[.18em] text-white/45 backdrop-blur">
                  <CircleDot size={10} className="text-[#d9a62e]" /> Visual placeholder
                </div>
                <div className="absolute right-5 top-5 font-mono text-[9px] text-white/25">TE / 001</div>

                <div className="absolute inset-[12%] flex items-center justify-center">
                  <div className="machine-ghost-ring absolute h-[72%] w-[72%] rounded-full border border-[#d9a62e]/10" />
                  <div className="machine-ghost-ring-two absolute h-[55%] w-[55%] rounded-full border border-white/8" />
                  <div className="machinery-illustration">
                    <div className="machine-arm" />
                    <div className="machine-bucket" />
                    <div className="machine-body" />
                    <div className="machine-cabin" />
                    <div className="machine-wheel wheel-one" />
                    <div className="machine-wheel wheel-two" />
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-[1fr_auto]">
                  <div className="rounded-2xl border border-white/10 bg-[#07161f]/75 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-[.18em] text-white/35">Machinery showcase</span>
                      <Sparkles size={14} className="text-[#d9a62e]" />
                    </div>
                    <p className="mt-2 text-xl font-semibold tracking-tight">Real imagery goes here.</p>
                    <p className="mt-1 text-xs text-white/38">High-resolution company machinery photography will replace this placeholder.</p>
                  </div>
                  <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl sm:block">
                    <p className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Portfolio</p>
                    <p className="mt-2 text-2xl font-semibold text-[#d9a62e]">07</p>
                    <p className="text-[9px] uppercase tracking-[.14em] text-white/30">named partners</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[.28em] text-white/25 md:flex"><span className="h-px w-10 bg-white/15" /> Scroll to explore <span className="h-px w-10 bg-white/15" /></div>
        </section>

        <section className="relative overflow-hidden border-y border-black/5 bg-white py-5">
          <div className="mx-auto flex max-w-[1380px] items-center gap-6 px-6">
            <span className="hidden shrink-0 text-[9px] font-bold uppercase tracking-[.22em] text-black/30 md:block">Partner network</span>
            <div className="partner-mask min-w-0 overflow-hidden">
              <div className="partner-track flex w-max items-center gap-10">
                {[...partners, ...partners].map((partner, i) => <span key={`${partner}-${i}`} className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-black/48"><span className="h-1 w-1 rounded-full bg-[#d9a62e]" />{partner}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section-cursor-field relative bg-[#f5f3ee] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1380px]">
            <Reveal className="grid gap-10 md:grid-cols-[.78fr_1.22fr] md:items-end">
              <motion.div variants={fadeUp}><p className="eyebrow">01 · What we do</p><h2 className="section-title mt-4">Solutions built around <span className="text-[#1677a6]">real-world industry.</span></h2></motion.div>
              <motion.div variants={fadeUp} className="max-w-2xl md:justify-self-end"><p className="section-copy">A diverse portfolio for construction, mining and infrastructure applications. The structure below is ready for the final product catalogue once the imagery and verified product details are supplied.</p></motion.div>
            </Reveal>

            <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_25px_80px_rgba(11,24,33,.08)] md:grid-cols-2">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    href="#contact"
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: .15 }}
                    transition={{ delay: index * .06 }}
                    className={`capability-card group relative min-h-[310px] overflow-hidden border-black/10 p-7 transition md:p-9 ${index < 2 ? "border-b" : ""} ${index % 2 === 0 ? "md:border-r" : ""} ${item.accent === "dark" ? "bg-[#0b1821] text-white" : "bg-white"}`}
                  >
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#d9a62e]/8 blur-3xl transition duration-700 group-hover:scale-150" />
                    <div className="relative flex items-start justify-between"><div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.accent === "dark" ? "bg-white/8 text-[#d9a62e]" : "bg-[#eef5f7] text-[#1677a6]"}`}><Icon size={19} /></div><span className="font-mono text-[10px] text-current/25">{item.number}</span></div>
                    <div className="relative mt-16"><p className={`text-[9px] font-bold uppercase tracking-[.2em] ${item.accent === "dark" ? "text-[#d9a62e]" : "text-[#1677a6]"}`}>{item.eyebrow}</p><h3 className="mt-3 text-3xl font-semibold tracking-[-.04em]">{item.title}</h3><p className="mt-1 text-sm font-medium text-current/45">{item.subtitle}</p><p className="mt-5 max-w-lg text-sm leading-6 text-current/45">{item.copy}</p></div>
                    <div className={`absolute bottom-7 left-7 flex items-center gap-2 text-xs font-bold ${item.accent === "dark" ? "text-white" : "text-[#111820]"}`}>View solution <ChevronRight size={15} className="transition-transform group-hover:translate-x-1" /></div>
                  </motion.a>
                );
              })}
            </div>

            <Reveal className="mt-12 grid gap-5 md:grid-cols-[1.15fr_.85fr]">
              <motion.div variants={fadeUp} className="relative overflow-hidden rounded-[2rem] bg-[#0b1821] p-8 text-white md:p-10">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#1677a6]/15 blur-3xl" />
                <div className="relative"><p className="eyebrow text-white/35">Portfolio architecture</p><h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-.04em] md:text-4xl">One network. Multiple industrial applications.</h3><p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">Use this space for a concise explanation of how Trinity connects manufacturers, equipment and customer requirements. Final copy remains a placeholder.</p></div>
                <div className="relative mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">{['Crushing', 'Washing', 'Road', 'Industrial'].map((x) => <div key={x} className="border-l border-white/10 pl-3 text-xs font-semibold text-white/60">{x}</div>)}</div>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-[2rem] border border-black/10 bg-[#e9eef0] p-8 md:p-10"><p className="eyebrow">Placeholder asset</p><div className="mt-12 flex min-h-[160px] items-center justify-center rounded-[1.5rem] border border-dashed border-black/15 bg-white/45 text-center"><div><CircleDot className="mx-auto text-[#1677a6]" size={20} /><p className="mt-3 text-sm font-semibold">Product / machinery visual goes here</p><p className="mt-1 text-xs text-black/40">Images will be added in the next content pass.</p></div></div></motion.div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e8edf0] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1380px]">
            <Reveal><motion.div variants={fadeUp} className="max-w-3xl"><p className="eyebrow">02 · Operating spectrum</p><h2 className="section-title mt-4">From <span className="text-[#1677a6]">material</span> to movement.</h2><p className="section-copy mt-6">The final content can turn this into a clear visual map of the markets Trinity serves. For now, it gives the site a strong editorial rhythm without inventing claims.</p></motion.div></Reveal>
            <div className="mt-14 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
              <div className="rounded-[2rem] bg-[#0b1821] p-6 text-white md:p-8">
                <div className="mb-8 flex items-center justify-between"><span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/35">Industry map</span><span className="font-mono text-[9px] text-[#d9a62e]">TRINITY / 04</span></div>
                <div className="space-y-2">
                  {operatingAreas.map(([n, title], index) => <button key={n} onClick={() => setActiveArea(index)} className={`area-tab group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition ${activeArea === index ? "bg-white/8" : "hover:bg-white/5"}`}><span className="flex items-center gap-4"><span className={`font-mono text-[10px] ${activeArea === index ? "text-[#d9a62e]" : "text-white/25"}`}>{n}</span><span className={activeArea === index ? "text-white" : "text-white/55"}>{title}</span></span><ChevronRight size={15} className={`transition ${activeArea === index ? "translate-x-1 text-[#d9a62e]" : "text-white/15"}`} /></button>)}
                </div>
              </div>
              <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-black/8 bg-white p-8 md:p-12">
                <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#d9a62e]/8 blur-3xl" />
                <AnimatePresence mode="wait">
                  <motion.div key={activeArea} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: .3 }} className="relative flex h-full flex-col justify-between">
                    <div><div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#1677a6]"><CircleDot size={10} /> 0{activeArea + 1} / Focus area</div><h3 className="mt-7 text-5xl font-semibold tracking-[-.055em] md:text-7xl">{operatingAreas[activeArea][1]}</h3><p className="mt-6 max-w-xl text-base leading-7 text-black/50">{operatingAreas[activeArea][2]} Final company-specific proof points and project examples will be added here.</p></div>
                    <div className="mt-12 flex items-center gap-4"><span className="h-px w-16 bg-black/10" /><span className="text-[9px] uppercase tracking-[.2em] text-black/30">Content placeholder</span></div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden bg-[#091720] px-6 py-24 text-white md:py-32">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:70px_70px]" />
          <div className="relative mx-auto max-w-[1380px]">
            <Reveal className="grid gap-14 md:grid-cols-[.85fr_1.15fr] md:items-end">
              <motion.div variants={fadeUp}><p className="eyebrow text-white/35">03 · About Trinity</p><h2 className="mt-5 max-w-xl text-5xl font-semibold tracking-[-.055em] md:text-7xl">A stronger <span className="text-[#d9a62e]">digital face</span> for an engineering-led business.</h2></motion.div>
              <motion.div variants={fadeUp}><p className="max-w-3xl text-lg leading-8 text-white/55">Trinity Enterprises is an Authorised Dealer in Construction & Mining Equipment, representing a diverse portfolio of mobile and stationary crushers, sand washing plants, wet mix and hot mix plants, bitumen sprayers, construction chemicals, gensets, and sand air classifiers.</p><p className="mt-6 max-w-3xl text-base leading-7 text-white/38">The portfolio includes Metso, McCloskey, MechTech Inframine, Berger Paints, IKA Chemicals, Caterpillar and SAAGMO Technologies.</p></motion.div>
            </Reveal>

            <div className="mt-16 grid border-y border-white/10 md:grid-cols-4">
              {[['07', 'Named partner brands'], ['04', 'Solution groups'], ['04', 'Operating areas'], ['01', 'Pune office base']].map(([v, l], i) => <motion.div key={l} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="border-white/10 px-0 py-8 md:border-r md:px-8 first:md:pl-0 last:md:border-r-0"><p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{v}</p><p className="mt-2 text-[9px] uppercase tracking-[.18em] text-white/30">{l}</p></motion.div>)}
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-7"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d9a62e]">Placeholder · history</p><p className="mt-5 text-sm leading-7 text-white/45">Verified company history, years of operation and milestone information will be inserted once Dad confirms the final content.</p></div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-7"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#1677a6]">Placeholder · reach</p><p className="mt-5 text-sm leading-7 text-white/45">Customer segments, project locations and service reach can be showcased here without changing the underlying layout.</p></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-[#d9a62e]/20 bg-[#d9a62e] p-7 text-[#0b1821]"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#0b1821]/55">Content-ready</p><p className="mt-5 text-2xl font-semibold tracking-[-.03em]">This design is ready for the real Trinity story.</p><p className="mt-4 text-sm leading-6 text-[#0b1821]/60">No redesign required when the final copy arrives.</p><MoveUpRight className="absolute bottom-6 right-6" size={20} /></div>
            </div>
          </div>
        </section>

        <section className="section-cursor-field relative bg-white px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1380px]">
            <Reveal className="grid gap-10 md:grid-cols-[.7fr_1.3fr] md:items-end"><motion.div variants={fadeUp}><p className="eyebrow">04 · Why Trinity</p><h2 className="section-title mt-4">Built on <span className="text-[#1677a6]">trust, capability and support.</span></h2></motion.div><motion.p variants={fadeUp} className="max-w-2xl text-base leading-7 text-black/45 md:justify-self-end">A visual framework for the proof points that matter to customers evaluating construction and mining equipment partners.</motion.p></Reveal>
            <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map(([n, title, copy, Icon], i) => {
                const ReasonIcon = Icon as typeof Network;
                return <motion.div key={n as string} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .06 }} className="group bg-white p-7 md:p-8"><div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf5f7] text-[#1677a6] transition group-hover:bg-[#d9a62e] group-hover:text-[#0b1821]"><ReasonIcon size={18} /></div><span className="font-mono text-[10px] text-black/20">{n as string}</span></div><h3 className="mt-12 text-xl font-semibold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-black/45">{copy as string}</p><div className="mt-8 h-px w-0 bg-[#d9a62e] transition-all duration-500 group-hover:w-full" /></motion.div>;
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section-cursor-field relative bg-[#d9a62e] px-6 py-24 md:py-32">
          <div className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-white/15 blur-[100px]" />
          <div className="relative mx-auto max-w-[1380px]">
            <div className="grid gap-14 md:grid-cols-[.75fr_1.25fr] md:items-start">
              <Reveal><motion.div variants={fadeUp}><p className="eyebrow text-[#0b1821]/55">05 · Get in touch</p><h2 className="mt-4 max-w-xl text-5xl font-semibold tracking-[-.055em] text-[#0b1821] md:text-7xl">Have a project in mind?</h2><p className="mt-7 max-w-md text-base leading-7 text-[#0b1821]/62">Tell us what you&apos;re working on. The form is currently a development placeholder and will be connected to the final company inbox before launch.</p></motion.div><motion.div variants={fadeUp} className="mt-10 space-y-5 text-sm text-[#0b1821]/70"><p><strong className="text-[#0b1821]">Email</strong><br /><a href="mailto:trinity1entp@gmail.com" className="hover:underline">trinity1entp@gmail.com</a></p><p><strong className="text-[#0b1821]">Phone</strong><br /><a href="tel:+919881153232" className="hover:underline">+91 9881153232</a> / <a href="tel:+919552666833" className="hover:underline">+91 9552666833</a></p><p><strong className="text-[#0b1821]">Office</strong><br />5-A, 5th Floor, Siddhi Tower, above ICICI Bank,<br />NIBM Kondhwa Road, Pune-411048, Maharashtra, India.</p></motion.div></Reveal>

              <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] bg-[#0b1821] p-6 text-white shadow-2xl shadow-[#0b1821]/20 md:p-9">
                {submitted ? <div className="flex min-h-[430px] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d9a62e] text-[#0b1821]"><Check /></div><h3 className="mt-6 text-2xl font-semibold">Enquiry captured.</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/45">Development placeholder only. Next step: connect this form to the company Gmail workflow.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-full border border-white/15 px-5 py-3 text-sm">Send another</button></div> : <><div className="flex items-start justify-between gap-4"><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d9a62e]">Enquiry form</p><p className="mt-2 text-sm text-white/40">Short, direct and ready for backend integration.</p></div><div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:flex"><Send size={15} className="text-[#d9a62e]" /></div></div><div className="mt-8 grid gap-5 sm:grid-cols-2"><Field label="Name" name="name" placeholder="Your name" /><Field label="Company" name="company" placeholder="Company name" /><Field label="Email" name="email" type="email" placeholder="you@company.com" /><Field label="Phone" name="phone" placeholder="+91" /></div><div className="mt-5"><label className="field-label">Message</label><textarea name="message" rows={6} required placeholder="Tell us briefly about your requirement..." className="field-input resize-none" /></div><button className="mt-6 w-full rounded-full bg-[#d9a62e] px-6 py-4 text-sm font-bold text-[#0b1821] transition hover:-translate-y-0.5 hover:bg-white">Send enquiry <Send className="ml-2 inline" size={16} /></button></>}</motion.form>
            </div>

            <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#0b1821]/15 bg-[#0b1821] p-2 shadow-2xl shadow-[#0b1821]/15">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#172630]">
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1821]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/70 backdrop-blur"><MapPin size={11} className="text-[#d9a62e]" /> Trinity Enterprises · Pune office</div>
                <iframe title="Trinity Enterprises office location" className="h-[340px] w-full border-0 grayscale-[.4] opacity-90 md:h-[430px]" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=73.883%2C18.472%2C73.900%2C18.486&layer=mapnik&marker=18.479459%2C73.891033" />
                <div className="flex flex-col gap-3 border-t border-white/10 bg-[#0b1821] px-5 py-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between"><span>5-A, 5th Floor, Siddhi Tower · NIBM Kondhwa Road · Pune 411048</span><a href="https://www.google.com/maps/search/?api=1&query=5-A%2C%205th%20Floor%2C%20Siddhi%20Tower%2C%20NIBM%20Kondhwa%20Road%2C%20Pune%20411048" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#d9a62e] hover:text-white">Get GPS directions <ArrowRight size={15} /></a></div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#303030] px-6 py-12 text-white">
          <div className="mx-auto max-w-[1380px]">
            <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
              <div><p className="text-lg font-semibold tracking-tight">TRINITY ENTERPRISES</p><p className="mt-2 max-w-xl text-sm leading-6 text-white/40">Authorised dealer in construction & mining equipment, with a diverse portfolio of equipment and industrial solutions.</p></div>
              <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">Back to top <ArrowRight size={15} className="-rotate-90" /></a>
            </div>
            <div className="grid gap-8 py-10 text-sm text-white/65 md:grid-cols-3"><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/30">Contact</p><p className="mt-3">trinity1entp@gmail.com</p><p>+91 9881153232 / +91 9552666833</p></div><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/30">Office</p><p className="mt-3">5-A, 5th Floor, Siddhi Tower, above ICICI Bank, NIBM Kondhwa Road, Pune-411048 Maharashtra India.</p></div><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/30">Status</p><p className="mt-3 text-[#d9a62e]">Development version · Content placeholders active</p></div></div>
            <div className="border-t border-white/10 pt-8 text-xs leading-6 text-white/45"><p>The names Metso, Sandvik, Terex, Cat, Caterpillar, John Deere, Komatsu, Volvo, Hitachi, Doosan, JCB, Hyundai or any other original equipment manufacturers are registered trademarks of the respective original equipment manufacturers. All names, descriptions, numbers and symbols are used for reference purposes only.</p><p className="mt-2">trinityentp.com is in no way associated with any of the manufacturers we have listed. All manufacturer&apos;s names and descriptions are for reference only.</p><p>Cat® and Caterpillar® are registered trademarks of Caterpillar, Inc.</p></div>
            <div className="mt-8 flex flex-col gap-2 text-[10px] uppercase tracking-[.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between"><span>©2020 Trinity Enterprises</span><span>Website rebuild · Development version</span></div>
          </div>
        </footer>
      </main>
    </>
  );
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder: string; type?: string }) {
  return <div><label className="field-label" htmlFor={name}>{label}</label><input id={name} name={name} type={type} required className="field-input" placeholder={placeholder} /></div>;
}
