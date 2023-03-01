import React from "react";
import LOGO from "../assets/TrollFace.png";

const Header = () => {
  return (
    <div>
      <header className=" bg-gradient-to-r from-[#672280] to-[#A626D3] py-3">
        <div className=" flex items-center gap-5 mx-10 sm:mx-24 md:mx-52">
          <img src={LOGO} alt="logo" className=" w-16" />
          <h2 className=" text-2xl font-semibold text-white">Meme Generator</h2>
        </div>
      </header>
    </div>
  );
};

export default Header;
