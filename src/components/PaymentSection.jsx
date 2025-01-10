import React from "react";
import Image from "next/image";

const tripPackage = [
  "experience",
  "lorem ipsum dolor",
  "lorem ipsum dolor",
  "lorem ipsum dolor",
  "lorem ipsum dolor",
  "ipsum lorem dolor sit et",
];

const tripPackage2 = [
  { feature: "experience", available: true },
  { feature: "lorem ipsum dolor", available: true },
  { feature: "lorem ipsum dolor", available: false },
  { feature: "lorem ipsum dolor", available: false },
  { feature: "lorem ipsum dolor", available: false },
  { feature: "ipsum lorem dolor sit et", available: false },
];

const PaymentSection = () => {
  return (
    <section className="pt-14 pb-28 bg-background ">
      <div className=" max-w-[914px] mx-auto">
        <div className="flex flex-col items-center gap-6 width-[445px] mx-[234.5px]">
          <div className="welcome-text">Payment</div>
          <h2 className="text-[46px] text-greenVogue950 font-semibold leading-none text-center">
            You don’t have to break the bank
          </h2>
          <p className="text-darkBlue text-center font-normal pb-14 text-base leading-[130%]">
            See how lorem ipsum dolor sit
          </p>
        </div>
        <div className="flex gap-[44.2px] pt-14">
          {/* Left Box */}
          <div className="relative rounded-[10px] bg-blueVogue200 paymentshadow flex-1 pl-[44px] pt-[38px] pb-[70.62px]">
            <div className="absolute top-[57px] right-[38px] inline-flex p-[10px] bg-greenVogue950 items-center justify-center gap-[10px] rounded-[10px]">
              <p className="leading-[130%] text-white text-[16px]">from 787€</p>
            </div>
            <h4 className="text-4xl mb-[23px] w-[185px] h-[68px] text-greenVogue950 leading-[105%] tracking-[-0.64px]">
              Sailweek experience
            </h4>
            <div className="flex flex-col justify-center items-start gap-[12.174px] pt-[23px]">
              {tripPackage.map((item, index) => (
                <div key={index} className="flex gap-[6px] items-center">
                  <Image
                    height={20.87}
                    width={20.87}
                    alt="Checkmark"
                    src="/payments/icons/check-badge.svg"
                  />
                  <p className="text-greenVogue950 text-base font-normal leading-[130%]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Box */}
          <div className="rounded-[10px] bg-white paymentshadow flex-1 pl-[44px] pt-[38px] pb-[70.62px]">
            <h4 className="text-4xl mb-[23px] w-[185px] h-[68px] text-greenVogue950 leading-[105%] tracking-[-0.64px]">
              Sailweek experience
            </h4>
            <div className="flex flex-col justify-center items-start gap-[12.174px] pt-[23px]">
              {tripPackage2.map((item, index) => (
                <div key={index} className="flex gap-[6px] items-center">
                  <Image
                    height={20.87}
                    width={20.87}
                    alt="Checkmark"
                    src={
                      item.available
                        ? "/payments/icons/check-badge.svg"
                        : "/payments/icons/check-badge-gray.svg"
                    }
                  />
                  <p className="text-greenVogue950 text-base font-normal leading-[130%]">
                    {item.feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
