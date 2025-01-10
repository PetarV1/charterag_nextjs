import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-greenVogue950 text-white">
      <div className="max-w-[1440px] pt-[68px] pl-[172px] pb-[64px] pr-[170px] mx-auto ">
        <div className="flex justify-between">
          <Image
            width={216}
            height={50}
            src="/footer/Charterag.svg"
            alt="Logo"
          />
          <Image width={50} height={50} src="/footer/scroll.svg" alt="Logo" />
        </div>

        <div className="pt-[90px] flex justify-between mb-[82px]">
          <div className="flex gap-[120px] ">
            <div className="first-section">
              <p className="text-[14px] leading-[130%] font-semibold mb-[22px]">
                Programs
              </p>
              <ul className="flex w-[98px] flex-col items-start gap-4 text-[14px] leading-[22px] font-normal">
                <li>Program 1</li>
                <li>Program 2</li>
                <li>Program 3</li>
                <li>Program 4</li>
              </ul>
            </div>

            <div className="second-section">
              <p className="text-[14px] leading-[130%] font-semibold mb-[20px]">
                Find out more
              </p>
              <ul className="flex w-[98px] flex-col items-start gap-4 text-[14px] leading-[22px] font-normal">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </div>

            <div className="third-section">
              <p className="text-[14px] leading-[130%] font-semibold mb-[20px]">
                Charterag
              </p>
              <ul className="flex w-[98px] flex-col items-start gap-4 text-[14px] leading-[22px] font-normal">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-greenVogue900 cursor-pointer w-[40px] h-[40px] p-2 rounded-[40px]">
              <Image
                width={24}
                height={24}
                src="/footer/icons/instagramicon.svg"
                alt="Logo"
              />
            </div>
            <div className="bg-greenVogue900 cursor-pointer w-[40px] h-[40px] p-2 rounded-[40px]">
              <Image
                width={24}
                height={24}
                src="/footer/icons/facebookicon.svg"
                alt="Logo"
              />
            </div>
            <div className="bg-greenVogue900 cursor-pointer w-[40px] h-[40px] p-2 rounded-[40px]">
              <Image
                width={24}
                height={24}
                src="/footer/icons/youtubeicon.svg"
                alt="Logo"
              />
            </div>
          </div>
        </div>
        <div className="bg-greenVogue900 h-[1px]"></div>
        <div className="flex items-end justify-between pt-[56px]">
          <p className="text-[14px] leading-[22px] font-normal">
            Copyright © 2024 Charterag Ltd. (company no. 08245801)
            <br />
            Lorem ipsum dolor sit amet lorem ipsum ipsum, United Kingdom.
          </p>
          <div className="flex items-center gap-[69px] text-[14px] leading-[22px] font-normal">
            <p>Legal info</p>
            <p>Terms and conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
