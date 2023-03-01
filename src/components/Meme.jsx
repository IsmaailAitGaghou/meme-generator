import React, { useState } from "react";
import memesData from "../memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState();

  function handleClick() {
    const randomNum = Math.floor(Math.random() * memesData.data.memes.length);

    setMemeImage(() => {
      return memesData.data.memes[randomNum].url;
    });
  }

  return (
    <div className=" mx-10 sm:mx-24 md:mx-52">
      <div id="form">
        <input
          type="text"
          placeholder="first text"
          className=" border-2 border-gray-400 py-1 px-9 rounded-lg"
          id="input-text"
        />
        <input
          type="text"
          placeholder="second text"
          className=" border-2 border-gray-400 py-1 px-9 rounded-lg"
          id="input-text"
        />
        <button
          className="text-white transition-all duration-500 ease-out bg-gradient-to-r from-[#672280] to-[#A626D3] py-1 rounded-lg px-5 hover:bg-gradient-to-r hover:from-[#A626D3] hover:to-[#672280] "
          id="third"
          onClick={handleClick}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div>
        <img
          src={memeImage}
          alt={memesData.data.memes.name}
          className=" w-full border-2"
        />
      </div>
    </div>
  );
};

export default Meme;
