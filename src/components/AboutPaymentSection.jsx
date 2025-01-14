import React from "react";
import Image from "next/image";
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

const AboutPaymentSection = () => {
  return (
    <section className="relative bg-greenVogue950 ">
      <div className="absolute top-0 bottom-0 right-0 w-full mx-auto z-[1]">
        <Image
          src="/about_payment/Tekstura.svg"
          layout="fill"
          objectFit="cover"
          alt="Background Texture"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-[115px] pt-[93px] relative z-10">
        <h2 className="text-[46px] leading-none font-semibold text-center">
          Flexible payment
        </h2>
        <div className="flex items-start justify-center gap-[64px] pb-[121px]">
          {paymentProcess.map((payment, index) => (
            <PaymentCards
              key={index}
              {...payment}
              bgColor="white"
              iconColor="emerald100"
              secondaryColor="gray600"
              barColor="emerald500"
              barColorSec="white100"
            />
          ))}
        </div>
        <p className="text-center text-[14px] leading-[22px] mb-[33px] text-white200">
          NOTE: Only applies to bookings made a minimum of 95 days before the
          trip. For bookings made within 95 days before the trip, see our
          <span className="text-blueVogue400">Terms and conditions</span>.
        </p>
      </div>
    </section>
  );
};

export default AboutPaymentSection;
