import React, { useEffect, useRef, useState } from 'react';
import {
  Activity, ArrowUpRight, BookOpen, Cpu, GitHub, GitMerge, Layers, Linkedin, Mail, Search, Shield, ShoppingBag, Zap,
} from 'react-feather';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const projects = [
  {
    title: 'AI Studio',
    kind: 'Motadata ServiceOps, in production',
    icon: <Cpu size={18} />,
    url: 'https://www.motadata.com/capabilities/ai-workforce',
    docs: 'https://docs.motadata.com/serviceops-docs/admin-section/ai/ai-studio/',
    logo: '/images/motadata.svg',
    description:
      "ServiceOps' agentic AI suite. IT teams deploy pre-built AI agents and manager-orchestrated AI teams with no code, and reach them through the in-portal Ask AI assistant.",
    panel: 'Agent team',
    rows: [
      ['Manager agent', 'Orchestrates the team'],
      ['AI agents', 'Pre-built, no code'],
      ['Knowledge', "RAG on the customer's own data"],
      ['PII guard', 'Masks input and output'],
      ['Test and preview', 'Before every go-live'],
    ],
    stack: 'Agentic AI, multi-agent orchestration, RAG, AI governance',
  },
  {
    title: 'Prism',
    kind: 'LLM gateway',
    icon: <GitMerge size={18} />,
    url: 'https://github.com/saahilll/Prism',
    description:
      'An OpenAI-compatible gateway that puts one endpoint in front of multiple model providers, with a React ops console and one-command Docker deployment.',
    panel: 'Request path',
    rows: [
      ['Budgets', 'Per team, usage metered'],
      ['Rate limits', 'Enforced atomically'],
      ['Semantic cache', 'Serves repeat questions'],
      ['Routing', 'Easy requests to cheaper models'],
      ['Failover', 'Timeout, retry, next provider'],
    ],
    stack: 'Python, PostgreSQL, pgvector, Redis, React, Docker',
  },
  {
    title: 'Prolifo',
    kind: 'Explainable candidate matching',
    icon: <Search size={18} />,
    url: 'https://github.com/saahilll/prolifo',
    description:
      'A hybrid RAG engine that ranks candidates against job descriptions and explains every result.',
    panel: 'Matching pipeline',
    rows: [
      ['Semantic search', 'ChromaDB'],
      ['Keyword search', 'BM25'],
      ['Fusion', 'Reciprocal Rank Fusion'],
      ['Must-haves', 'Checked before scoring'],
      ['Score', '0 to 100, with a reason'],
    ],
    stack: 'Python, ChromaDB, OpenAI embeddings, BM25',
  },
  {
    title: 'Vero',
    kind: 'Realtime chat application',
    icon: <Activity size={18} />,
    url: 'https://github.com/saahilll/vero',
    description: 'A real-time chat system built with Django Channels and HTMX.',
    panel: 'Features',
    rows: [
      ['Messaging', 'Personal and group'],
      ['Files', 'Shared in chat'],
      ['Presence', 'Live'],
      ['Transport', 'Channels over Redis'],
    ],
    stack: 'Python, Django, HTMX, Redis, ASGI',
  },
  {
    title: 'Little Garden',
    kind: 'E-commerce application',
    icon: <ShoppingBag size={18} />,
    url: 'https://github.com/saahilll/little_garden',
    description: 'An online store with a full order workflow, built with Django.',
    panel: 'Features',
    rows: [
      ['Catalog', 'Category filtering'],
      ['Cart', 'Session-aware'],
      ['Checkout', 'Order workflow'],
      ['Accounts', 'Persistent login'],
    ],
    stack: 'Python, Django, HTML, CSS',
  },
];

const strengths = [
  {
    title: 'End-to-end ownership',
    icon: <Layers size={18} />,
    text: 'From problem discovery and PRDs to architecture, implementation, tests, and launch.',
  },
  {
    title: 'Applied AI engineering',
    icon: <Zap size={18} />,
    text: 'Agentic systems, RAG, LLM gateways, and evaluation against baselines.',
  },
  {
    title: 'Production judgement',
    icon: <Shield size={18} />,
    text: 'I design for cost control, failover, governance, and data privacy from day one.',
  },
];

