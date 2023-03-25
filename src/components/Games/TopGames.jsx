import React from "react";
import Carousel from "./Carousel"

function TopGames() {    
  return (
    <div id="games" className="min-h-fit bg-gradient-to-b from-bg-primary to-bg-secondary text-color-primary pt-10 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold">Top Games</h2>
          <div className="h-[3px] w-[120%] bg-color-primary mt-[2px] rounded-xl"></div>
        </div>
        <div className="my-auto"><Carousel/></div>
      </div>
    </div>
  );
}

export default TopGames;
