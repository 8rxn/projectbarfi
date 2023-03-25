import React from "react";
import Button from "../shared/Button";
import images from "../../config/images";

function HeroSection() {
  return (
    <div className="h-screen bg-gradient-to-b from-bg-primary to-bg-secondary text-color-primary pt-10 flex flex-col items-center">
      <div className="flex flex-col items-center my-auto gap-y-2 md:gap-y-4 text-center">
        <h2 className=" text-3xl md:text-6xl font-bold ">
          GAMING MADE SOCIAL{" "}
        </h2>
        <p className="text-xl md:text-4xl font-semibold">
          JOIN A CLAN AND LEVEL UP YOUR GAMING JOURNEY
        </p>
        <div className="z-10">
          <Button>Join Clan</Button>
        </div>
      </div>
      <img
        src={images.Hero.src}
        alt={images.Hero.alt}
        className="md-4/5 md:w-2/5 relative animate-wiggle"
      />
      <img
        src={images.Bg.src}
        alt={images.Bg.alt}
        className="absolute top-[70%] md:top-[50%] lg:top-[30%]"
      />
    </div>
  );
}

export default HeroSection;
