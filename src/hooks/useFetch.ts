import axios from "axios";
import { useEffect, useState } from "react";

function useFetch<T = unknown>(url: string) {
  const BASE_URL = "https://62d092a0d9bf9f17058b1f09.mockapi.io/testy/api";

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    axios({
      method: "get",
      baseURL: BASE_URL,
      url,
    }).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return { data };
}

export default useFetch;
