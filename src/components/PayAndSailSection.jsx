import React from "react";
import PaymentCards from "./PaymentCards";

const paymentProcess = [
  {
    number: 1,
    percentage: "10%",
    text: "pay when booking",
    progress: 10,
  },
  {
    number: 2,
    percentage: "40%",
    text: "pay 30 days after booking",
    progress: 40,
  },
  {
    number: 3,
    percentage: "50%",
    text: "pay 60 days before trip",
    progress: 100,
  },
];

const PayAndSailSection = () => {
  return (
    <section className="payandsail-section max-w-[994px] min-h-[448px] mx-auto mt-[111px] bg-background pb-[80px]">
      {/* Title */}
      <div className="title w-[446px] mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col items-center self-stretch gap-[17px]">
          <div className="welcome-text">Step 3.</div>
          <h2 className="text-center text-[46px] font-semibold leading-[100%] text-greenVogue950">
            Pay and sail
          </h2>
        </div>
        <p className="text-center font-normal text-base leading-[130%] text-greenVogue950">
          We make it easy to split the cost between your crew and pay in
          instalments.
        </p>
      </div>
      {/* Payment Cards */}
      <div className="flex items-start justify-center gap-[64px] mt-[79px]">
        {paymentProcess.map((payment, index) => (
          <PaymentCards
            key={index}
            {...payment}
            bgColor="blueVogue200"
            iconColor="blueVogue100"
            secondaryColor="greenVogue950"
            barColor="greenVogue950"
            barColorSec="white"
          />
        ))}
      </div>
    </section>
  );
};

export default PayAndSailSection;
