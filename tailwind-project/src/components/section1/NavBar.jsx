import React from "react";

const NavBar = () => {
  return (
    <div className="flex font-fira-code  items-center justify-between py-6 px-16">
      <button className="bg-black text-white py-2 px-3 rounded-2xl">
        TARGET AUDIENCE
      </button>
      <h3 className="text-lg tracking-widest text-black font-semibold">
        {" "}
        ↳ DIGITAL BANKING SYSTEM
      </h3>
    </div>
  );
};

export default NavBar;
