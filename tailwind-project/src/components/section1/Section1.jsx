import React from "react";
import NavBar from "./NavBar";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import CenterContent from "./CenterContent";

const Section1 = () => {
  return (
    <div className=" h-screen w-full text-white ">
      <NavBar />
      <CenterContent />
    </div>
  );
};

export default Section1;
