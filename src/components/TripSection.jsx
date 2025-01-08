import React from "react";
import Image from "next/image";

const TripSection = () => {
  const tripImages = [
    "/trips/trip1.png",
    "/trips/trip2.png",
    "/trips/trip3.png",
    "/trips/trip4.png",
    "/trips/trip5.png",
    "/trips/trip6.png",
    "/trips/trip7.png",
    "/trips/trip8.png",
  ];
  return (
    <section className="pt-28 pb-14 bg-[#ECFBFF]">
      <div className="container">
        <div className="flex flex-col items-center gap-6 mx-[246px]">
          <h2 className="text-[46px] h-[90px] font-semibold leading-none text-[#062949] text-center">
            Come live
            <br /> your best life
          </h2>
          <p className="text-center text-[#062949] leading-[130%] text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-4 gap-y-3 mt-[95px]">
          {tripImages.map((src, index) => (
            <Image
              className="rounded-[10px]"
              key={index}
              src={src}
              alt={`Trip Image ${index + 1}`}
              width={265}
              height={241}
            />
          ))}
        </div>
        <div className="mt-[56px] flex item-start gap-[71px]">
          {/* 1 */}
          <div className="flex flex-col items-start gap-2 ">
            <div className="flex py-[10px] px-0 items-center gap-[10px] height-[46px]">
              <Image
                height={26}
                width={26}
                alt="BoatIcon"
                src="/trips/icons/BoatIcon.svg"
              />
              <h4 className="text-[#062949] leading-none text-2xl font-medium">
                A trip like no other
              </h4>
            </div>
            <p className="text-normal text-[#062949] h-[41px] leading-[130%] font-normal">
              Spend unforgettable 7 days at sea with your crew at your own pace
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 ">
            {/* 2 */}
            <div className="flex py-[10px] px-0 items-center gap-[10px] height-[46px]">
              <Image
                height={26}
                width={26}
                alt="BoatIcon"
                src="/trips/icons/BoatIcon.svg"
              />
              <h4 className="text-[#062949] leading-none text-2xl font-medium">
                Active vacation
              </h4>
            </div>
            <p className="text-normal text-[#062949] h-[41px] leading-[130%] font-normal">
              Indulge yourself in dozen of parties and activities on your trip
            </p>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-start gap-2 ">
            <div className="flex py-[10px] px-0 items-center gap-[10px] height-[46px]">
              <Image
                height={26}
                width={26}
                alt="BoatIcon"
                src="/trips/icons/BoatIcon.svg"
              />
              <h4 className="text-[#062949] leading-none text-2xl font-medium">
                Bonding
              </h4>
            </div>
            <p className="text-normal text-[#062949] h-[41px] leading-[130%] font-normal">
              Meet people from all over the world, discover new friends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripSection;
