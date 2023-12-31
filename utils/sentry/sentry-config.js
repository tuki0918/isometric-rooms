const userSentryWebpackPluginOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  // Suppresses source map uploading logs during build
  silent: true,
  org:
    process.env.NEXT_PUBLIC_SENTRY_ORG ||
    "NEXT_PUBLIC_SENTRY_ORG is not defined",
  project:
    process.env.NEXT_PUBLIC_SENTRY_PROJECT ||
    "NEXT_PUBLIC_SENTRY_PROJECT is not defined",
};

const sentryOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Transpiles SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: true,

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
};

module.exports = {
  userSentryWebpackPluginOptions,
  sentryOptions,
};