const socialLinks = [
  { name: 'GitHub', icon: <GitHub size={16} />, url: 'https://github.com/saahilll' },
  { name: 'LinkedIn', icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/in/saahill/' },
  { name: 'X', icon: <XIcon className="w-4 h-4" />, url: 'https://x.com/SaahilPandya' },
];

const shell = 'max-w-7xl mx-auto px-[max(1rem,env(safe-area-inset-left))] lg:px-20';
const readout = 'font-mono text-xs uppercase tracking-[0.18em]';
const heading = 'font-display font-bold uppercase tracking-wide';
const iconTile = 'chamfer [--c:8px] w-10 h-10 bg-primary/15 flex items-center justify-center text-primary';
// Chamfered frame: the outer element's background shows through 1px of padding as the border.
const frame = 'chamfer bg-white/15 p-px';

const GLYPHS = 'ABCDEFGHKLMNPRSTUVXYZ0123456789#/<>';

// Decodes text left to right from random glyphs once it scrolls into view.
const Scramble = ({ text, delay = 0, play = true }: { text: string; delay?: number; play?: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [out, setOut] = useState(text);

  useEffect(() => {
    const el = ref.current;
    if (!el || !play || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer: number | undefined;

    const run = () => {
      const start = performance.now() + delay;
      timer = window.setInterval(() => {
        const shown = Math.floor((performance.now() - start) / 28);
        if (shown >= text.length) {
          setOut(text);
          clearInterval(timer);
          return;
        }
        setOut(
          Array.from(text, (ch, i) =>
            i < shown || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          ).join('')
        );
      }, 45);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      run();
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearInterval(timer);
      setOut(text);
    };
  }, [text, delay, play]);

  return (
    <span ref={ref} aria-hidden="true">
      {out}
    </span>
  );
};

// "Lead ACCENT" heading text: both parts decode, the accent in glowing red.
const Decoded = ({ lead, accent }: { lead: string; accent: string }) => (
  <>
    <Scramble text={lead} /> <span className="glow-text text-primary">
      <Scramble text={accent} delay={lead.length * 28} />
    </span>
  </>
);

const HudButton = ({
  href,
  solid,
  children,
}: {
  href: string;
  solid?: boolean;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className={`chamfer [--c:10px] inline-flex p-px font-display text-sm font-semibold uppercase tracking-widest outline-none transition-colors focus-visible:bg-white ${
      solid ? 'bg-primary hover:bg-primary-light' : 'bg-white/30 hover:bg-primary'
    }`}
  >
    <span
      className={`chamfer [--c:10px] inline-flex items-center gap-2 px-5 py-3 ${
        solid ? 'sheen bg-primary' : 'bg-background-dark'
      }`}
    >
      {children}
    </span>
  </a>
);

const SectionHeading = ({ label, lead, accent, sub }: { label: string; lead: string; accent: string; sub: string }) => (
  <div className="power-on mb-16 text-center lg:mb-20">
    <p className={`${readout} text-accent-light`}>// {label}</p>
    <h2 aria-label={`${lead} ${accent}`} className={`${heading} mt-4 text-3xl sm:text-4xl md:text-5xl`}>
      <Decoded lead={lead} accent={accent} />
    </h2>
    <p className="mx-auto mt-4 max-w-xl text-text-secondary">{sub}</p>
  </div>
);

const Divider = () => (
  <div className={shell} aria-hidden="true">
    <div className="packet relative h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent">
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary shadow-[0_0_12px_2px_rgba(255,0,68,0.8)]" />
    </div>
  </div>
);

const ProjectSelect = () => {
  const [active, setActive] = useState(0);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const steps: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const step = steps[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + projects.length) % projects.length;
    setActive(next);
    (e.currentTarget.children[next] as HTMLElement).focus();
  };

  return (
    <div className="power-on chamfer tracer p-px [--c:24px]">
      <div className="chamfer grid gap-px [--c:24px] lg:grid-cols-[17rem_1fr]">
        <div
          role="tablist"
          aria-label="Projects"
          onKeyDown={onKeyDown}
          className="no-scrollbar flex overflow-x-auto bg-background lg:flex-col lg:overflow-visible lg:py-4"
        >
          {projects.map((project, index) => {
            const isActive = index === active;
            return (
              <button
                key={project.title}
                type="button"
                role="tab"
                id={`project-tab-${index}`}
                aria-selected={isActive}
                aria-controls={`project-panel-${index}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(index)}
                className={`flex shrink-0 items-center gap-4 border-b-2 px-5 py-4 text-left outline-none transition-colors focus-visible:bg-white/10 lg:border-b-0 lg:border-l-2 lg:px-6 lg:py-5 ${
                  isActive
                    ? 'border-primary bg-surface-dark text-white'
                    : 'border-transparent text-text-secondary hover:bg-surface-dark/60 hover:text-white'
                }`}
              >
                <span className={`${readout} ${isActive ? 'text-primary' : 'text-white/40'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className={`${heading} block whitespace-nowrap text-base`}>{project.title}</span>
                  <span className="mt-1 hidden font-mono text-[11px] uppercase leading-snug tracking-wider text-text-secondary lg:block">
                    {project.kind}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* All panels share one grid cell so the section keeps the height of the tallest. */}
        <div className="grid bg-background">
          {projects.map((project, index) => {
            const isActive = index === active;
            const isCode = project.url.includes('github.com');
            return (
              <div
                key={project.title}
                role="tabpanel"
                id={`project-panel-${index}`}
                aria-labelledby={`project-tab-${index}`}
                className={`col-start-1 row-start-1 flex flex-col gap-10 p-6 sm:p-10 xl:flex-row xl:items-center xl:gap-14 xl:p-12 ${
                  isActive ? 'panel-in' : 'invisible'
                }`}
              >
                <div className="xl:flex-1">
                  <div className="flex h-10 items-center justify-between">
                    {project.logo ? (
                      <img src={project.logo} alt="Motadata" width={150} height={24} className="h-6 w-auto" />
                    ) : (
                      <div className={iconTile}>{project.icon}</div>
                    )}
                    {isCode ? (
                      <span className={`${readout} text-white/50`}>Open source</span>
                    ) : (
                      <span
                        className={`${readout} inline-flex items-center gap-2.5 border border-emerald-400/60 bg-emerald-400/10 px-3 py-1.5 font-semibold text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.35)]`}
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Live
                      </span>
                    )}
                  </div>

                  <h3 aria-label={project.title} className={`${heading} mt-8 text-2xl sm:text-3xl`}>
                    <Scramble text={project.title} play={isActive} />
                  </h3>
                  <p className={`${readout} mt-3 text-accent-light`}>{project.kind}</p>
                  <p className="mt-5 leading-relaxed text-text-secondary">{project.description}</p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <HudButton href={project.url} solid>
                      {isCode ? <GitHub size={16} /> : <ArrowUpRight size={16} />}
                      {isCode ? 'Code' : 'Site'}
                    </HudButton>
                    {project.docs && (
                      <HudButton href={project.docs}>
                        <BookOpen size={16} />
                        Docs
                      </HudButton>
                    )}
                  </div>
                </div>

                <div className="xl:flex-1">
                  <div className={`${frame} [--c:12px]`}>
                    <div className="chamfer bg-background-dark [--c:12px]">
                      <div className={`${readout} flex items-center gap-2 border-b border-white/10 px-5 py-4`}>
                        <span className="blink h-1.5 w-1.5 bg-primary" />
                        {project.panel}
                      </div>
                      <dl className={`divide-y divide-white/5 px-5 text-sm ${isActive ? 'rows-in' : ''}`}>
                        {project.rows.map(([label, value]) => (
                          <div key={label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5">
                            <dt className="font-mono text-xs uppercase tracking-wider text-accent-light">{label}</dt>
                            <dd className="text-right text-white/85">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                  <p className="mt-5 font-mono text-xs leading-relaxed text-text-secondary">
                    {project.stack.split(', ').join(' / ')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const bracket = 'absolute h-5 w-5 border-white/40 pointer-events-none';

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-[100svh] items-end pt-28">
        <img
          src="/images/hero.jpg"
          alt=""
          width={1456}
          height={832}
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] md:object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background-dark via-background-dark/70 to-transparent" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-background-dark/50 to-transparent md:block" />

        <span aria-hidden="true" className={`${bracket} left-3 top-3 border-l border-t`} />
        <span aria-hidden="true" className={`${bracket} right-3 top-3 border-r border-t`} />
        <span aria-hidden="true" className={`${bracket} bottom-3 left-3 border-b border-l`} />
        <span aria-hidden="true" className={`${bracket} bottom-3 right-3 border-b border-r`} />

        <div className={`absolute inset-x-0 top-0 pt-[max(1.75rem,env(safe-area-inset-top))] ${shell}`}>
          <div className={`${readout} flex items-center justify-between gap-4`}>
            <span className="flex items-center gap-2 font-semibold">
              <span className="h-2 w-2 bg-primary shadow-[0_0_10px_2px_rgba(255,0,68,0.8)]" />
              Saahil Pandya
            </span>
            <span className="hidden text-right text-white/70 min-[340px]:block">
              <span className="hidden sm:inline">23.02°N 72.57°E / </span>Ahmedabad, IN
            </span>
          </div>
        </div>

        <div className={`relative w-full pb-28 lg:pb-20 ${shell}`}>
          <div className="rise max-w-4xl">
            <p className={`${readout} flex items-center gap-2 text-accent-light`}>
              <span className="blink h-1.5 w-1.5 bg-accent-light" />
              Product engineer // AI systems
            </p>
            <h1
              aria-label="I take AI products from spec to shipped code."
              className={`${heading} mt-5 leading-[1.05] text-[clamp(1.75rem,7vw,4.25rem)]`}
            >
              <Decoded lead="I take AI products from spec to" accent="shipped code" />
              <span aria-hidden="true">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-text-secondary md:text-xl">
              I define the problem, write the requirements, and build the systems behind them. I lead AI
              across ServiceOps at Motadata.
            </p>
            <div className="glow mt-8 flex flex-wrap gap-3">
              <HudButton href="#projects" solid>
                View projects
              </HudButton>
              <HudButton href="mailto:saahilpandya@gmail.com">
                <Mail size={16} />
                Email me
              </HudButton>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div aria-hidden="true" className="hud-grid absolute inset-0" />

        {/* Projects Section */}
        <section id="projects" className="relative py-20 lg:py-32">
          <div className={shell}>
            <SectionHeading
              label="Selected work"
              lead="Featured"
              accent="Projects"
              sub="AI systems I've specified and built, plus earlier web work."
            />

            <ProjectSelect />
          </div>
        </section>

        <Divider />

        {/* Strengths Section */}
        <section className="relative py-20 lg:py-32">
          <div className={shell}>
            <SectionHeading
              label="How I work"
              lead="What I"
              accent="Bring"
              sub="I define the problem, write the requirements, and build the systems behind them."
            />

            <div className="chamfer tracer power-on p-px [--c:24px]">
              <div className="chamfer grid gap-px [--c:24px] lg:grid-cols-3">
                {strengths.map((item) => (
                  <div key={item.title} className="group flex gap-5 bg-background p-6 transition-colors hover:bg-surface-dark sm:p-8 lg:block">
                    <div className={`${iconTile} shrink-0 transition-colors group-hover:bg-primary group-hover:text-white`}>{item.icon}</div>
                    <div>
                      <h3 className={`${heading} text-lg lg:mt-6`}>{item.title}</h3>
                      <p className="mt-2 text-sm text-text-secondary">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Contact Section */}
        <section id="about" className="relative py-20 lg:py-32">
          <div className={shell}>
            <div className="glow power-on">
              <div className="chamfer tracer p-px [--c:28px]">
                <div className="chamfer relative overflow-hidden bg-background-dark px-6 py-16 text-center [--c:28px] sm:px-16">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,68,0.28),transparent_65%)]"
                  />
                  <div className="relative">
                    <p className={`${readout} flex items-center justify-center gap-2 text-accent-light`}>
                      <span className="blink h-1.5 w-1.5 bg-accent-light" />
                      Channel open
                    </p>
                    <h2 aria-label="Connect With Me" className={`${heading} mt-4 text-3xl sm:text-4xl md:text-5xl`}>
                      <Decoded lead="Connect" accent="With Me" />
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
                      I'm open to conversations about product engineering and AI engineering roles.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                      <HudButton href="mailto:saahilpandya@gmail.com" solid>
                        <Mail size={16} />
                        Email me
                      </HudButton>
                      {socialLinks.map((social) => (
                        <HudButton key={social.name} href={social.url}>
                          {social.icon}
                          {social.name}
                        </HudButton>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className={`${readout} mt-16 flex flex-wrap justify-between gap-2 text-text-secondary`}>
              <span>© {new Date().getFullYear()} Saahil Pandya</span>
              <span>Ahmedabad, India</span>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
