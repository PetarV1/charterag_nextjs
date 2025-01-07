import React from "react";
import Image from "next/image";
import Card from "./Card";

const cardsData = [
  { title: "Sail", imgUrl: "/sail.png" },
  { title: "Party", imgUrl: "/party.png" },
  { title: "Explore", imgUrl: "/explore.png" },
  { title: "Relax", imgUrl: "/relax.png" },
];

const WelcomeSection = () => {
  return (
    <section className="welcome-section bg-[#062949]">
      <div className="container max-[1216px]:px-14">
        <div className="reviews flex max-lg:flex-col max-lg:gap-10 justify-between items-center pt-20 pb-14">
          <div className="flex items-center gap-[33px] h-[44px]">
            <Image src="/star.svg" alt="Star" width={44} height={42} />
            <div className="flex flex-col items-start gap-2">
              <span className="text-2xl leading-none font-medium">4.8/5</span>
              <p className="text-[14px] leading-none font-normal">
                Based on 325 reviews
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[20px] h-[44px]">
            <Image
              src="/facebook.svg"
              alt="Facebook Logo"
              width={56}
              height={42}
            />
            <div className="flex flex-col items-start gap-2">
              <span className="text-2xl leading-none font-medium">4.8/5</span>
              <p className="text-[14px] leading-none font-normal">
                Based on 325 reviews
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[34px] h-[44px]">
            <Image src="/Google.svg" alt="Google Logo" width={42} height={42} />
            <div className="flex flex-col items-start gap-2">
              <span className="text-2xl leading-none font-medium">4.8/5</span>
              <p className="text-[14px] leading-none font-normal">
                Based on 325 reviews
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col pt-14 max-w-[714px] mx-auto gap-6 pb-14">
          <div className="welcome-text">Welcome</div>
          <h2 className="text-[46px] font-semibold text-center leading-none">
            What is Charterag experience
          </h2>
          <p className="text-center px-14 text-[16px] leading-[1.3] font-normal">
            Join us for a week of sailing, unique adventures and exclusive
            parties in stunning locations. Explore new places daily. Dive into
            local culture. Dance the nights away. Leave with new friends and
            lifelong memories.
          </p>
        </div>
        <div className="cards flex flex-1 justify-between items-center gap-3 pt-[54px] pb-[112px]">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} imgUrl={card.imgUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
