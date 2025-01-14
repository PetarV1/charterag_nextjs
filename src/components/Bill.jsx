import React from "react";
import Image from "next/image";
//         src="/destinationspage/PayAndSailBill.svg"

const Bill = ({ children, iconColor, barColor }) => {
  let iconSrc = "";

  if (iconColor === "emerald100") {
    iconSrc = "/about_payment/icons/aboutpayment1.svg";
  } else {
    iconSrc = "/destinationspage/PayAndSailBill.svg";
  }

  return (
    <div
      className={`w-[56px] h-[56px] relative rounded-full flex items-center bg-${iconColor} justify-center`}
      style={{ backgroundColor: `var(--${iconColor})` }}
    >
      <Image width={34} height={21} alt="Circle" src={iconSrc} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className={`
            text-${barColor}
            text-base
            align-middle
            font-semibold
            leading-[130%]
          `}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default Bill;
