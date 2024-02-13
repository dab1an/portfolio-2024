import React from "react";
import profilePic from "../images/blank_profile.jpeg";

const StartMenu = () => {
  return (
    <div className="h-[450px] w-[500px absolute bottom-0 left-0 start-menu rounded-tr-lg flex flex-col items-center gap-3 pt-4 drop-shad p-1">
      <div className="w-[95%] flex items-center gap-4">
        <img
          src={profilePic}
          alt=""
          className=" w-[50px] rounded-sm outline outline-2 outline-white"
        />
        <h1 className="text-white text-xl drop-shad">Dabian</h1>
      </div>
      <div className="w-[490px] h-[320px] bg-white flex flex-col relative">
        <span className="divider h-[4px]"></span>
        <div className="w-full h-full flex">
          <div className="h-full w-[39%] flex flex-col items-center justify-start pt-2">
            <div className="flex">
              <img src="" alt="" />
            </div>
          </div>
          <div className="h-full start-context-right w-[61%]"></div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
