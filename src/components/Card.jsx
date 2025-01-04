import React from "react";
import Image from "next/image";

const Card = ({ title, imgUrl }) => {
  return (
    <div className="relative rounded-[10px] w-[265px] h-[370px]">
      <Image
        src={imgUrl}
        alt={title}
        className="w-full rounded-[10px] h-full object-cover"
        width={265}
        height={370}
      />
      <h2 className="absolute top-6 left-6 text-[28px] font-normal leading-none">
        {title}
      </h2>
    </div>
  );
};

export default Card;
