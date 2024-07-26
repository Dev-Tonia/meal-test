import type { UseFetchOptions } from 'nuxt/app';

export function useApiCall<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  return useFetch(() => `https://api-staging.mealtrips.com/api${url}`, {
    ...options,
  })
}