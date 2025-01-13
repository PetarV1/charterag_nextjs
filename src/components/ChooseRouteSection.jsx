import React from "react";
import Image from "next/image";
import AccordionChild from "./AccordionChild";

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
    <section className="max-w-[1010px] mx-auto flex flex-col items-center gap-20 mt-[169px] mb-[111px]">
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
      <div className="routes-desc h-[685px] self-stretch bg-background rounded-[10px] outline outline-green-600 outline-solid">
        {/* Single Accordion */}
        <aside className="single-accordion bg-blueVogue200 rounded-[10px]">
          {/* Heading */}
          <div className="flex w-full items-center justify-between py-[19px] pl-8 pr-[29px]">
            <div className="w-[189.432px] h-[26.587px] flex items-center">
              <h4 className="text-[18px] font-semibold leading-[120%] text-green-950">
                Ultra Route
              </h4>
            </div>
            <button>
              <Image
                height={24}
                width={24}
                src="/destinationspage/chevron-down.svg"
                alt="Arrow Down"
              />
            </button>
          </div>

          <div className="w-[1010px] h-[352px] pb-16 px-8 flex flex-col items-start gap-[10px] rounded-[10px]">
            <div className="flex items-end gap-[69px]">
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
        <div className="flex w-[1010px] h-[60px] py-4 px-6 justify-between items-center rounded-[10px] bg-blueVogue200 mt-[39px]">
          <p className="text-greenVogue950 text-[18px] font-semibold leading-[120%] flex-1">
            Party Route
          </p>
          <Image
            height={24}
            width={24}
            src="/destinationspage/chevron-down.svg"
            alt="Arrow Down"
          />
        </div>
        <div className="flex w-[1010px] h-[60px] py-4 px-6 justify-between items-center rounded-[10px] bg-blueVogue200 mt-[25px]">
          <p className="text-greenVogue950 text-[18px] font-semibold leading-[120%] flex-1">
            Party Route
          </p>
          <Image
            height={24}
            width={24}
            src="/destinationspage/chevron-down.svg"
            alt="Arrow Down"
          />
        </div>
        <div className="flex w-[1010px] h-[60px] py-4 px-6 justify-between items-center rounded-[10px] bg-blueVogue200 mt-[25px]">
          <p className="text-greenVogue950 text-[18px] font-semibold leading-[120%] flex-1">
            Party Route
          </p>
          <Image
            height={24}
            width={24}
            src="/destinationspage/chevron-down.svg"
            alt="Arrow Down"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseRouteSection;
