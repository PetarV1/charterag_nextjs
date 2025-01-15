import React from "react";
import Image from "next/image";

const CTAButton = ({ children }) => {
  return (
    <div className="inline-flex py-2 pl-[18px] pr-3 items-center gap-3 rounded-[50px] bg-white cursor-pointer">
      <button className="text-greenVogue950 text-base font-medium tracking-[1.219px] uppercase">
        {children}
      </button>
      <div className="flex w-[29px] p-[10px] flex-col justify-center items-center gap-[10px] rounded-[30px] bg-[#F0F8FF]">
        <Image
          src="/destinationspage/Vector.svg"
          height={8}
          width={4}
          alt="Arrow"
        />
      </div>
    </div>
  );
};

export default CTAButton;
