import React from "react";

export const Form = ({ type }) => {
  return (
    <>
      <form action="">
        <h1>{type}</h1>
        Email <br /> <input type="text" /> <br />
        <br />
        {type == "Register" ? (
          <>
            Username <br /> <input type="text" />
          </>
        ) : (
          ""
        )}{" "}
        <br /> Password <br /> <input type="password" /> <br />
        <br />
        <button>{type}</button>
      </form>
    </>
  );
};
