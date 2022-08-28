import { useState } from "react";

export const useRequest = () => {
  const [loadingData, setLoadingData] = useState(false);
  const [requestError, setRequestError] = useState(null);

  const request = async (url) => {
    try {
      setLoadingData(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}`);
      }
      const data = await response.json();
      setLoadingData(false);
      return data;
    } catch (e) {
      setLoadingData(false);
      setRequestError(e.message);
      throw e;
    }
  };

  const clearRequestError = () => {
    setRequestError(null);
  };

  return { loadingData, request, requestError, clearRequestError };
};
