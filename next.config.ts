import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // The old site's routes were singular and inconsistent with both the nav and
  // the sitemap. These keep any existing link or index entry alive instead of
  // handing Google a wall of 404s.
  async redirects() {
    return [
      { source: "/product", destination: "/machines", permanent: true },
      { source: "/products", destination: "/machines", permanent: true },
      { source: "/products/:slug", destination: "/machines", permanent: true },
      { source: "/resource", destination: "/before-you-buy", permanent: true },
      { source: "/resources", destination: "/before-you-buy", permanent: true },
      { source: "/machine", destination: "/machines", permanent: true },
      { source: "/faq", destination: "/before-you-buy", permanent: true },
      { source: "/about", destination: "/start-a-plant", permanent: true },
      { source: "/about/:slug", destination: "/start-a-plant", permanent: true },
      { source: "/contact", destination: "/visit", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/blogs/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },

  images: {
    remotePatterns: [{ protocol: "https", hostname: "newgfrpbackend.vercel.app" }],
  },
};

export default nextConfig;
