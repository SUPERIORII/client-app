/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ecorise-web.onrender.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;

