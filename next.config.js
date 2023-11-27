const withNextIntl = require("next-intl/plugin")("./utils/i18n/i18n.ts");
const { withSentryConfig } = require("@sentry/nextjs");
const {
  userSentryWebpackPluginOptions,
  sentryOptions,
} = require("./utils/sentry/sentry-config");

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

const nextWithSentryConfig = withSentryConfig(
  nextConfig,
  userSentryWebpackPluginOptions,
  sentryOptions,
);

module.exports = withNextIntl(nextWithSentryConfig);
