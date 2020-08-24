import React, { useContext } from "react";
import { Button } from "antd";
import { AnimeContext } from "../contexts/AnimeContext";

const LoadMore = () => {
  const { pageIndex, setPageIndex, res } = useContext(AnimeContext);

  return (
    <div>
      <Button
        onClick={() => setPageIndex(res.length > 0 ? pageIndex + 1 : pageIndex)}
      >
        Load More
      </Button>
    </div>
  );
};

export default LoadMore;
