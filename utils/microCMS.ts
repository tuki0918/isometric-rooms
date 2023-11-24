import { createClient } from "microcms-js-sdk";

// Initialize the microCMS client (GET only)
export const client = createClient({
  serviceDomain:
    process.env.NEXT_PUBLIC_MICROCMS_SERVICEDOMAIN ||
    "NEXT_PUBLIC_MICROCMS_SERVICEDOMAIN is not defined",
  apiKey:
    process.env.NEXT_PUBLIC_MICROCMS_APIKEY ||
    "NEXT_PUBLIC_MICROCMS_APIKEY is not defined",
});
