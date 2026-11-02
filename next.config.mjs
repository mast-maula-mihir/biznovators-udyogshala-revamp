/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Keep old static-site URLs working
      { source: "/", destination: "/en", permanent: false },
      { source: "/index.html", destination: "/en", permanent: true },
      { source: "/contact.html", destination: "/en/contact", permanent: true },
    ];
  },
};

export default nextConfig;
