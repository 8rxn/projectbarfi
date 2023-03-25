import { useState,useCallback } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Clan, Friends, Home } from "./pages";
import NavBar from "../src/components/marginals/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

function App() {
  const [count, setCount] = useState(0);
  const [profileActive, setProfileActive] = useState(false);

  const toggleProfile= useCallback(
    () => {
      setProfileActive(!profileActive)
    },
    [profileActive],
  )

  return (
    <>
      <NavBar toggleProfile={toggleProfile} />

      <div className={` h-screen z-10 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] grid place-items-center w-[100vw] shadow dark:bg-white/5 ${!profileActive?"hidden":""} `}>
      <Profile toggleProfile={toggleProfile}/>
      </div>

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
