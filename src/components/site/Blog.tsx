const blogs = [
  {
    title: "What Is SEO? A Beginner's Guide",
    category: "SEO",
    description:
      "Learn the basics of SEO and how to improve your website's visibility on search engines.",
    date: "August 2026",
  },
  {
    title: "10 Best Digital Marketing Tools in 2026",
    category: "Digital Marketing",
    description:
      "Discover useful tools for SEO, social media, advertising, content marketing, and analytics.",
    date: "August 2026",
  },
  {
    title: "How AI Is Changing Digital Marketing",
    category: "AI Marketing",
    description:
      "Explore how AI tools can help marketers create content, analyze data, and improve campaigns.",
    date: "August 2026",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">
          My Blog
        </h2>

        <p className="mt-3 text-center text-muted-foreground">
          Insights about SEO, Digital Marketing and AI
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm text-cyan-400">
                {blog.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                {blog.title}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground">
                {blog.description}
              </p>

              <p className="mt-4 text-sm text-muted-foreground">
                {blog.date}
              </p>

              <button className="mt-5 font-semibold text-cyan-400">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}