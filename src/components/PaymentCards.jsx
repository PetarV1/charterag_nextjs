import React from "react";
import Bill from "./Bill";

const PaymentCards = ({ number, percentage, text, progress }) => {
  return (
    <div className="rounded-[10px] h-[220px] bg-white aboutpaymentshadow p-8">
      <Bill>{number}</Bill>
      <span className="text-gray600 mt-[23px] w-[52px] h-[20px] text-[28px] inline-block leading-none font-semibold">
        {percentage}
      </span>
      <span className="text-gray600 mt-[16px] h-[11px] text-base block leading-[130%] font-normal">
        {text}
      </span>
      <div className="w-[208px] mt-[22px] h-[8px] overflow-hidden rounded-[10px] bg-white100">
        <div
          style={{ width: `${progress}%` }}
          className="h-[8px] bg-emerald500"
        ></div>
      </div>
    </div>
  );
};

export default PaymentCards;
