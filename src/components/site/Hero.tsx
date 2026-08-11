import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Instagram,
  Search,
  BarChart3,
  Megaphone,
  Sparkles,
  MousePointerClick,
  Facebook,
  PenLine,
  Share2,
  Bot,
  CheckCircle2,
} from "lucide-react";
import portraitAsset from "@/assets/chetan-portrait.jpg.asset.json";

const roles = [
  "SEO Specialist",
  "Social Media Marketer",
  "Google Ads Expert",
  "Meta Ads Strategist",
  "Content Marketer",
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[index % roles.length] ?? "";
    const done = !deleting && text === full;
    const cleared = deleting && text === "";
    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
          return;
        }
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      },
      done ? 1600 : deleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="gradient-text font-semibold">
      {text}
      <span className="animate-caret text-secondary">|</span>
    </span>
  );
}

const floaters = [
  { Icon: Search, className: "-left-5 top-10 sm:-left-8", delay: "0s" },
  { Icon: BarChart3, className: "-right-4 top-2 sm:-right-7", delay: "1.2s" },
  { Icon: Megaphone, className: "-left-6 bottom-24 sm:-left-9", delay: "2.1s" },
  { Icon: Sparkles, className: "-right-5 bottom-16 sm:-right-8", delay: "0.6s" },
];

const stats = [
  { value: "7+", label: "Marketing skills in practice" },
  { value: "6", label: "Service areas covered" },
  { value: "AI", label: "First workflow mindset" },
];

const marquee = [
  { Icon: Search, label: "SEO" },
  { Icon: MousePointerClick, label: "Google Ads" },
  { Icon: Facebook, label: "Meta Ads" },
  { Icon: Share2, label: "Social Media" },
  { Icon: PenLine, label: "Content" },
  { Icon: BarChart3, label: "Analytics" },
  { Icon: Bot, label: "AI Tools" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-28 sm:pt-36">
      {/* ambient background */}
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -right-24 top-32 h-[24rem] w-[24rem] rounded-full bg-secondary/20 blur-[120px]"
        style={{ animationDelay: "3s" }}
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -bottom-20 left-1/3 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-[130px]"
        style={{ animationDelay: "6s" }}
      />
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* copy */}
          <div className="text-center lg:text-left">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              Available for freelance &amp; full-time roles
            </span>

            <h1 className="mt-6 text-[clamp(2.5rem,7.5vw,4.75rem)] font-bold leading-[1.02]">
              Hi, I&apos;m <span className="gradient-text">Chetan Shukla</span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Digital Marketer &amp; <Typewriter />
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
              I help businesses improve their online presence through SEO, social media
              marketing, paid advertising, content marketing, and AI-powered strategies —
              built on continuous learning and measurable digital growth.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#contact"
                className="gradient-brand glow group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Hire Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/chetan-shukla-resume.txt"
                download
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="mailto:chetanshukla72@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>

            {/* stat bento */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl px-4 py-4 text-left transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="gradient-text font-display text-2xl font-bold">{s.value}</span>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
                { Icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
                { Icon: Mail, href: "mailto:chetanshukla72@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-secondary"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* portrait */}
          <div className="relative mx-auto w-full max-w-[22rem]">
            <div className="gradient-brand absolute inset-8 rounded-full opacity-40 blur-3xl" />
            <div className="glass relative rounded-full p-3">
              <div className="relative overflow-hidden rounded-full">
                <img
                  src="
                  /potrait image.jpg"
                  alt="Portrait of Chetan Shukla, digital marketer"
                  width={800}
                  height={800}
                  className="aspect-square w-full rounded-full object-cover object-top"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/5 rounded-b-full bg-gradient-to-t from-background/90 to-transparent"
                />
              </div>
            </div>

            {floaters.map(({ Icon, className, delay }, i) => (
              <span
                key={i}
                aria-hidden
                style={{ animationDelay: delay }}
                className={`glass animate-float absolute grid h-12 w-12 place-items-center rounded-2xl text-secondary ${className}`}
              >
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
        </div>

        {/* skill marquee */}
        <div className="marquee-mask relative mt-14 overflow-hidden">
          <div className="animate-marquee flex w-max gap-3">
            {[...marquee, ...marquee].map(({ Icon, label }, i) => (
              <span
                key={i}
                className="glass flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground"
              >
                <Icon className="h-4 w-4 text-secondary" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
