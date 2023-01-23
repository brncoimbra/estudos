import { useEffect, useState } from "react";

export const useFetch = (url, method = "get") => {
  const [request, setRequest] = useState({
    data: null,
    loading: false,
  });

  useEffect(() => {
    fetch(url, { method })
      .then((res) => res.json())
      .then((data) =>
        setRequest({
          data: data,
          loading: true,
        })
      );
  }, [url, method]);

  return request;
};
