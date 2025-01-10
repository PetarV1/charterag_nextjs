import React from "react";
import Image from "next/image";

const SocialMediaSection = () => {
  return (
    <section className="bg-background pt-[112px] pb-[80px]">
      <div className="flex flex-col items-center w-[747px] gap-14 mx-auto">
        <div className="relative w-full h-[445px]">
          <Image
            className="absolute bottom-0 left-[185px] midphotoshadow z-10 rounded-[10px] rotate-[-0.079deg]"
            width={412.186}
            height={274.957}
            src="/social_media/imageMid2.png"
            alt="Social Media Middle Image"
          />
          <Image
            className="absolute top-0 left-0 rotate-[-5.492deg] origin-top-right leftphotoshadow rounded-[10px]"
            width={233.197}
            height={349.958}
            src="/social_media/imageLeft1.png"
            alt="Social Media Left Image"
          />
          <Image
            className="absolute top-[23px] right-0 rotate-[5.777deg] origin-top rightphotoshadow rounded-[10px]"
            width={262.917}
            height={349.958}
            src="/social_media/imageRight3.png"
            alt="Social Media Right Image"
          />
        </div>
        <div className="w-[464px] h-[206px] pt-[6px] mx-[141.55px]">
          <h3 className="text-greenVogue950 text-center mb-[17px] h-[70px] text-[32px] leading-[105%] font-semibold tracking-[-0.64px]">
            Check Charterag
            <br /> off your bucket list
          </h3>
          <p className="text-center h-[32px] text-base leading-[130%] text-greenVogue950">
            Lorem ipsum dolor sit amet consectetur.
            <br /> Tellus lectus non purus odio amet
          </p>
          <div className="mt-[37px] flex items-center gap-3 mx-[82px] ">
            {/* Left button */}
            <div className="py-1 px-6 flex-col cursor-pointer socialmediabtnshadow items-center justify-center rounded-[10px] bg-yellow">
              <div className="flex items-center w-[74px] h-[36px] justify-center p-[10px] text-greenVogue950">
                <span className="text-center uppercase text-base font-medium tracking-[1.219px]">
                  EXPLORE
                </span>
              </div>
            </div>
            {/* Right button */}
            <div className="py-1 px-6 flex-col cursor-pointer socialmediabtnshadow items-center justify-center rounded-[10px] bg-white">
              <div className="flex items-center w-[118px] gap-2 h-[36px] justify-center p-[10px] text-greenVogue950">
                <span className="text-center uppercase text-base font-medium tracking-[1.219px]">
                  EXPLORE
                </span>
                <Image
                  width={11}
                  height={12}
                  alt="Instagram icon"
                  src="/social_media/icons/instagram.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
