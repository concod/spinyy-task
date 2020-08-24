import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const DisplayAnime = ({ title, url }) => {
  return (
    <>
      <Card
        hoverable={90}
        style={{
          width: 250,

          borderRadius: "10px",
          boxShadow:
            " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ",
        }}
        cover={
          <img
            style={{
              borderRadius: "10px 10px 0 0",
            }}
            alt="example"
            src={url}
          />
        }
      >
        <Meta description={title} style={{ textAlign: "center" }} />
      </Card>
    </>
  );
};

export default DisplayAnime;
