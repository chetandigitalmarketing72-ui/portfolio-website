import {
  GraduationCap,
  Rocket,
  BrainCircuit,
  Target,
  TrendingUp,
  Search,
  Share2,
  MousePointerClick,
  Facebook,
  PenLine,
  Sparkles,
  Lightbulb,
  Zap,
  ShieldCheck,
  Heart,
  Newspaper,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, useInView } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-secondary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-[clamp(1.9rem,5vw,2.9rem)] font-bold leading-tight">{title}</h2>
      {sub && <p className="mt-3 text-sm text-muted-foreground sm:text-base">{sub}</p>}
    </Reveal>
  );
}

const aboutCards = [
  { Icon: GraduationCap, title: "Graduate", text: "Formal graduate education with a strong marketing curiosity." },
  { Icon: Rocket, title: "Passionate Marketer", text: "Driven to help brands grow measurably online." },
  { Icon: BrainCircuit, title: "Continuous Learner", text: "Daily practice with courses, tools and real campaigns." },
  { Icon: Search, title: "SEO & AI Focus", text: "Deep interest in search visibility and AI-powered marketing." },
  { Icon: Target, title: "Effective Strategies", text: "Focused on plans that translate into real outcomes." },
  { Icon: TrendingUp, title: "Trend Aware", text: "Committed to staying updated with the latest digital trends." },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="An enthusiastic digital marketer helping brands grow online"
        sub="I combine curiosity, structure and modern AI tooling to build marketing that compounds."
      />
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {aboutCards.map((c, i) => (
          <Reveal key={c.title} delay={i * 70}>
            <article className="glass group h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-2">
              <span className="gradient-brand grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground transition-transform group-hover:rotate-6">
                <c.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const timeline = [
  {
    year: "Graduate",
    title: "Bachelor's Degree",
    text: "Completed graduation with a growing focus on marketing, business and communication.",
  },
  {
    year: "Ongoing",
    title: "Digital Marketing Self-Learning",
    text: "SEO, paid media, analytics and AI tools through structured courses and hands-on practice.",
  },
  {
    year: "Now",
    title: "Applied Practice",
    text: "Building sample audits, ad strategies and content plans to sharpen real-world execution.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative px-5 py-24">
      <SectionHeading eyebrow="Education" title="A learning path that never stops" />
      <div className="relative mx-auto max-w-3xl">
        <span
          aria-hidden
          className="gradient-brand absolute left-[15px] top-2 h-[calc(100%-1rem)] w-0.5 opacity-60 sm:left-1/2"
        />
        <ol className="space-y-8">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 100} className="relative pl-12 sm:pl-0">
              <span
                aria-hidden
                className="gradient-brand glow absolute left-2 top-6 h-3.5 w-3.5 rounded-full sm:left-1/2 sm:-translate-x-1/2"
              />
              <div
                className={`glass rounded-3xl p-6 sm:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {t.year}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="glass mt-10 rounded-3xl p-6 text-center text-sm text-muted-foreground">
          “Continuously expanding my expertise through self-learning, industry resources, and
          practical digital marketing practice.”
        </Reveal>
      </div>
    </section>
  );
}

const skills = [
  { name: "Search Engine Optimization (SEO)", value: 85, Icon: Search },
  { name: "Digital Marketing", value: 82, Icon: TrendingUp },
  { name: "Social Media Marketing", value: 80, Icon: Share2 },
  { name: "Google Ads", value: 75, Icon: MousePointerClick },
  { name: "Meta Ads", value: 74, Icon: Facebook },
  { name: "Content Marketing", value: 78, Icon: PenLine },
  { name: "AI Tools", value: 88, Icon: Sparkles },
];

export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Capabilities I practise every single day"
        sub="Hands-on across the full modern marketing stack — from search to paid to AI workflows."
      />
      <div ref={ref} className="mx-auto grid max-w-4xl gap-6">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 60}>
            <div className="glass group rounded-3xl px-6 py-5 transition-colors hover:border-secondary/40">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-3 text-sm font-medium sm:text-base">
                  <span className="gradient-brand grid h-9 w-9 place-items-center rounded-xl text-primary-foreground transition-transform group-hover:scale-110">
                    <s.Icon className="h-4 w-4" />
                  </span>
                  {s.name}
                </span>
                <span className="font-display text-sm font-semibold text-secondary">
                  {s.value}%
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                <span
                  className="gradient-brand block h-full rounded-full transition-[width] duration-1000 ease-out"
                  style={{ width: inView ? `${s.value}%` : "0%", transitionDelay: `${i * 90}ms` }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const services = [
  { Icon: Search, title: "SEO", items: ["Keyword Research", "On-page SEO", "Technical SEO", "Website Optimization"] },
  {
    Icon: Share2,
    title: "Social Media Marketing",
    items: ["Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "Audience Growth", "Brand Awareness"],
  },
  { Icon: MousePointerClick, title: "Google Ads", items: ["Search Campaigns", "Display Ads", "Performance Optimization"] },
  { Icon: Facebook, title: "Meta Ads", items: ["Facebook Ads", "Instagram Ads", "Lead Generation", "Conversion Campaigns"] },
  { Icon: PenLine, title: "Content Marketing", items: ["Blog Strategy", "Content Planning", "SEO Content", "Content Optimization"] },
  { Icon: Bot, title: "AI-Powered Marketing", items: ["AI Content Assistance", "Marketing Automation", "AI Productivity Tools", "Workflow Optimization"] },
];

export function Services() {
  return (
    <section id="services" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="Services"
        title="What I can do for your business"
        sub="Strategy, execution and optimisation across the channels that move the needle."
      />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 70}>
            <article className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-2">
              <span className="gradient-brand pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
              <span className="gradient-warm grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground">
                <s.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const projects = [
  { title: "SEO Website Audit", tag: "Sample", text: "Technical crawl, on-page gaps and a 90-day fix roadmap." },
  { title: "Google Ads Campaign Strategy", tag: "Sample", text: "Search structure, keyword tiers and budget pacing plan." },
  { title: "Social Media Marketing Plan", tag: "Sample", text: "Content pillars, posting cadence and growth experiments." },
  { title: "Content Marketing Strategy", tag: "Sample", text: "Topic clusters, briefs and an AI-assisted production flow." },
];

export function Portfolio() {
  return (
    <section id="work" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="Practice Projects"
        title="Work built through deliberate practice"
        sub="I am actively building my portfolio through continuous learning and hands-on practice. New projects will be added soon."
      />
      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <article className="glass group h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-2">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent">
                  {p.tag}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-secondary" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const strengths = [
  { Icon: Lightbulb, title: "Creative Problem Solver" },
  { Icon: Zap, title: "Fast Learner" },
  { Icon: ShieldCheck, title: "Dedicated Professional" },
  { Icon: Target, title: "Results-Oriented Mindset" },
  { Icon: Heart, title: "Passion for Digital Marketing" },
  { Icon: Newspaper, title: "Up-to-Date with Trends" },
  { Icon: Bot, title: "AI-Driven Marketing Approach" },
];

export function WhyMe() {
  return (
    <section className="relative px-5 py-24">
      <SectionHeading eyebrow="Why Work With Me" title="Strengths I bring to every project" />
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div className="glass flex h-full items-center gap-4 rounded-3xl p-5 transition-colors hover:border-secondary/40">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary/15 text-secondary">
                <s.Icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium">{s.title}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}