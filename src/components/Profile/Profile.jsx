import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import images from "../../config/images";

const Profile = ({ toggleProfile }) => {
  return (
    <div className="w-[80%] h-[90%] rounded-2xl  bg-bg-primary">
      <div
        className="right-0 relative top-0 flex justify-end m-5 text-color-primary text-4xl cursor-pointer"
        onClick={toggleProfile}
      >
        <AiFillCloseCircle />
      </div>

      <div className="w-[100%] h-[90%] p-5 flex gap-10">
        <div className="h-full w-[20%] flex flex-col items-center justify-center bg-bg-secondary border-color-primary border-2 rounded-3xl">
          <div className="flex items-center flex-col">
            <div className="rounded-full border-color-primary border-2 border-spacing-64 p-auto grid place-items-center w-[85%] aspect-square">
              <img
                src={images.FAQ.src}
                alt=""
                className="rounded-full w-[92%] aspect-square "
              />
            </div>
            <h2 className="text-3xl text-color-primary font-bold py-5 text-center">
              ProfileName
            </h2>
          </div>

          {["Bumps:", "Friends:", "Clans:"].map((item) => (
            <div>
              <h2 className="text-2xl text-color-primary font-bold py-5">
                {item}
              </h2>
            </div>
          ))}
        </div>
        <div className="h-full  w-[80%] flex flex-col gap-10">
          <div className="bg-bg-secondary h-[40%] rounded-3xl border-color-primary border-2">
            <h2 className="text-4xl font-bold text-color-primary m-5">Clans</h2>
          </div>
          <div className="bg-bg-secondary h-[60%] rounded-3xl border-color-primary border-2">
            <h2 className="text-4xl font-bold text-color-primary m-5">
              Your NFTs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
