// GitHub Pages build: the workflow sets NEXT_PUBLIC_BASE_PATH (e.g. /repo-name) and
// NEXT_PUBLIC_ASSET_ROOT to the same value so images/PDFs in public/ resolve under it.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isExport = process.env.STATIC_EXPORT === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isExport ? { output: "export", trailingSlash: true, images: { unoptimized: true } } : {}),
  basePath,
  // redirects() isn't supported by static export; public/index.html redirects "/" instead.
  ...(isExport
    ? {}
    : {
        async redirects() {
          return [
            // Keep old static-site URLs working
            { source: "/", destination: "/en", permanent: false },
            { source: "/index.html", destination: "/en", permanent: true },
            { source: "/contact.html", destination: "/en/contact", permanent: true },
            { source: "/about.html", destination: "/en/about", permanent: true },
            { source: "/services.html", destination: "/en/services", permanent: true },
            { source: "/media.html", destination: "/en/media", permanent: true },
            { source: "/testimonials.html", destination: "/en/testimonials", permanent: true },
            { source: "/blog.html", destination: "/en/blog", permanent: true },
            { source: "/presentation.html", destination: "/en/presentation", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
