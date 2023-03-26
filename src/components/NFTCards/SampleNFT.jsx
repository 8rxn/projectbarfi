import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function NFTCards() {
  const [mint, setMint] = useState(false);
  const [nft, setNFT]= useState(false);
  const handleClick = ()=> {
    setMint(true);
    setNFT(true);
  }

  return (
    <div className="w-full bg-bg-primary p-2 rounded-bl-xl rounded-tr-xl border-[1px] border-color-primary flex flex-col sm:flex-row justify-between items-start gap-2">
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="border-[1px] rounded-bl-md rounded-tr-md flex justify-center items-center h-16 w-14 text-color-primary">
          <img
            src="https://ipfs.io/ipfs/bafkreicy4uowemmnnphzrrc5w2soxcrrsi7d76p62usn4fl46flffrpej4"
            alt="NFT"
            className={`object-cover ${nft === false ? "hidden" : ""}`}
          />
          <AiOutlineQuestionCircle
            className={`text-3xl transition-2 delay-300 ${nft === true ? "hidden" : ""}`}
          />
        </div>
        <div>
          <p className="text-color-primary text-xl font-bold">Well Seasoned</p>
          <p className="text-white text-base font-[500]">Levelled up to become a muggle</p>
        </div>
      </div>
      <button
        className={`rounded-xl py-1 px-4 border-[1px] text-color-primary border-color-primary justify-self-end ${mint === false ? "hidden" : ""}`}
      >
        Minted!
      </button>
      <button
        className={`rounded-xl py-1 px-4 border-[1px] text-color-primary border-color-primary justify-self-end ${mint === false ? "" : "hidden"}`}
        onClick={handleClick}>
        Mint
      </button>
    </div>
  );
}

export default NFTCards;
