import React from "react";

const Card = ({ title, author }) => {
  return (
    <div style={{ display: "flex" }}>
      <h1 style={{ fontSize: "20px" }}>
        {title}
        <br /> <br /> <br />@{author}
      </h1>
      <br /> <img style={{ height: "200px" }} src="Headphone.jpg" alt="" />
    </div>
  );
};

export default Card;
