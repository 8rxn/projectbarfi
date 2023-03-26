import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import axios from "axios";

function NFTCards({ img, imgalt, name, desc, mintable, address }) {
  const [earned, setEarned] = useState(false);
  const [mintStatus, setMintStatus] = useState(false);
  const [mintableSts, setMintable] = useState(mintable);

  async function mintNFT() {


const options = {
  method: 'POST',
  url: 'https://api.verbwire.com/v1/nft/mint/mintFromMetadata',
  headers: {
    accept: 'application/json',
    'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
    'X-API-Key': 'sk_live_c615218c-e6be-4769-b0ca-3136f69d4fd3'
  },
  data: `-----011000010111000001101001\r\nContent-Disposition: form-data; name="quantity"\r\n\r\n1\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="chain"\r\n\r\ngoerli\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="imageUrl"\r\n\r\nhttps://ipfs.io/ipfs/bafkreicy4uowemmnnphzrrc5w2soxcrrsi7d76p62usn4fl46flffrpej4\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="name"\r\n\r\nStreakReward\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="contractAddress"\r\n\r\n0x5C35FAfa9BD49e273E94140D5092FaD4a6821cdb\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="recipientAddress"\r\n\r\n${address}\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="data"\r\n\r\ndata\r\n-----011000010111000001101001--\r\n\r\n`
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  }

  async function verifyNFT() {
    const options = {
      method: "GET",
      url: "https://api.verbwire.com/v1/nft/data/owned?walletAddress=0x171a893e5675092304ccC4bf0d2335d553ABD81A&chain=ethereum",
      headers: {
        accept: "application/json",
        "X-API-Key": "sk_live_c615218c-e6be-4769-b0ca-3136f69d4fd3",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function mintButton() {
    if (mintable == "true") {
      mintNFT();
    }
    if (mintable == "verify") {
      verifyNFT();
    }
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
        onClick={mintButton}
      >
        {mintableSts === "verify"
          ? "Verify"
          : mintableSts === "verified"
          ? "Verified"
          : mintableSts === "minted"
          ? "Minted"
          : "Mint"}
      </button>
    </div>
  );
}

export default NFTCards;
