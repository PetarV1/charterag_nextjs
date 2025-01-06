import React from "react";
import Image from "next/image";
import Route from "./Route";

const routesData = [
  { title: "Party route", imgUrl: "/PartyRoute.png" },
  { title: "Ultra route", imgUrl: "/UltraRoute.png" },
  { title: "Greece route", imgUrl: "/GreeceRoute.png" },
  { title: "Adventure route", imgUrl: "/AdventureRoute.png" },
];

const DestinationsSection = () => {
  return (
    <section className="destinations-section relative bg-[#ECFBFF]">
      <div className="absolute top-[600px] left-0 w-full h-full">
        <Image src="/Tekstura.svg" layout="fill" alt="Background Texture" />
      </div>
      <div className="container">
        <div className="flex justify-between items-center flex-col pt-[112px] pb-[60px] max-w-[714px] mx-[252px] gap-6">
          <div className="welcome-text">Destinations</div>
          <h2 className="text-[46px] font-semibold text-center leading-none text-[#062949]">
            Whether it’s a bash or bliss — the choice is yours
          </h2>
          <p className="text-center text-[16px] leading-[1.3] font-normal text-[#062949]">
            On our customized sailing adventures, embracing the thrill of our
            party routes or unwinding on our relaxing voyages — crafting your
            perfect journey at sea has never been easier
          </p>
        </div>
        <div className="pt-[60px] grid gap-y-[78px] pb-[128px]">
          {routesData.map((route, index) => (
            <Route key={index} title={route.title} imgUrl={route.imgUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
