import React from "react";
import start from "../images/start.png";

const StartButton = () => {
  return (
    <div className="start-button w-[6%] flex items-center justify-center h-[38px] relative over rounded-r-xl drop-shadow-xl gap-2 cursor-pointer">
      <img src={start} alt="" className="h-[50%]" />
      <h1 className="text-white font-bold text-xl italic">start</h1>
    </div>
  );
};

export default StartButton;
