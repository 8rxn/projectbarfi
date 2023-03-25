import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function NFTCards({ img, imgalt, name, desc }) {
  const [earned, setEarned] = useState(false);
  return (
    <div className="w-full bg-bg-primary p-2 rounded-bl-xl rounded-tr-xl border-[1px] border-color-primary flex flex-col sm:flex-row justify-start items-start gap-2">
      <div className="border-[1px] rounded-bl-md rounded-tr-md flex justify-center items-center h-16 w-14 text-color-primary">
        <AiOutlineQuestionCircle
          className={`text-3xl ${earned === true ? "hidden" : ""}`}
        />
        <img
          src={img}
          alt={imgalt}
          className={`object-cover ${earned === false ? "hidden" : ""}`}
        />
      </div>
      <div>
        <p className="text-color-primary text-xl font-bold">{name}</p>
        <p className="text-white text-base font-[500]">{desc}</p>
      </div>
    </div>
  );
}

export default NFTCards;
