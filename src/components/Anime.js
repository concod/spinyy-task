import React, { useContext } from "react";
import { Spin } from "antd";
import { AnimeContext } from "../contexts/AnimeContext";
import DisplayAnime from "./DisplayAnime";
import LoadMore from "./LoadMore";

const Anime = () => {
  const { res, isLoading } = useContext(AnimeContext);

  return (
    <div className={`anime__scrollable-container `}>
      <div className="anime__flex">
        {res.map((res) => (
          <div className="anime__card" key={res.mal_id}>
            <DisplayAnime
              key={res.mal_id}
              title={res.title}
              url={res.image_url}
            />
          </div>
        ))}
      </div>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "80vw",
          }}
        >
          <Spin size="large" />
        </div>
      )}
      {res.length === 0 && !isLoading && (
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            width: "80vw",
          }}
        >
          No results were found
        </div>
      )}

      {res.length > 0 && (
        <div
          className="anime__loadMore"
          style={{ display: `${isLoading ? "none" : "flex"}` }}
        >
          <LoadMore />
        </div>
      )}
    </div>
  );
};

export default Anime;
