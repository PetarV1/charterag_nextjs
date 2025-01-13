import React from "react";

const AccordionChild = ({ text, progress }) => {
  return (
    <div className="flex w-[190px] h-[30px] flex-col items-start gap-[14px]">
      <p className="text-base leading-[130%] text-greenVogue950 h-[11px]">
        {text}
      </p>
      <div className="bar w-[188px] h-[6px] bg-white rounded-full relative">
        <div
          style={{ width: `${progress}` }}
          className="h-[8px] bg-green-950 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default AccordionChild;
