/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thrangra.sirv.com",
      },
    ],
  },
};

module.exports = nextConfig;
