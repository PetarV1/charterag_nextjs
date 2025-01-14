import React from "react";
import ImageSlider from "./ImageSlider";

const sliderData = [
  {
    images: [
      { image: "/destinationspage/imageslider_1.jpeg" },
      { image: "/destinationspage/image_slider2.png" },
    ],
    title: "Solo",
    description:
      "Book a single spot and share a bunk bed cabin with a person of the same gender. We have a lot of single travelers just like you.",
  },
  {
    images: [
      { image: "/destinationspage/imageslider_1.jpeg" },
      { image: "/destinationspage/image_slider2.png" },
    ],
    title: "Solo",
    description:
      "Book a single spot and share a bunk bed cabin with a person of the same gender. We have a lot of single travelers just like you.",
  },
  {
    images: [
      { image: "/destinationspage/imageslider_1.jpeg" },
      { image: "/destinationspage/image_slider2.png" },
    ],
    title: "Solo",
    description:
      "Book a single spot and share a bunk bed cabin with a person of the same gender. We have a lot of single travelers just like you.",
  },
];

const ChooseCrewSection = () => {
  return (
    <section className="crew-section max-w-[1100px] mx-auto flex flex-col items-center gap-28 mt-[111px] bg-background">
      {/* Title */}
      <div className="title w-[446px] mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col items-center self-stretch gap-[17px]">
          <div className="welcome-text">Step 2.</div>
          <h2 className="text-center text-[46px] font-semibold leading-[100%] text-greenVogue950">
            Choose your crew
          </h2>
        </div>
        <p className="text-center font-normal text-base leading-[130%] text-greenVogue950">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      {sliderData.map((data, index) => {
        return <ImageSlider data={data} key={index} />;
      })}
    </section>
  );
};

export default ChooseCrewSection;
