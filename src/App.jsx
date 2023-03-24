import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Clan, Friends, Home } from "./pages";
import NavBar from "../src/components/marginals/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/comrade" element={<Friends />} />
        <Route path="/clan" element={<Clan />} />

        {/* This will be default path when login will be setup */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
