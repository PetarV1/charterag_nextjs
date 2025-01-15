import React from "react";
import Image from "next/image";
import Link from "next/link";

const Route = ({ title, imgUrl, index }) => {
  return (
    <div className="w-100% rounded-xl overflow-hidden h-[404px] relative">
      <Image src={imgUrl} alt={title} layout="fill" />
      <div className="overlay absolute bottom-0 left-0 right-0 top-[127px]"></div>
      <div className="absolute flex justify-between items-center max-w-[calc(100%-108px)] w-full bottom-[46px]  mx-[54px]">
        <div className="flex flex-col items-start justify-end gap-6 pt-[7px] pr-[13px]">
          <p className="text-[20px] leading-[1.2] font-normal">
            From €710/person
          </p>

          <Link href={`/destination/${index}`}>
            <div className="group flex items-center gap-[5.65px] transition-all duration-300">
              <p className="text-[28px] font-semibold leading-none group-hover:text-blueVogue400 transform transition-all group-hover:scale-105">
                {title}
              </p>
              <Image
                src="/Chevron.svg"
                alt="Chevron"
                width={24}
                height={24}
                className="transition-transform duration-300 group-hover:translate-x-2 group-hover:rotate-90"
              />
            </div>
          </Link>
        </div>
        <div className="pt-[19px]">
          <div className="mb-[21px] flex items-center gap-[20px] justify-between">
            <p className="text-base font-normal leading-[1.3]">Party</p>
            <div className="w-[177px] h-[10px] relative overflow-hidden rounded-full bg-white">
              <div className="w-[50%] h-[10px] bg-blueVogue400"></div>
            </div>
          </div>
          <div className="flex items-center gap-[20px] justify-between">
            <p className="text-base  font-normal leading-[1.3]">Adventure</p>
            <div className="w-[177px] h-[10px] relative overflow-hidden rounded-full bg-white">
              <div className="w-[50%] h-[10px] bg-blueVogue400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route;
