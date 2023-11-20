const withNextIntl = require("next-intl/plugin")("./utils/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // MicroCMSの画像を対象にする
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
