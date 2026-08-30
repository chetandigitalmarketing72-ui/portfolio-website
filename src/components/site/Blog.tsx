import { useEffect, useState } from "react";

type BlogPost = {
  title: string;
  link: string;
  description: string;
  date: string;
  category: string;
  image?: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const callbackName =
      "bloggerCallback_" + Math.random().toString(36).substring(2);

    const handleBloggerData = (data: any) => {
      try {
        const entries = data.feed?.entry || [];

        const posts: BlogPost[] = entries.map((entry: any) => {
          const content =
            entry.content?.$t ||
            entry.summary?.$t ||
            "";

          // Remove HTML for description
          const text = content
            .replace(/<[^>]*>/g, " ")
            .replace(/&nbsp;/g, " ")
            .replace(/\s+/g, " ")
            .trim();

          // Find first image
          const imageMatch = content.match(
            /<img[^>]+src=["']([^"']+)["']/i
          );

          // Find Blogger post URL
          const link =
            entry.link?.find(
              (item: any) => item.rel === "alternate"
            )?.href || "#";

          const published = entry.published?.$t || "";

          return {
            title: entry.title?.$t || "Untitled",
            link,
            description:
              text.length > 150
                ? text.substring(0, 150) + "..."
                : text,
            date: published
              ? new Date(published).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "",
            category:
              entry.category?.[0]?.term ||
              "Digital Marketing",
            image: imageMatch?.[1],
          };
        });

        setBlogs(posts);
      } catch (error) {
        console.error("Error processing Blogger posts:", error);
      } finally {
        setLoading(false);
      }
    };

    // Create global JSONP callback
    (window as any)[callbackName] = handleBloggerData;

    const script = document.createElement("script");

    script.src =
      `https://digitalgrowthstarter.blogspot.com/feeds/posts/default` +
      `?alt=json-in-script&callback=${callbackName}&max-results=6`;

    script.async = true;

    script.onerror = () => {
      console.error("Unable to load Blogger feed.");
      setLoading(false);
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      delete (window as any)[callbackName];
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="blog"
      className="relative px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold">
          My Blog
        </h2>

        <p className="mt-3 text-center text-muted-foreground">
          Insights about SEO, Digital Marketing and AI
        </p>

        {loading && (
          <p className="mt-12 text-center text-muted-foreground">
            Loading blogs...
          </p>
        )}

        {!loading && blogs.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No blog posts found.
          </p>
        )}

        {!loading && blogs.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {blogs.map((blog) => (
              <article
                key={blog.link}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >

                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-6">

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

                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block font-semibold text-cyan-400 hover:underline"
                  >
                    Read More →
                  </a>

                </div>
              </article>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}