import { useState } from "react";
import images from "../../../config/images"
import Button from "../../shared/Button"
import { Link } from "react-router-dom";

function Navbar({toggleProfile}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkedStreak, setCheckedStreak] = useState(11);

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
          <Button>{checked ? `🔥${checkedStreak} Days` : `Check In!` }</Button>
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
            <a href="/" className="block hover:text-color-secondary">
              Home
            </a>
            <a href="/about" className="block hover:text-color-secondary">
              About
            </a>
            <a href="/services" className="block hover:text-color-secondary">
              Services
            </a>
            <a href="#" onClick={toggleProfile} className="hover:text-color-secondary">
              Profile
            </a>
            <Button>{checked ? `🔥${checkedStreak} Days` : `Check In!` }</Button>
            <button className="border-color-primary rounded-full border-[2px] p-[3px]"><img src={images.Profile.src} alt={images.Profile.alt} className="w-[30px] rounded-full"/></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
