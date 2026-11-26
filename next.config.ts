import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Keep legacy and external links alive instead of handing Google 404s.
  async redirects() {
    return [
      { source: "/product", destination: "/machines", permanent: true },
      { source: "/products", destination: "/machines", permanent: true },
      { source: "/products/:slug*", destination: "/machines", permanent: true },
      { source: "/resource", destination: "/before-you-buy", permanent: true },
      { source: "/resources", destination: "/before-you-buy", permanent: true },
      { source: "/resources/:slug*", destination: "/before-you-buy", permanent: true },
      { source: "/machine", destination: "/machines", permanent: true },
      { source: "/services", destination: "/machines", permanent: true },
      { source: "/projects", destination: "/visit", permanent: true },
      { source: "/testimonials", destination: "/visit", permanent: true },
      { source: "/faq", destination: "/before-you-buy", permanent: true },
      { source: "/about", destination: "/start-a-plant", permanent: true },
      { source: "/about/:slug*", destination: "/start-a-plant", permanent: true },
      { source: "/contact", destination: "/visit", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/blogs/:slug*", destination: "/blog", permanent: true },
      { source: "/calc", destination: "https://rebarx.erpnext.space/calc", permanent: true },
      { source: "/calc.html", destination: "https://rebarx.erpnext.space/calc", permanent: true },
    ];
  },

  images: {
    remotePatterns: [{ protocol: "https", hostname: "newgfrpbackend.vercel.app" }],
  },
};

export default nextConfig;
