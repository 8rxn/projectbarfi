import { useAuth } from "@arcana/auth-react";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import images from "../../config/images";
import { useEffect } from "react";

const Profile = ({ toggleProfile, name }) => {

  return (
    <div className="w-[80%] h-[90%] rounded-2xl  bg-bg-primary md:overflow-hidden overflow-y-scroll">
      <div
        className="right-0 relative top-0 flex justify-end m-5 text-color-primary text-4xl cursor-pointer"
        onClick={toggleProfile}
      >
        <AiFillCloseCircle />
      </div>

      <div className="w-[100%] h-[85%] p-5 flex gap-5 md:flex-row flex-col">
        <div className="h-full w-full md:w-[30%] flex flex-col items-center justify-center bg-bg-secondary border-color-primary border-2 rounded-3xl p-5">
          <div className="flex items-center flex-col justify-center">
            <div className="rounded-full border-color-primary border-2 border-spacing-64 p-auto grid place-items-center w-[150px] aspect-square">
              <img
                src={images.Profile.src}
                alt=""
                className="rounded-full w-[90%] aspect-square p-1"
              />
            </div>
            <h2 className="text-2xl lg:text-3xl text-color-primary font-bold py-5 text-center">
              {name}
            </h2>
          </div>

          {["Bumps:", "Friends:", "Clans:"].map((item) => (
            <div>
              <h2 className="text-lg lg:text-2xl text-color-primary font-[500] py-0 sm:py-1 md:py-3">
                {item}
              </h2>
            </div>
          ))}
        </div>
        <div className="h-full w-[100%] md:w-[80%] flex flex-col gap-5">
          <div className="bg-bg-secondary h-[100%] md:h-[40%] rounded-3xl border-color-primary border-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-color-primary m-5">Clans</h2>
          </div>
          <div className="bg-bg-secondary h-[60%] rounded-3xl border-color-primary border-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-color-primary m-5">
              Your NFTs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
