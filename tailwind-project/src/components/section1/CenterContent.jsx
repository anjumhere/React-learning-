import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const CenterContent = () => {
  return (
    <div className="text-black flex  !py-10  gap-10  items-center h-[90vh] ">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default CenterContent;
