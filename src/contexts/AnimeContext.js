import React, { createContext, useState, useEffect } from "react";
import useAnimeSearch from "../hooks/useAnimeSearch";

export const AnimeContext = createContext();

export const AnimeContextProvider = (props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [query, setQuery] = useState("naruto");
  const { data, isLoading, isError } = useAnimeSearch(query, pageIndex);
  const [res, setRes] = useState([]);

  useEffect(() => {
    setRes([]);
  }, [query]);

  useEffect(() => {
    data &&
      data.results &&
      setRes((res) => {
        return data.results.map((res) => res);
      });
  }, [data]);
  return (
    <AnimeContext.Provider
      value={{ res, isLoading, isError, setQuery, pageIndex, setPageIndex }}
    >
      {props.children}
    </AnimeContext.Provider>
  );
};
