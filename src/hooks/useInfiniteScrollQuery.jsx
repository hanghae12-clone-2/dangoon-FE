import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import QUERY from '../constants/query';
import Axios from '../utils/api/axios';

export const useInfiniteScrollQuery = (queryKey, baseUrl, path, limit) => {
  const axios = new Axios(baseUrl);
  const { ref, inView } = useInView();
  const {
    data: posts,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    queryKey,
    async ({ pageParam = 1 }) =>
      await axios.get(`${path}?_page=${pageParam}&_limit=${limit}`),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.data.length ? nextPage : undefined;
      },
      refetchOnWindowFocus: false,
      staleTime: QUERY.STALETIME.FIVE_MIN,
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return { ref, isLoading, isError, isFetchingNextPage, posts };
};
