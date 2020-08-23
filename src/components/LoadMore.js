import React, { useContext } from "react";
import { Button } from "antd";
import { AnimeContext } from "../contexts/AnimeContext";

const LoadMore = () => {
  const { pageIndex, setPageIndex } = useContext(AnimeContext);
  return (
    <div>
      <Button onClick={() => setPageIndex(pageIndex + 1)}>Load More</Button>
    </div>
  );
};

export default LoadMore;
