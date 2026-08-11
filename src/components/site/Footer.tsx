import { Linkedin, Instagram, Mail, Phone } from "lucide-react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Practice Projects" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "SEO",
  "Social Media Marketing",
  "Google Ads",
  "Meta Ads",
  "Content Marketing",
  "AI-Powered Marketing",
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="flex items-center gap-2">
            <span className="gradient-brand grid h-9 w-9 place-items-center rounded-xl font-display text-sm font-bold text-primary-foreground">
              CS
            </span>
            <span className="font-display text-base font-semibold">Chetan Shukla</span>
          </span>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Digital marketer helping businesses grow through SEO, paid media, content and
            AI-powered strategy.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Services
          </h3>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s} className="text-sm text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:chetanshukla72@gmail.com" className="hover:text-foreground">
                chetanshukla72@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+919971087163" className="hover:text-foreground">
                +91 9971087163
              </a>
            </li>
            <li>New Delhi, India</li>
          </ul>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
              { Icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="glass grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-secondary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 Chetan Shukla. All Rights Reserved.
      </p>
    </footer>
  );
}