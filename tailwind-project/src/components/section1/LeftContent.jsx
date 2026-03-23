import React from "react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="text-black font-fira-code  h-full w-1/3 flex flex-col justify-between ">
      <div className="flex flex-col gap-10 px-10 pt-10">
        <h1 className="text-5xl font-bold">
          Prospective <br /> Customer <br />
          <span></span> Segmentation
        </h1>
        <p className="text-lg whitespace-wrap ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut,
          recusandae provident aliquid incidunt laudantium ipsum dolorum quae
          consequuntur accusantium?
        </p>
      </div>
      <div className="pb-5 pl-5">
        <i className="ri-arrow-right-up-line text-7xl "></i>
      </div>
    </div>
  );
};

export default LeftContent;
