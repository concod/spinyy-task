import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useAnimeSearch(query, pageIndex) {
  const { data, error } = useSWR(
    `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${pageIndex}`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export default useAnimeSearch;
