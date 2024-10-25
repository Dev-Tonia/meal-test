import axios from "axios";
import type { UseFetchOptions } from "nuxt/app";

interface ApiResponse<T> {
  data: any;
}
export function useApiCall<T>(
  url: string | (() => string),
  options: UseFetchOptions<ApiResponse<T>> = {},
) {
  const config = useRuntimeConfig();

  const baseUrl = config.public.baseURL;
  return useFetch<ApiResponse<T>>(() => `${baseUrl}${url}`, {
    ...options,
  });
}

export function useAxiosFetch<T>(
  url: string | (() => string),
  options: any = {},
) {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseURL;
  const data: Ref<T | null> = ref(null);
  const error: Ref<any> = ref(null);
  const loading: Ref<boolean> = ref(false);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const fullUrl =
        typeof url === "function" ? `${baseUrl}${url()}` : `${baseUrl}${url}`;
      const response = await axios.request<ApiResponse<T>>({
        url: fullUrl,
        ...options,
      });
      data.value = response.data.data;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    fetch: fetchData,
  };
}
