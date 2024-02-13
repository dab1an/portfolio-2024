import React from "react";
import StartButton from "./StartButton";
import Time from "./Time";
import StartMenu from "./StartMenu";

const Taskbar = () => {
  return (
    <div className="flex h-[4%] footer shadow-lg items-center w-full absolute">
      <div className="w-[100%] flex items-center justify-between h-full">
        <StartButton />
        <h1 className=" text-white pr-5 text-lg">EN</h1>
      </div>

      <Time />
    </div>
  );
};

export default Taskbar;
