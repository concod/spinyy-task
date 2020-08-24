import React, { useContext } from "react";
import { AnimeContext } from "../contexts/AnimeContext";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const Pagination = () => {
  const { pageIndex, setPageIndex, res } = useContext(AnimeContext);

  return (
    <div
      className={`pagination__icons ${
        res.length === 0 && pageIndex > 1 && "hide"
      }`}
    >
      {pageIndex > 1 && (
        <div className="previous__icon">
          <LeftCircleOutlined
            onClick={() => {
              setPageIndex(pageIndex > 1 ? pageIndex - 1 : 1);
            }}
          />
        </div>
      )}

      <div className={`next__icon ${res.length === 0 && "hide"}`}>
        <RightCircleOutlined
          onClick={() => {
            setPageIndex(res.length === 0 ? pageIndex - 1 : pageIndex + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
