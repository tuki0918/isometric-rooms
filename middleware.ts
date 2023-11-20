import createMiddleware from "next-intl/middleware";
import { i18n } from "./utils/i18n/i18n-config";

export default createMiddleware({
  ...i18n,
  // default: always
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ja)/:path*"],
};
