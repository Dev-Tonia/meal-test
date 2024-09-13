import type { UseFetchOptions } from "nuxt/app";

export function useApiCall<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig();

  const baseUrl = config.public.baseURL;
  return useFetch(() => `${baseUrl}${url}`, {
    ...options,
  });
}
