import { useState } from "react";
import images from "../../../config/images"
import Button from "../../shared/Button"
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useAuth } from "@arcana/auth-react";
// import { ethers } from "ethers";
// import { checkInContractABI } from "../../../../contracts/ABI-Exports";

function Navbar({toggleProfile, checked, checkedStreak, checkinButton, address}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  

  // async function startcheckIn() {
  //   console.log("checkIn Start!");
  //   const arcanaProvider = await auth.connect();
  //   const provider = new ethers.providers.Web3Provider(arcanaProvider);
  //   const signer = provider.getSigner();
  //   const checkInContractAdd = "0x2512EC58713216a7b13a3BCC7d1BAC66Fb4ff3e4";
  //   const checkInContract = new ethers.Contract(checkInContractAdd, checkInContractABI, signer);
  //   const givenDate = new Date('2019-02-23');
  //   const today = new Date();
  //   const difference = today.getTime() - givenDate.getTime();
  //   const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));
  //   const doCheckIn = await checkInContract.AddCheckIn(daysPassed);
  //   if(doCheckIn) {
  //     getLastChecked();
  //     setChecked(true);
  //   }
  // }

  // function checkinButton() {
  //   if(checked) {
  //     getLastChecked();
  //   }
  //   else {
  //     startcheckIn();
  //   }
  // }
  

  return (
    <nav className="bg-bg-primary text-color-primary h-20">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={images.Logo.src} alt={images.Logo.alt} className="h-12"/>
          <span className="ml-2 font-bold text-xl">TribeTango</span>
        </a>
        <div className="hidden md:flex items-center gap-x-10">
          <Link to="/" className="hover:text-color-secondary">
            Home
          </Link>
          <a href="#features" className="hover:text-color-secondary">
            Features
          </a>
          <a href="#games" className="hover:text-color-secondary">
            Top Games
          </a>
          <a href="#faq" className="hover:text-color-secondary">
            FAQ
          </a>
          <Button onClick={checkinButton}>{checked ? `🔥${checkedStreak} Days` : `Check In!`}</Button>
          <button className="border-color-primary rounded-full border-[2px] p-[3px]" onClick={toggleProfile}><img src={images.Profile.src} alt={images.Profile.alt} className="w-[30px] rounded-full"/></button>
        </div>

        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-20 left-0 right-0 bg-bg-secondary z-30 h-screen flex flex-col items-center`}
        >
          <div className="flex flex-col items-center gap-y-9 pt-12">
            <Link to='/' className="block hover:text-color-secondary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              Home
            </Link>
            <a href="#features" className="block hover:text-color-secondary">
              Features
            </a>
            <a href="#games" className="block hover:text-color-secondary">
              Top Games
            </a>
            <a href="#faq" className="hover:text-color-secondary">
              FAQs
            </a>
            <Button onClick={checkinButton}>{checked ? `🔥${checkedStreak} Days` : `Check In!` }</Button>
            <button className="border-color-primary rounded-full border-[2px] p-[3px]"><img src={images.Profile.src} alt={images.Profile.alt} className="w-[30px] rounded-full" onClick={toggleProfile}/></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
