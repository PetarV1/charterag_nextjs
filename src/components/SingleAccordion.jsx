"use client";
import { useState } from "react";
import React from "react";
import AccordionChild from "./AccordionChild";
import Image from "next/image";

const SingleAccordion = ({ accordionData }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <aside className="single-accordion bg-blueVogue200 rounded-[10px]">
      {/* Heading */}
      <div className="flex w-full items-center justify-between ">
        <div className="flex w-[1010px] h-[60px] py-4 px-6 justify-between items-center rounded-[10px] bg-blueVogue200">
          <h4 className="text-greenVogue950 text-[18px] font-semibold leading-[120%] flex-1">
            Ultra Route
          </h4>
          <button onClick={() => setAccordionOpen(!accordionOpen)}>
            <Image
              className={`rounded-[10px] transform transition-transform duration-300 ${
                accordionOpen ? "rotate-180" : "rotate-0"
              }`}
              height={24}
              width={24}
              src="/destinationspage/chevron-down.svg"
              alt="Arrow Down"
            />
          </button>
        </div>
      </div>

      <div
        className={`w-[1010px] flex px-8 flex-col items-start gap-[10px] rounded-[10px] transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "opacity-100 h-[352px] pb-16 pointer-events-auto visible"
            : "opacity-0 h-[0] pointer-events-none invisible"
        }`}
      >
        <div className="flex items-end gap-[69px] rounded-[10px]">
          <Image
            width={406}
            height={276}
            src="/destinationspage/ultranew.png"
            alt="Ultra"
          />
          <div className="w-[430px] h-[276px] grid grid-cols-2 gap-x-[49.85px] gap-y-[27px] items-center">
            {accordionData.map((data, index) => {
              return (
                <AccordionChild
                  text={data.text}
                  progress={data.progress}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SingleAccordion;
