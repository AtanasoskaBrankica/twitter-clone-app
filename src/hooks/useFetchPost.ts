import {useState} from 'react';

export const useFetchPost = <T>(
  url: string,
  initialState: T
): {
  data: T;
  fetchFromApi: () => Promise<void>;
} => {
  const [data, setData] = useState<T>(initialState);

  const fetchFromApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  return {data, fetchFromApi};
};
