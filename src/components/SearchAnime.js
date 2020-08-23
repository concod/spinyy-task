import React, { useContext, useState } from "react";
import { AnimeContext } from "../contexts/AnimeContext";

import { Input } from "antd";

const { Search } = Input;

const SearchAnime = () => {
  const { setQuery } = useContext(AnimeContext);

  return (
    <>
      <div className="search">
        <Search
          placeholder="search for anime"
          enterButton="Go"
          size="large"
          onSearch={(value) => {
            setQuery(value);
          }}
          bordered={true}
          color="green"
        />
      </div>
    </>
  );
};

export default SearchAnime;
