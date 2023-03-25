import { useState, useCallback } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Clan, Friends, Home } from "./pages";
import NavBar from "../src/components/marginals/NavBar/NavBar";
import { useAuth, Auth } from "@arcana/auth-react";
import Profile from "./components/Profile/Profile";

function App() {
  const onLogin = () => {
    // Route to authenticated page
  };
  const [count, setCount] = useState(0);
  const [profileActive, setProfileActive] = useState(false);
  const auth = useAuth();
  const toggleProfile = useCallback(() => {
    setProfileActive(!profileActive);
  }, [profileActive]);

  return (
    <>
      <NavBar toggleProfile={toggleProfile} />



      <div
        className={` h-screen z-10 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] grid place-items-center w-[100vw] shadow dark:bg-white/5 ${
          !profileActive ? "hidden" : ""
        } `}
      >
        <Profile toggleProfile={toggleProfile} />
      </div>
      <div className=" h-screen w-screen fixed left-0 top-0 z-50 backdrop-blur-md ">
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] back  filter-none  ">
      {auth.loading ? (
        "Loading"
        ) : auth.isLoggedIn ? (
          <p>Logged In</p>
          ) : (
            <div>
          <Auth externalWallet={false} theme={"dark"} onLogin={onLogin}/>
        </div>
      )}
      </div>
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
