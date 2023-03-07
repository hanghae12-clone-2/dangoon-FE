import { useQuery } from '@tanstack/react-query';
import QUERY from '../constants/query';
import Axios from '../api/axios';

export default function useGetQuery(
  queryKey,
  baseUrl,
  path,
  enableValue,
  successFn
) {
  const axios = new Axios(baseUrl);
  const { isLoading, isError, refetch, data } = useQuery(
    [queryKey],
    async () => await axios.get(path),
    {
      onSuccess: successFn,
      staleTime: QUERY.STALETIME.FIVE_MIN,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      keepPreviousData: true,
      enabled: !!enableValue,
    }
  );

  return { isLoading, isError, refetch, data };
}
