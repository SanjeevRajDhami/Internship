import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Register";
import { Login } from "./Login";
import { Form } from "./Components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>This is a Homepage</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Form type={"Login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
