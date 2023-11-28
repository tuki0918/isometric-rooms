declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        /** app */
        readonly NEXT_PUBLIC_APP_ENV?: "local" | "development" | "production";
        readonly NEXT_PUBLIC_ENABLE_LOG?: "ON" | "OFF";
        /** google analytics */
        readonly NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
        /** sentry */
        readonly NEXT_PUBLIC_SENTRY_ORG?: string;
        readonly NEXT_PUBLIC_SENTRY_PROJECT?: string;
        readonly NEXT_PUBLIC_SENTRY_DSN?: string;
        /** microcms */
        readonly NEXT_PUBLIC_MICROCMS_SERVICEDOMAIN?: string;
        readonly NEXT_PUBLIC_MICROCMS_APIKEY?: string;
      }
    }
  }
}
