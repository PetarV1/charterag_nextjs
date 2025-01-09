import React from "react";
import Image from "next/image";

const Bill = ({ children }) => {
  return (
    <div className="w-[56px] h-[56px] bg-[#DBFDEC] relative rounded-full flex items-center justify-center">
      <Image
        width={34}
        height={21}
        alt="Circle"
        src="/about_payment/icons/aboutpayment1.svg"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className="
            text-[#1DC072]
            text-base
            align-middle
            font-semibold
            leading-[130%]
          "
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default Bill;
