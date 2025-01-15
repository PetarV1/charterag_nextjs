import React from "react";
import Image from "next/image";
import Route from "./Route";
import Testimonials from "./Testimonials";

const routesData = [
  { title: "Party route", imgUrl: "/PartyRoute.png" },
  { title: "Ultra route", imgUrl: "/UltraRoute.png" },
  { title: "Greece route", imgUrl: "/GreeceRoute.png" },
  { title: "Adventure route", imgUrl: "/AdventureRoute.png" },
];

const DestinationsSection = () => {
  return (
    <section className="bg-background destinations-section">
      <div className="max-w-[1440px] w-full mx-auto relative overflow-hidden">
        <div className="absolute top-[1418px] bottom-[600px] z-[1] w-full mx-auto">
          <Image
            src="/Tekstura.svg"
            layout="fill"
            objectFit="cover"
            alt="Background Texture"
          />
        </div>
        <div className="container relative z-10">
          <div className=" flex justify-between items-center flex-col pt-[112px] pb-[60px] max-w-[714px] mx-[252px] gap-6">
            <div className="welcome-text">Destinations</div>
            <h2 className="text-[46px] font-semibold text-center leading-none text-greenVogue950">
              Whether it's a bash or bliss — the choice is yours
            </h2>
            <p className="text-center text-[16px] leading-[1.3] font-normal text-greenVogue950">
              On our customized sailing adventures, embracing the thrill of our
              party routes or unwinding on our relaxing voyages — crafting your
              perfect journey at sea has never been easier
            </p>
          </div>
          <div className="pt-[60px] grid gap-y-[78px] mb-[176px]">
            {routesData.map((route, index) => (
              <Route
                key={index}
                title={route.title}
                imgUrl={route.imgUrl}
                index={index + 1}
              />
            ))}
          </div>
        </div>
        <Testimonials />
      </div>
    </section>
  );
};

export default DestinationsSection;
