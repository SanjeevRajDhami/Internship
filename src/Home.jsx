import React from "react";
import Card from "./Components/Card";

export const Home = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
    >
      <Card
        title={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, et!
        `}
        author={"Sanjeev"}
      />
      <Card
        title={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, et!
        `}
        author={"Sanjeev"}
      />
      <Card
        title={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, et!
        `}
        author={"Sanjeev"}
      />
      <Card
        title={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, et!
        `}
        author={"Sanjeev"}
      />
    </div>
  );
};
