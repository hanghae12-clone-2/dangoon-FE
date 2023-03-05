import { useQuery } from '@tanstack/react-query';
import QUERY from '../constants/query';
import Axios from '../api/axios';

export default function useGetQuery(queryKey, baseUrl, path) {
  const axios = new Axios(baseUrl);
  const { isLoading, isError, data } = useQuery(
    [queryKey],
    async () => await axios.get(path),
    {
      staleTime: QUERY.STALETIME.FIVE_MIN,
      refetchOnWindowFocus: false,
    }
  );

  return { isLoading, isError, data };
}
