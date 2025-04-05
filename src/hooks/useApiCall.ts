import { useState } from "react";
import axios from "axios";

// Generic type for the data returned by the API
export interface ApiResponse<T> {
  data: any;
  loading: boolean;
  error: string | null;
  fetchData: (
    url: string,
    method?: "get" | "post" | "put" | "delete",
    payload?: any
  ) => Promise<T>;
  fetchWithParams: (url: string, params?: any) => Promise<T>;
}

export const useApiCall = <T>(): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (
    url: string,
    method: "get" | "post" | "put" | "delete" = "get",
    payload?: any
  ): Promise<T> => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        method,
        url,
        data: payload,
      });
      setData(response.data);
      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchWithParams = async (url: string, params?: any): Promise<T> => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, { params });
      setData(response.data);
      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData, fetchWithParams };
};
