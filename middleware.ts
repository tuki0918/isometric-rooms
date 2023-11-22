import createMiddleware from "next-intl/middleware";
import { i18n } from "utils/i18n/i18n-config";

export default createMiddleware({
  ...i18n,
  localePrefix: "as-needed",
});

export const config = {
  // https://next-intl-docs.vercel.app/docs/routing/middleware#matcher-no-prefix
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
