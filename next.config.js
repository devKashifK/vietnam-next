/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["icanpr.vn", "secure.gravatar.com"], // Add your domain here
  },
  i18n: {
    locales: ["vi"],
    defaultLocale: "vi",
    localeDetection: false,
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during the build process
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
