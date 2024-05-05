// fetch.js
import axios from "axios";
import authHeader from "../services/authHeader";

const API_URL = "https://api.mealtrips.com/api";
export function useCustomFetch(url) {
  const result = ref(null);
  const error = ref(null);
  const isLoading = ref(null);
  const onDownload = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(API_URL + url, {
        headers: authHeader(),
      });
      const { data } = response.data;
      result.value = data;

      isLoading.value = false;

      // handle the response
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };
  // invoke the function
  onDownload();

  return { result, error, isLoading };
}
