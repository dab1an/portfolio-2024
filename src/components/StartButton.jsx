import React from "react";
import start from "../images/start.png";

const StartButton = ({ handleShowWindow }) => {
  return (
    <div
      className="start-button w-[110px] flex items-center justify-center h-full over rounded-r-lg gap-2 cursor-pointer min-w-[110px] drop-shad"
      onClick={handleShowWindow}
    >
      <img src={start} alt="" className="h-[60%]" />
      <h1 className="text-white font-bold text-xl italic">start</h1>
    </div>
  );
};

export default StartButton;
