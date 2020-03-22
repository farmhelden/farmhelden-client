import { useEffect, useState } from "react";
import { axiosInstance } from "./utils";

const domain = process.env.REACT_APP_API_PATH;

/**
 * Calls our API to request data for the given endpoint.
 */
export function useData<T>(endpoint: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get(`${domain}${endpoint}`);

      setData(response.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
}
