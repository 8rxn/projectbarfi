import { useAuth } from "@arcana/auth-react";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import images from "../../config/images";
import NFTCards from "../NFTCards/NFTCards";
import Card from "./ClanCard";
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
            <h2 className="text-2xl lg:text-3xl text-color-primary font-bold pt-5 text-center">
              {name}
            </h2>
            <h3 className="text-lg font-normal text-color-secondary">( Wizard )</h3>
          </div>

          {["Bumps: 62", "Friends: 34", "Clans: 2"].map((item) => (
            <div>
              <h2 className="text-lg lg:text-2xl text-color-primary font-[500] py-0 sm:py-1 md:py-3">
                {item}
              </h2>
            </div>
          ))}
        </div>
        <div className="h-full w-[100%] md:w-[80%] flex flex-col gap-5">
          <div className="bg-bg-secondary h-[100%] md:h-[40%] rounded-3xl border-color-primary border-2 p-5">
            <h2 className="text-2xl sm:text-4xl font-bold text-color-primary mb-3">
              Clans
            </h2>
            <div className="flex flex-col lg:flex-row h-[80%] sm:h-[60%] gap-2 p-4 sm:p-1 overflow-x-hidden md:overflow-x-auto overflow-y-auto lg:overflow-y-hidden">
              <Card text={"BGMI"} link={"bgmi"} toggleProfile={toggleProfile} />
              <Card text={"FreeFire"} link={"freefire"} toggleProfile={toggleProfile}/>
              <Card text={"Valorant"} link={"valorant"} toggleProfile={toggleProfile}/>
            </div>
          </div>
          <div className="bg-bg-secondary h-[80%] sm:h-[60%] rounded-3xl border-color-primary border-2 p-5">
            <h2 className="text-2xl sm:text-4xl font-bold text-color-primary mb-3">
              Your NFTs
            </h2>
            <div className="flex flex-col h-[80%] w-full overflow-y-scroll p-4 sm:p-1 gap-2">
              <NFTCards
                name={"Pupil"}
                desc={"Levelled up to become a Muggle"}
              />
              <NFTCards
                name={"Well Seasoned"}
                desc={"Levelled up to become a wizard"}
              />
              <NFTCards
                name={"The Lurker"}
                desc={"Made a check-in streak of 30 days"}
              />
              <NFTCards
                name={"Master Bump-er"}
                desc={"Made a bump streak for 15 days"}
              />
              <NFTCards
                name={"Social Butterfly"}
                desc={"Messaged daily in a clan for 7 days straight"}
              />
              <NFTCards
                name={"The Chatterbox"}
                desc={"Spent a total of 100 hours chatting in clan"}
              />
              <NFTCards
                name={"The Chatty Cathy"}
                desc={"Active for 7 days in three clans"}
              />
              <NFTCards
                name={"Trend-Setter"}
                desc={"Helped to introduce a new game"}
              />
              <NFTCards name={"Master Minter"} desc={"Win all free NFTs"} />
              <NFTCards
                name={"Big Spender"}
                desc={"Bought an NFT through in-app purchases"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
