import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, User, Send, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Sections";

const details = [
  { Icon: User, label: "Name", value: "Chetan Shukla", href: undefined },
  { Icon: Mail, label: "Email", value: "chetanshukla72@gmail.com", href: "mailto:chetanshukla72@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+91 9971087163", href: "tel:+919971087163" },
  { Icon: MapPin, label: "Location", value: "New Delhi, India", href: undefined },
  { Icon: Linkedin, label: "LinkedIn", value: "Chetan Shukla", href: "https://www.linkedin.com/" },
];

const EMAILJS_SERVICE_ID = "service_rzeeg4f";
const EMAILJS_TEMPLATE_ID = "template_hgv79qp";
const EMAILJS_PUBLIC_KEY = "njRkqXHlGATqqUSE0";

export function Contact() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      form.reset();
      toast.success("Thanks for reaching out!", {
        description: "Your message has been sent. I'll get back to you shortly.",
      });
    } catch {
      toast.error("Message could not be sent", {
        description: "Please try again or email chetanshukla72@gmail.com directly.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's grow your business together"
        sub="Tell me about your brand and goals — I'll reply with ideas you can act on."
      />

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="grid gap-4">
          {details.map((d) => {
            const content = (
              <div className="glass flex items-center gap-4 rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1">
                <span className="gradient-brand grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-primary-foreground">
                  <d.Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    {d.label}
                  </span>
                  <span className="block truncate text-sm font-medium">{d.value}</span>
                </span>
              </div>
            );
            return d.href ? (
              <a key={d.label} href={d.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={d.label}>{content}</div>
            );
          })}

          <div className="flex gap-3">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
              { Icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
              { Icon: Twitter, href: "https://x.com/", label: "X" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="glass grid h-11 w-11 place-items-center rounded-2xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-secondary"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="glass grid gap-4 rounded-3xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What is this about?" />
            <label className="grid gap-2 text-sm">
              <span className="text-muted-foreground">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your goals..."
                className="resize-none rounded-2xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-secondary"
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="gradient-brand glow inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-3xl border border-border">
        <iframe
          title="Map of New Delhi, India"
          src="https://www.openstreetmap.org/export/embed.html?bbox=76.84%2C28.40%2C77.35%2C28.88&layer=mapnik"
          className="h-[320px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-2xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-secondary"
      />
    </label>
  );
}