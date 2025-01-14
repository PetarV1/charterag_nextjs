import React from "react";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="relative max-w-[1440px] w-full mx-auto pb-[71px]">
      <div className="absolute shadow-gradient left-0 right-0 top-[-49px] h-[177px]"></div>
      <Image
        src="/Guests.png"
        alt="Testimonials Background"
        width={1440}
        height={796}
      />
      <div className="absolute top-[250px] right-[173px]">
        <h3 className="text-greenVogue950 text-[32px] font-semibold leading-[105%] tracking-[-0.64px]">
          Ready to go?
        </h3>
        <p className="mt-6 mb-[38px] text-greenVogue950 leading-[130%] w-[415px]">
          Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio
          amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.
        </p>
        <div className="inline-flex py-2 pl-[18px] pr-3 items-center gap-3 rounded-[50px] bg-white cursor-pointer">
          <button className="text-greenVogue950 text-base font-medium tracking-[1.219px] uppercase">
            Explore our destinations
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
      </div>
    </div>
  );
};

export default CallToAction;
