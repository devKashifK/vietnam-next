/** @type {import('next').NextConfig} */
const nextConfig = {
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
