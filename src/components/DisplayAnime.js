import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const DisplayAnime = ({ title, url }) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 250, borderRadius: "10px" }}
        cover={
          <img
            style={{ borderRadius: "10px 10px 0 0" }}
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
