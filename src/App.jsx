import { useState, useCallback } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Clan, Friends, Home, NotYet } from "./pages";
import NavBar from "../src/components/marginals/NavBar/NavBar";
import { useAuth, Auth } from "@arcana/auth-react";
import Profile from "./components/Profile/Profile";
import { useEffect } from "react";
import { Contract, ethers } from "ethers";
import { checkInContractABI } from "../contracts/ABI-Exports";

import {useCollectionData} from "react-firebase-hooks/firestore"


function App() {
  const onLogin = async () => {
    console.log("Hello")
  };
  const [count, setCount] = useState(0);
  const [profileActive, setProfileActive] = useState(false);
  const[loginState, setLoginState] = useState(false);
  const[username,setUserName] = useState('Loading...');
  const auth = useAuth();
  const toggleProfile = useCallback(() => {
    setProfileActive(!profileActive);
  }, [profileActive]);
  const [checked, setChecked] = useState(false);
  const [checkedStreak, setCheckedStreak] = useState(0);
  const [address, setAddress] = useState("");



  async function onStart() {
    const authProvider =  auth.provider;
    const user = await authProvider.requestUserInfo();
    const name = user.name;
    // const user = await arcanaProvider.getUser();
    setUserName(name);
    const useraddress = user.address;
    setAddress(useraddress);
    // console.log(useraddress);

  }

  async function getLastChecked() {
    const arcanaProvider = await auth.connect();
    const provider = new ethers.providers.Web3Provider(arcanaProvider);
    const signer = provider.getSigner();
    const checkInContractAdd = "0x2512EC58713216a7b13a3BCC7d1BAC66Fb4ff3e4";

    const checkInContract = new ethers.Contract(checkInContractAdd, checkInContractABI, signer);
    const givenDate = new Date('2019-02-23');
    const today = new Date();
    const difference = today.getTime() - givenDate.getTime();
    const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));
    const getLastCheckedBigN = await checkInContract.CheckLastSignIn();
    const getLastChecked = getLastCheckedBigN.toNumber();
    console.log(getLastChecked);
    if(daysPassed == getLastChecked) {
      setChecked(true);
      const getStreakBigN = await checkInContract.CheckStreak();
      const getStreak = getStreakBigN.toNumber();
      console.log(getStreak);
      setCheckedStreak(getStreak);
    }
  }

  async function startcheckIn() {
    console.log("checkIn Start!");
    const arcanaProvider = await auth.connect();
    const provider = new ethers.providers.Web3Provider(arcanaProvider);
    const signer = provider.getSigner();
    const checkInContractAdd = "0x2512EC58713216a7b13a3BCC7d1BAC66Fb4ff3e4";
    const checkInContract = new ethers.Contract(checkInContractAdd, checkInContractABI, signer);
    const givenDate = new Date('2019-02-23');
    const today = new Date();
    const difference = today.getTime() - givenDate.getTime();
    const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));
    const doCheckIn = await checkInContract.AddCheckIn(daysPassed);
    if(doCheckIn) {
      getLastChecked();
      setChecked(true);
    }
  }

  function checkinButton() {
    if(checked) {
      getLastChecked();
    }
    else {
      startcheckIn();
    }
  }

  useEffect(() => {
    onStart();
    getLastChecked();
})
  

  return (
    <>
      <NavBar toggleProfile={toggleProfile} checked={checked} checkedStreak={checkedStreak} checkinButton={checkinButton} />

      <div
        className={` h-screen z-40 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] grid place-items-center w-[100vw] shadow dark:bg-white/10 ${
          !profileActive ? "hidden" : ""
        } `}
      >
        <Profile toggleProfile={toggleProfile} name={username} />
      </div>
      {!loginState && (
        <div className=" h-screen w-screen fixed left-0 top-0 z-50 backdrop-blur-xl">
          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] filter-none">
            {auth.loading ? (
              "Loading"
            ) : auth.isLoggedIn ? (
              setLoginState(true)
            ) : (
              <div>
                <Auth externalWallet={false} theme={"dark"} onLogin={onLogin} />
              </div>
            )}
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/comrade" element={<Friends />} />
        <Route path="/clan/:id" element={<Clan />} />
        <Route path="/*" element={<NotYet />} />
        {/* This will be default path when login will be setup */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
