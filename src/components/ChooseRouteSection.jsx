"use client";
import React, { useState } from "react";
import Image from "next/image";
import SingleAccordion from "./SingleAccordion";

const accordions = [
  { text: "abc" },
  { text: "abc" },
  { text: "abc" },
  { text: "abc" },
];

const accordionData = [
  {
    text: "Organised parties",
    progress: "100%",
  },
  {
    text: "Sailweek Regatta",
    progress: "100%",
  },
  {
    text: "Swim Stops",
    progress: "60%",
  },
  {
    text: "Sightseeing",
    progress: "50%",
  },
  {
    text: "Local cuisine",
    progress: "0%",
  },
  {
    text: "Wine tasting",
    progress: "0%",
  },
  {
    text: "Island hopping",
    progress: "20%",
  },
  {
    text: "Exploring cities",
    progress: "10%",
  },
  {
    text: "Cliff jumping",
    progress: "40%",
  },
];

const ChooseRouteSection = () => {
  return (
    <section className="max-w-[1010px] mx-auto flex flex-col items-center gap-20 mt-[169px]">
      {/* Title */}
      <div className="title w-[446px] mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col items-center self-stretch gap-[17px]">
          <div className="welcome-text">Step 1.</div>
          <h2 className="text-center text-[46px] font-semibold leading-[100%] text-greenVogue950">
            Choose your route
          </h2>
        </div>
        <p className="text-center font-normal text-base leading-[130%] text-greenVogue950">
          Explore what you can get for in each route
        </p>
      </div>
      {/* Accordions */}
      <div className="routes-desc flex flex-col gap-[25px] self-stretch bg-background rounded-[10px]">
        {/* Single Accordion */}
        {accordions.map((accordion, index) => {
          return (
            <SingleAccordion
              key={index}
              accordion={accordion}
              accordionData={accordionData}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ChooseRouteSection;
