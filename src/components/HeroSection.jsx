import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video
        src={require("../../public/bgvideo.mp4")}
        autoPlay
        muted
        loop
        className="video"
      />
      <div className="video-overlay"></div>
      <div className="hero-text">
        <div className="title flex flex-col items-center">
          <p className="text-lg leading-[1.2]">Sail your way with</p>
          <h1 className="text-[7.25rem] max-lg:text-8xl max-md:text-6xl max-[460px]:text-4xl">
            CHARTERAG
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2 leading-[1.2]">
          <span>adventure</span>
          <Image
            src="/SoftStar.svg"
            alt="arrow"
            className="arrow"
            width={18.83}
            height={18.83}
          />
          <span>relax</span>
          <Image
            src="/SoftStar.svg"
            alt="arrow"
            className="arrow"
            width={18.83}
            height={18.83}
          />
          <span>explore</span>
          <Image
            src="/SoftStar.svg"
            alt="arrow"
            className="arrow"
            width={18.83}
            height={18.83}
          />
          <span>fun</span>
          <Image
            src="/SoftStar.svg"
            alt="arrow"
            className="arrow"
            width={18.83}
            height={18.83}
          />
          <span>dance</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
