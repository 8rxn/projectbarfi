import React from "react";
import { useState } from "react";
import images from "../../config/images";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra enim ipsum, ut consectetur nulla blandit vel. Nulla varius elit at justo placerat pharetra. Sed convallis ullamcorper nisl vitae aliquam.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra enim ipsum, ut consectetur nulla blandit vel. Nulla varius elit at justo placerat pharetra. Sed convallis ullamcorper nisl vitae aliquam.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra enim ipsum, ut consectetur nulla blandit vel. Nulla varius elit at justo placerat pharetra. Sed convallis ullamcorper nisl vitae aliquam.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra enim ipsum, ut consectetur nulla blandit vel. Nulla varius elit at justo placerat pharetra. Sed convallis ullamcorper nisl vitae aliquam.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra enim ipsum, ut consectetur nulla blandit vel. Nulla varius elit at justo placerat pharetra. Sed convallis ullamcorper nisl vitae aliquam.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra enim ipsum, ut consectetur nulla blandit vel. Nulla varius elit at justo placerat pharetra. Sed convallis ullamcorper nisl vitae aliquam.",
  },
];

function FAQ() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);
  return (
    <div className="box-border min-h-screen bg-gradient-to-t from-bg-primary to-bg-secondary text-color-primary pt-10 flex flex-col md:justify-start items-center md:justify-center p-4">
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
