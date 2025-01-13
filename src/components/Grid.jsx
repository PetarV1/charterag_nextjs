import React from "react";
import Image from "next/image";

const Grid = ({ routeHighlights }) => {
  return (
    <div className="mt-[80px] grid grid-cols-3 gap-y-[48px] gap-x-[52px] w-full h-auto">
      {routeHighlights.map((route, index) => {
        return (
          <div
            key={index}
            className="w-[332px] flex flex-col items-start gap-8 self-stretch"
          >
            <div className="h-[251px] w-[332px] relative">
              <Image
                className="rounded-[10px] route-drop-shadow"
                objectFit="cover"
                layout="fill"
                src={route.imgUrl}
                alt={route.title}
              />
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch">
              <h4 className="text-greenVogue950 text-2xl font-medium leading-none">
                {route.title}
              </h4>
              <p className="text-greenVogue950 text-[14px] font-normal leading-[22px]">
                {route.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
