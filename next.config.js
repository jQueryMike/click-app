/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.atcdn.co.uk",
        port: "",
        pathname: "/**/",
      },
    ],
  },
};

module.exports = nextConfig;
