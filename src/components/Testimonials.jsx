"use client";
import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";

const testimonials = [
  {
    name: "Courtney Henry",
    image: "/profile1.jpg",
    rating: 5,
    title: "Amazing experience",
    text: "Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla.",
  },
  {
    name: "John Doe",
    image: "/profile2.jpg",
    rating: 5,
    title: "Excellent service",
    text: "Eu ac lorem eleifend diam tellus magnis volutpat nulla.",
  },
  {
    name: "John Doe",
    image: "/profile2.jpg",
    rating: 5,
    title: "Excellent service",
    text: "Eu ac lorem eleifend diam tellus magnis volutpat nulla.",
  },
  {
    name: "John Doe",
    image: "/profile2.jpg",
    rating: 5,
    title: "Excellent service",
    text: "Eu ac lorem eleifend diam tellus magnis volutpat nulla.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="absolute shadow-gradient left-0 right-0 top-[-49px] h-[177px]"></div>
      <Image
        src="/Guests.png"
        alt="Testimonials Background"
        width={1440}
        height={796}
      />
      {/* Testimonials */}
      <div className="absolute overflow-hidden bottom-[147px]  w-[565px] right-0 text-greenVogue950">
        <div className="text-3xl tracking-[-0.64px] leading-[105%] font-normal">
          Our guests loved it!
        </div>
        <div
          className="flex transition-transform mt-8 gap-6 duration-500"
          style={{
            transform: `translateX(-${currentIndex * 500}px)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`min-w-[500px] bg-white shadow-md testimonialshadow rounded-[10px] pl-[30px] pt-[42px] pb-[64px] pr-[76px] transform transition-transform ${
                currentIndex === index ? "scale-100" : "scale-100"
              }`}
            >
              <div className="flex flex-col items-start gap-4">
                <Image
                  className=""
                  src="/Avatar.png"
                  height={40}
                  width={40}
                  alt="Avatar Image"
                />
                <p className="text-sm h-[10px] text-darkBlue leading-[22px]">
                  {testimonial.name}
                </p>
              </div>

              <div>
                <div className="mt-[19px] mb-[16.42px] inline-flex align-start gap-[7.526px]">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Image
                      key={i}
                      src="/TestimonialStar.svg"
                      alt="Star Icon"
                      width={22.58}
                      height={22.58}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-6">
                <h4 className="text-[24px] font-medium leading-none">
                  {testimonial.title}
                </h4>
                <p className="text-[16px] leading-[130%] font-normal">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center mt-[33px] gap-[6px] ml-[186px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-[22px] h-[9px] rounded-[10px] transition-all ${
                currentIndex === index ? "bg-white w-[33px]" : "bg-white200"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
