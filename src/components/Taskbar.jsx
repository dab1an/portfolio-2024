import React from "react";
import StartButton from "./StartButton";
import Time from "./Time";
import StartMenu from "./StartMenu";

const Taskbar = ({ handleShowWindow }) => {
  return (
    <div className="flex h-[5%] footer shadow-lg items-center w-full z-10">
      <div className="w-[100%] flex items-center justify-between h-full">
        <StartButton handleShowWindow={handleShowWindow} />
        <h1 className=" text-white pr-5 text-lg">EN</h1>
      </div>

      <Time />
    </div>
  );
};

export default Taskbar;
