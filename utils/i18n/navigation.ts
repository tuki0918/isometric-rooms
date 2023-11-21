import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "utils/i18n/i18n-config";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
