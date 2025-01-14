import React from "react";
import Bill from "./Bill";

const PaymentCards = ({
  number,
  percentage,
  text,
  progress,
  bgColor,
  iconColor,
  secondaryColor,
  barColor,
  barColorSec,
}) => {
  return (
    <div
      className={`rounded-[10px] h-[220px] bg-${bgColor} aboutpaymentshadow p-8`}
    >
      <Bill iconColor={iconColor} barColor={barColor}>
        {number}
      </Bill>
      <span
        className={`text-${secondaryColor} mt-[23px] w-[52px] h-[20px] text-[28px] inline-block leading-none font-semibold`}
      >
        {percentage}
      </span>
      <span
        className={`text-${secondaryColor} mt-[16px] h-[11px] text-base block leading-[130%] font-normal`}
      >
        {text}
      </span>
      <div
        className={`w-[208px] mt-[22px] h-[8px] overflow-hidden rounded-[10px] bg-${barColorSec}`}
      >
        <div
          style={{ width: `${progress}%` }}
          className={`h-[8px] bg-${barColor}`}
        ></div>
      </div>
    </div>
  );
};

export default PaymentCards;
