import React from "react";
import { useState } from "react";
import images from "../../config/images";

const faqs = [
  {
    question: "What is TribeTango?",
    answer:
      "TribeTango is a platform that helps gamers to connect with each other, chat, have fun and play games with the community by joining groups aka clans of the particular game. We also offer NFTs to users.",
  },
  {
    question: "Is TribeTango completely free to use?",
    answer:
      "Yes, TribeTango is completely free to use, but we also offer in-app purchases to help you stand out among others in the gaming community.",
  },
  {
    question: "How do I earn NFTs from the TribeTango?",
    answer:
      "You can earn NFTs from our website by completing certain tasks that we have set up. These tasks could be anything like being promoted or maintaining streaks with other users or even daily check-ins. We also have a few unique NFTs that you can buy from our website, these NFTs are exclusive and can only be obtained by purchasing them from our platform.",
  },
  {
    question: "What is this daily check-ins systems?",
    answer:
      "We offer a daily check-in system that rewards users with various perks such as in-game titles, streaks, and other bonuses like NFTs. So, make sure to check-in every day to reap the benefits.",
  },
  {
    question: "How do I join a Clan for a particular game?",
    answer:
      "To join a clan for a particular game you can search for it in Games section of the website and join from there. If you don't see a clan for a game of your choice then you can mail us to add it.",
  },
  {
    question: "What is this title system in TribeTango",
    answer:
      "Based on your activity, you will get a title. Till now we have only 3 title (NPC, Muggle and Wizard). When you join our community for the first time, you join as a Non-Performing Character (NPC) and as you do the tasks you will get promoted to Muggle and then Wizard.",
  },
];

function FAQ() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);
  return (
    <div id="faq" className="box-border min-h-fit md:min-h-screen bg-gradient-to-t from-bg-primary to-bg-secondary text-color-primary pt-10 flex flex-col justify-start items-center md:justify-center p-4 pb-9 md:pb-4">
      <div className="flex flex-col justify-center items-center p-8 gap-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold">FAQS</h2>
          <div className="h-[3px] w-[120%] bg-color-primary mt-[2px] rounded-xl"></div>
        </div>
        <div className="flex justify-center items-start md:gap-8">
          <div className="hidden lg:block">
            <img
              src={images.FAQ.src}
              alt={images.FAQ.alt}
              className="h-[600px]"
            />
          </div>
          <div className="">
            <div className="w-[80vw] lg:w-[50vw]">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 text-left text-lg font-medium bg-bg-secondary rounded-lg shadow-md focus:outline-none border-[2px] border-color-primary"
                      onClick={() =>
                        setActiveQuestionIndex(
                          index === activeQuestionIndex ? -1 : index
                        )
                      }
                    >
                      <span>{faq.question}</span>
                      <svg
                        className={`w-5 h-5 ${
                          index === activeQuestionIndex
                            ? "transform rotate-180"
                            : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {index === activeQuestionIndex && (
                      <div className="mt-2 bg-bg-secondary border-[1px] border-white rounded-lg shadow-md">
                        <div className="px-4 py-3">
                          <p className="text-lg">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
