import { blog } from "@/lib/site";

export const metadata = { title: "Blog & Announcement | Biznovators" };

export default function Blog() {
  return (
    <>
      <h1>{blog.title}</h1>
      <p>
        <a className="button" href={blog.href} target="_blank" rel="noopener noreferrer">
          {blog.cta}
        </a>
      </p>
    </>
  );
}
