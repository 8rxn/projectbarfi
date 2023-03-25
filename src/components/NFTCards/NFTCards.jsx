import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function NFTCards({ img, imgalt, name, desc, mintable, address }) {
  const [earned, setEarned] = useState(false);
  const [mintStatus, setMintStatus] = useState(false);

  async function mintNFT() {
    const FormData = require("form-data");
    const fetch = require("node-fetch");
    const formData = new FormData();

    formData.append("quantity", "1");
    formData.append("chain", "goerli");
    formData.append("allowPlatformToOperateToken", "true");
    formData.append(
      "contractAddress",
      "0x5C35FAfa9BD49e273E94140D5092FaD4a6821cdb"
    );
    formData.append(
      "metadataUrl",
      "https://ipfs.io/ipfs/bafkreiapcd66nwkhj4meozmkewv2i6f33y6rfzxu6p7mfl3m4lj5uabpou"
    );
    formData.append(
      "recipientAddress",
      address
    );
    formData.append("contractType", "nft721");

    const url = "https://api.verbwire.com/v1/nft/mint/mintFromMetadataUrl";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "X-API-Key": "sk_live_c615218c-e6be-4769-b0ca-3136f69d4fd3",
      },
    };

    options.body = formData;

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  }

  return (
    <div className="w-full bg-bg-primary p-2 rounded-bl-xl rounded-tr-xl border-[1px] border-color-primary flex flex-col sm:flex-row justify-between items-start gap-2">
      <div className="flex gap-2 flex-col md:flex-row">
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
      <button
        className={`rounded-xl py-1 px-4 border-[1px] border-color-primary justify-self-end ${
          mintable === "false"
            ? "bg-slate-400 text-bg-primary cursor-not-allowed"
            : "text-color-primary bg-bg-secondary"
        }`}
        onClick = {mintButton}
      >
        
          {
            mintable==="verify"?"Verify":mintable==="verified"?"Verified":"Mint" 
          }

      </button>
    </div>
  );
}

export default NFTCards;
