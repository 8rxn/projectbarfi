import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useParams } from "react-router";
import { db } from "../../firebaseconfig";
import {
  collection,
  orderBy,
  limit,
  query,
  doc,
  getDocs,
  onSnapshot,
  serverTimestamp,setDoc
} from "firebase/firestore";

import images from '../config/images'

function Message({item,senderPublicKey}) {

  return (
    <div className="flex bg-bg-primary w-fit p-2 gap-2 rounded-r-xl rounded-bl-xl shadow-lg">
      <h3 className="text-xs text-color-secondary">({item?.role?item?.role:"NPC"})</h3>
      <h2 className="text-lg text-white">{item?.publicKey===senderPublicKey?"You":item?.name}:</h2>
      {/* <h3>{new Date(item.createdAt)}</h3> */}
      <h3 className="text-color-primary">{item?.text}</h3>
    </div>
  );
}

function Clan({senderName,publicKey}) {

   const clanLogoUrl=(id)=>{
    if(id==="bgmi"){
        return images.BGMI.src
    }
    else if(id==="freefire"){
        return images.FreeFire.src
    }
    else if(id==="valorant"){
        return images.Valorant.src
    }
    else if(id==="clashofclans"){
        return images.ClashOfClans.src
    }
    else if(id==="grandtheftauto"){
        return images.GTA.src
    }
    else{

        if(id==="smashkarts"){
            return images.SmashKarts.src
        }
    }
    return ""
   }

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const clanRef = collection(db, `${id}`);
  const q = query(clanRef, orderBy("createdAt"), limit(25));

  const senderPublicKey=publicKey;


  //   const getData = async () => {
  //     const querySnapshot = await getDocs(q);
  //     const data= []
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       data.push(doc.data())
  //     });
  //     setMessages(data);
  //   };

//   useEffect(() => {
//     messages?.map((item) => {
//       console.log(item?.createdAt.toUTCString());
//     });
//   }, [messages]);

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setMessages(data);
  });


  const sendMessage=async()=>{
    const sendData={
        createdAt: serverTimestamp(),
        name: senderName,
        publicKey: senderPublicKey ,
        text : message || "Message not sent due to undefined user"
    }
    await setDoc(doc(clanRef),sendData );

  }

  return (
    <div className="h-screen flex w-full bg-bg-primary gap-10 p-10">
      <div className="h-full w-[20%] md:flex flex-col items-center justify-center bg-bg-secondary border-color-primary border-2 rounded-3xl hidden">
        <div className="flex items-center flex-col">
          <div className="rounded-full  border-color-primary border-2 border-spacing-64 p-auto grid place-items-center w-[85%] aspect-square">
            <img
              src={clanLogoUrl(id)}
              alt="Clan Logo"
              className="rounded-full w-[92%] aspect-square "
            />
          </div>
          <h2 className="text-3xl text-color-primary font-bold py-5 text-center">
            {id}
          </h2>
        </div>

        {["Total Members: 16", "Online: 4"].map((item) => (
          <div>
            <h2 className="text-xl text-color-primary/80 font-bold py-5">
              {item}
            </h2>
          </div>
        ))}
      </div>
      <div className="h-full md:w-[80%] w-[100%] flex flex-col gap-10 overflow-hidden rounded-3xl">
        <div className="bg-bg-secondary h-[90%] rounded-3xl border-color-primary border-2 p-2 overflow-auto">
          <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-color-primary m-5">
            Chat
          </h2>
          <div className="flex flex-col gap-1">
            {messages.map((item) => (
              <Message key={item.id} item={item} senderPublicKey={senderPublicKey}></Message>
            ))}
          </div>
        </div>
        <form className="w-[100%] flex sm:flex-row items-center flex-col md:gap-10 sm:gap-5 gap-2" onSubmit={(e)=>{e.preventDefault(); if(senderName!==""){sendMessage()}else{console.error("Name is undefined. Please Login Again");}}}>
          <input
            id="#chatinput"
            placeholder="Your Message"
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
            className="bg-bg-secondary md:h-[70%] h-[50%] w-full rounded-2xl border-color-primary border-2 md:text-xl text-md font-semibold p-8 text-color-primary focus:outline-none"
          />
          <button type="submit" className="border-2 rounded-2xl border-color-primary text-color-primary md:text-xl text-md h-[70%]  hover:bg-gradient-to-r from-color-primary to-color-secondary hover:text-bg-primary hover:font-bold md:w-40 w-32 py-2 px-5 ease-in duration-150 hover:border-none">
            {" "}
            Send <AiOutlineSend className=" inline-block  " />{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Clan;
