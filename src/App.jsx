import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Register";
import { Login } from "./Login";
import { Form } from "./Components/Form";
import { Button } from "./Components/Button";
import Buttons from "./Buttons";
import Heading from "./Components/Heading";
import { Home } from "./Home";
import Navbar from "./Components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Form type={"Login"} />} />
        <Route path="/logout" element={<Buttons />} />
        <Route
          path="/headingcomponent"
          element={
            <>
              <Heading Label={"Register"} />
              <Heading Label={"Login"} />
              <Heading Label={"Logout"} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
