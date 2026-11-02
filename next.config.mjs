/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
