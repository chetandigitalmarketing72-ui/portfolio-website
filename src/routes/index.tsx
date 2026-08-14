import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav, BackToTop } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { About, Education, Skills, Services, Portfolio, WhyMe } from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import Blog from "@/components/site/Blog";

const description =
  "Chetan Shukla is a digital marketer in New Delhi helping businesses grow with SEO, social media marketing, Google Ads, Meta Ads, content marketing and AI-powered strategies.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chetan Shukla — Digital Marketer & SEO Specialist" },
      { name: "description", content: description },
      { property: "og:title", content: "Chetan Shukla — Digital Marketer & SEO Specialist" },
      { property: "og:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Chetan Shukla",
          jobTitle: "Digital Marketer",
          email: "chetanshukla72@gmail.com",
          telephone: "+91 9971087163",
          address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
          knowsAbout: ["SEO", "Google Ads", "Meta Ads", "Social Media Marketing", "Content Marketing"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Portfolio />
        <WhyMe />
        <div className="p-20 text-center text-5xl font-bold">
  TEST BLOG
</div>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}
