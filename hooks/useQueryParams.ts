import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useQueryParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  // https://nextjs.org/docs/app/api-reference/functions/use-search-params
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const setQueryParam = useCallback(
    (param: string, value: string) => {
      router.push(`${pathname}?${createQueryString(param, value)}`);
    },
    [createQueryString, pathname, router],
  );

  return { searchParams, setQueryParam };
};
