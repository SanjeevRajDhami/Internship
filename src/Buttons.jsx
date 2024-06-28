import React from "react";
import { Button } from "./Components/Button";

const Buttons = () => {
  return (
    <div style={{ display: "flex", gap: 6 }}>
      <Button Label={"Register"} /> <br /> <br />
      <Button Label={"Login"} /> <br /> <br />
      <Button Label={"Logout"} /> <br /> <br />
    </div>
  );
};

export default Buttons;
