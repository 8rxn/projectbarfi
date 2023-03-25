import React from "react";
import Card from "./Card";
import images from "../../config/images";

function Features() {
  return (
    <div id="features" className="min-h-screen bg-gradient-to-t from-bg-primary to-bg-secondary text-color-primary pt-10 flex flex-col items-center justify-center p-4">
      <div className="bg-[#ffffff1f] border-[2px] border-color-primary flex flex-col items-center rounded-md">
        <div className="flex flex-col justify-center items-center p-8 gap-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold">Features</h2>
            <div className="h-[3px] w-[120%] bg-color-primary mt-[2px] rounded-xl"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <Card src={images.FeatOne.src} alt={images.FeatOne.alt} text={"Chat"}/>
            <Card src={images.FeatThree.src} alt={images.FeatThree.alt} text={"Make Friends"}/>
            <Card src={images.FeatFour.src} alt={images.FeatFour.alt} text={"Compete"}/>
            <Card src={images.FeatTwo.src} alt={images.FeatTwo.alt} text={"Earn NFTs"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
