"use client";

import CTAButton from "./CTAButton";
import React, { useState } from "react";
import Image from "next/image";

const ImageSlider = ({ data, index }) => {
  const isOddIndex = index % 2 !== 0;
  const [imageIndex, setImageIndex] = useState(0);

  const prevSlide = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setImageIndex((prevIndex) =>
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const currentImage = data.images[imageIndex]?.image;

  return (
    <div className="w-full h-[592px] flex justify-between">
      <div
        className={`w-[555px] flex flex-col items-end gap-6 ${
          isOddIndex ? "" : "order-2"
        }`}
      >
        <div className="relative h-[500px] w-[555px]">
          {/* Provjera slika iz array-a */}
          {data.images.map((image, idx) => {
            if (!image || !image.image) return null;
            return (
              <Image
                key={idx}
                className="rounded-[10px]"
                layout="fill"
                objectFit="cover"
                src={image.image}
                alt="Slider photo"
              />
            );
          })}

          {currentImage && (
            <Image
              className="rounded-[10px]"
              layout="fill"
              objectFit="cover"
              src={currentImage}
              alt="Slider photo"
            />
          )}

          <div className="absolute w-[477px] flex justify-between left-[39px] top-[232px]">
            <Image
              onClick={prevSlide}
              className="cursor-pointer"
              width={36}
              height={36}
              src="/destinationspage/LeftArrowButton.svg"
              alt="Left Arrow"
            />
            <Image
              onClick={nextSlide}
              className="cursor-pointer"
              width={36}
              height={36}
              src="/destinationspage/ArrowRightButton.svg"
              alt="Right Arrow"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          <h5 className="text-[18px] font-semibold leading-[120%] text-greenVogue950">
            Solo
          </h5>

          <p className="text-base leading-[130%] text-greenVogue950 w-full">
            Book a single spot and share a bunk bed cabin with a person of the
            same gender. We have a lot of single travelers just like you.
          </p>
        </div>
      </div>
      <div
        className={`flex w-[456px] flex-col items-start gap-8 mt-[125px] ${
          isOddIndex ? "order-2" : ""
        }`}
      >
        <div className="flex flex-col items-start gap-6">
          <h4 className="text-[32px] text-greenVogue950 font-semibold leading-[105%] tracking-[-0.64px]">
            Solo, Cabin or Group of Friends
          </h4>

          <p className="text-base leading-[130%] text-greenVogue950">
            Solo, with a friend or with the whole crew, we got it all covered!
            Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio
            amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.
          </p>

          <CTAButton>{data.CTAtext}</CTAButton>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
